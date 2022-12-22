/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true
})

const { locales, defaultLocale } = require('./config-constants')

const createUrl = (locale, route) =>
  `${locale === defaultLocale ? '' : `/${locale}`}/${route}`

const routes = [
  {
    route: 'projects',
    translations: {
      en: 'projects',
      es: 'proyectos'
    }
  },
  // {
  //   route: 'services',
  //   translations: {
  //     en: 'services',
  //     es: 'servicios'
  //   }
  // },
  {
    route: 'blog',
    translations: {
      en: 'blog',
      es: 'blog'
    }
  },
  {
    route: 'about',
    translations: {
      en: 'about',
      es: 'sobre-mi'
    }
  }
  // {
  //   route: 'contact',
  //   translations: {
  //     en: 'contact',
  //     es: 'contacto'
  //   }
  // }
]

module.exports = withBundleAnalyzer({
  i18n: {
    locales,
    defaultLocale,
    localeDetection: true
  },
  // async rewrites() {
  //   return routes.flatMap(({ route, translations }) =>
  //     Object.keys(translations).map(locale => ({
  //       source: `/${translations[locale]}`,
  //       destination: createUrl(locale, route),
  //       locale: false
  //     }))
  //   )
  // },
  // async redirects() {
  //   return routes.flatMap(({ route, translations }) =>
  //     Object.keys(translations).map(locale => ({
  //       source: createUrl(locale, route),
  //       destination: `/${translations[locale]}`,
  //       locale: false,
  //       permanent: true
  //     }))
  //   )
  // },
  publicRuntimeConfig: {
    featureFlags: {
      isInProgress:
        process.env.FEATURE_FLAG_IS_IN_PROGRESS === 'false' ? false : true
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
})
