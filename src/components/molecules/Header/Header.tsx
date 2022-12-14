import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ComponentPropsWithRef,
  FunctionComponent,
  useMemo,
  useState
} from 'react'
import { t } from 'i18next'
import classNames from 'classnames'
import { allRoutes, routes } from '~constants/routes'
import { getIconFromRoute } from '~helpers/getIconFromRoute'
import MenuIcon from '~assets/svg/menu-white.svg'
import CloseIcon from '~assets/svg/close-white.svg'
// import LoginIcon from '~assets/svg/login-white.svg'
import LogoutIcon from '~assets/svg/logout-white.svg'
import { useBreakpoint } from '~helpers/useBreakpoint'

export const Header: FunctionComponent<
  ComponentPropsWithRef<'header'>
> = () => {
  const { locale, pathname } = useRouter()
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false)
  const breakpoint = useBreakpoint()
  const isMobile = useMemo(
    () => breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'sm2',
    [breakpoint]
  )

  return (
    <>
      <header className="fixed z-10 w-full md:w-screen-1/3 lg:w-screen-1/4 flex p-3 gap-3 bg-primary-blue-darkestWithOpacity md:bg-primary-blue-darkWithOpacity md:border-b md:border-secondary-white-withHighOpacity">
        {isMobile && (
          <button onClick={() => setMenuIsOpened(v => !v)}>
            {menuIsOpened ? <CloseIcon /> : <MenuIcon />}
          </button>
        )}
        <img src="/static/images/logo.png" alt="Logo" width={200} />
      </header>
      {(menuIsOpened || !isMobile) && (
        <>
          {isMobile && (
            <span className="fixed z-9 w-full h-screen-minus-header bg-gradient-to-br from-primary-blue-dark to-primary-purple-dark"></span>
          )}
          <div className="fixed z-10 w-full md:w-screen-1/3 lg:w-screen-1/4 h-screen-minus-header flex flex-col justify-between mt-8.5 bg-primary-blue-darkWithOpacity text-secondary-white">
            <div>
              {Object.keys(routes).map(route => {
                const Icon = getIconFromRoute(
                  routes[route as keyof typeof routes].en,
                  routes[route as keyof typeof routes].en === pathname
                )
                return (
                  <>
                    {routes[route as keyof typeof routes].en === pathname && (
                      <span
                        key={`menu-item-indicator-${
                          routes[route as keyof typeof routes].en
                        }`}
                        className="absolute w-0.375 h-9.125 bg-primary-purple"
                      ></span>
                    )}
                    <Link
                      key={`menu-item-${
                        routes[route as keyof typeof routes].en
                      }`}
                      href={
                        routes[route as keyof typeof routes][
                          (locale ?? 'en') as 'en' | 'es'
                        ]
                      }
                      passHref
                    >
                      <a
                        className={classNames(
                          'flex p-3 gap-3 border-b border-secondary-white-withHighOpacity transition md:hover:bg-primary-blue-darkWithOpacity',
                          {
                            'text-primary-purple-light':
                              routes[route as keyof typeof routes].en ===
                              pathname
                          }
                        )}
                      >
                        <Icon />
                        <span>
                          {t(
                            `routes.${
                              routes[route as keyof typeof routes].en === '/'
                                ? 'home'
                                : routes[
                                    route as keyof typeof routes
                                ].en.substring(1)
                            }`
                          )}
                        </span>
                      </a>
                    </Link>
                  </>
                )
              })}
            </div>
            <div>
              {allRoutes.logout.en === pathname && (
                <span className="absolute w-0.375 h-9.125 bg-primary-purple"></span>
              )}
              <Link
                href={allRoutes.logout[(locale ?? 'en') as 'en' | 'es']}
                passHref
              >
                <a
                  className={classNames(
                    'flex p-3 gap-3 border-t border-secondary-white-withHighOpacity transition md:hover:bg-secondary-red-darkWithOpacity',
                    {
                      'text-primary-purple-light':
                        allRoutes.logout.en === pathname
                    }
                  )}
                >
                  <LogoutIcon />
                  <span>
                    {t(
                      `routes.${
                        allRoutes.logout.en === '/'
                          ? 'home'
                          : allRoutes.logout.en.substring(1)
                      }`
                    )}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
