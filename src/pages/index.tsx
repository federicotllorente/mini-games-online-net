import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { ProfileSummary } from '~components/atoms/ProfileSummary'
import { GameCardGrid } from '~components/organisms/GameCardGrid'

const Homepage: NextPage = () => {
  const { t } = useTranslation()
  const { firstName, lastName, points, recentlyPlayedGames } = mockedData // TODO

  return (
    <section>
      <ProfileSummary
        firstName={firstName}
        lastName={lastName}
        points={points}
      />
      <h2 className="py-3">{t('homepage.welcome', { firstName })}</h2>
      <GameCardGrid
        title={t('homepage.recently-played') ?? undefined}
        gameCardList={recentlyPlayedGames}
      />
    </section>
  )
}

const mockedData = {
  firstName: 'FirstName',
  lastName: 'LastName',
  points: 1024,
  recentlyPlayedGames: Array(3).fill({
    name: 'Candy Crush Saga',
    image: '/static/images/candy-crush-saga.png'
  })
}

export default Homepage
