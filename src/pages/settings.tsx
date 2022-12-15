import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const Settings: NextPage = () => {
  const { t } = useTranslation()

  return <p>{t('routes.settings')}</p>
}

export default Settings
