import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const Favorites: NextPage = () => {
  const { t } = useTranslation()

  return <p>{t('routes.favorites')}</p>
}

export default Favorites
