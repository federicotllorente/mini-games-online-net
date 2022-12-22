import getConfig from 'next/config'
import { ComponentPropsWithRef, FunctionComponent } from 'react'
import { Header } from '~components/molecules/Header'
import { MobileBottomMenu } from '~components/molecules/MobileBottomMenu'

export const Layout: FunctionComponent<ComponentPropsWithRef<'div'>> = ({
  children
}) => {
  const { publicRuntimeConfig } = getConfig()

  return (
    <>
      {publicRuntimeConfig.featureFlags?.isInProgress && (
        <section className="fixed z-8 bottom-8.25 md:bottom-2 inset-x-2 md:inset-x-auto md:right-2 px-2.5 py-2 bg-secondary-red-dark text-secondary-white-light rounded">
          <span>
            <strong>Note:</strong> This project is in progress
          </span>
        </section>
      )}
      <Header />
      <MobileBottomMenu />
      <div className="w-full flex flex-col md:float-right md:w-screen-2/3 lg:w-screen-3/4 min-h-screen pt-11.5 md:pt-3 px-3 pb-9.25 md:pb-3 gap-3 text-secondary-white">
        {children}
      </div>
    </>
  )
}
