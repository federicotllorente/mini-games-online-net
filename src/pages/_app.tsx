import { NextComponentType, NextPage } from 'next'
import App, { AppProps, AppContext, AppInitialProps } from 'next/app'
import '../styles/globals.css'
import { Layout, TranslationsProvider } from '~components/helpers'

type MyAppProps = AppProps & { Component: NextPage }

const MyApp: NextComponentType<AppContext, AppInitialProps, MyAppProps> = ({
  Component,
  pageProps
}) => (
  <TranslationsProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </TranslationsProvider>
)

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
