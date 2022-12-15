import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const AllGames: NextPage = () => {
  const { t } = useTranslation()

  return <p>{t('routes.all-games')}</p>
}

export default AllGames
