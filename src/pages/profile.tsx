import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const Profile: NextPage = () => {
  const { t } = useTranslation()

  return <p>{t('routes.profile')}</p>
}

export default Profile
