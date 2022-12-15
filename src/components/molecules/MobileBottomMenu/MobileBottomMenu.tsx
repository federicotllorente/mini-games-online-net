import Link from 'next/link'
import { useRouter } from 'next/router'
import { ComponentPropsWithRef, FunctionComponent, useMemo } from 'react'
import { mobileBottomMenu } from '~constants/routes'
import { getIconFromRoute } from '~helpers/getIconFromRoute'
import { useBreakpoint } from '~helpers/useBreakpoint'

export const MobileBottomMenu: FunctionComponent<
  ComponentPropsWithRef<'div'>
> = () => {
  const { locale, pathname } = useRouter()
  const breakpoint = useBreakpoint()
  const isMobile = useMemo(
    () => breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'sm2',
    [breakpoint]
  )

  if (!isMobile) return null
  return (
    <div className="fixed w-full flex z-10 bottom-0 bg-primary-blue-darkestWithOpacity">
      {/* <span className="absolute w-full h-full"></span> */}
      {Object.keys(mobileBottomMenu).map(route => {
        const Icon = getIconFromRoute(
          mobileBottomMenu[route as keyof typeof mobileBottomMenu].en,
          mobileBottomMenu[route as keyof typeof mobileBottomMenu].en ===
            pathname
        )
        return (
          <Link
            key={`mobile-bottom-menu-item-indicator-${
              mobileBottomMenu[route as keyof typeof mobileBottomMenu].en
            }`}
            href={
              mobileBottomMenu[route as keyof typeof mobileBottomMenu][
                (locale ?? 'en') as 'en' | 'es'
              ]
            }
            passHref
          >
            <a
              className="relative flex h-6.25 justify-center items-center"
              style={{
                width: `${100 / Object.keys(mobileBottomMenu).length}%`
              }}
            >
              {mobileBottomMenu[route as keyof typeof mobileBottomMenu].en ===
                pathname && (
                <span className="absolute w-full h-0.375 bottom-0 left-0 bg-primary-purple"></span>
              )}
              <Icon />
            </a>
          </Link>
        )
      })}
    </div>
  )
}
