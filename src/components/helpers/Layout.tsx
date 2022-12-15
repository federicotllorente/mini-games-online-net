import { ComponentPropsWithRef, FunctionComponent } from 'react'
import { Header } from '~components/molecules/Header'

export const Layout: FunctionComponent<ComponentPropsWithRef<'div'>> = ({
  children
}) => (
  <>
    <Header />
    <div className="w-full flex flex-col md:float-right md:w-screen-2/3 lg:w-screen-3/4 min-h-screen pt-11.5 md:pt-3 px-3 pb-3 gap-3 text-secondary-white">
      {children}
    </div>
    {/* <Footer /> */}
  </>
)
