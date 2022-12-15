import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const About: NextPage = () => {
  const { t } = useTranslation()

  return <p>{t('routes.about')}</p>
}

export default About
