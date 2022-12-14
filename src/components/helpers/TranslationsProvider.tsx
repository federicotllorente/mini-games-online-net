import { useRouter } from 'next/router'
import { memo } from 'react'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import isEqual from 'react-fast-compare'
import { translations } from '~constants/translations'

export const TranslationsProvider = memo(function TranslationsProvider({
  children
}: {
  children: React.ReactNode
}) {
  const { locale } = useRouter()

  i18next.init({
    interpolation: { escapeValue: false },

    lng: locale,
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',

    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',

    resources: translations
  })

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
},
isEqual)
