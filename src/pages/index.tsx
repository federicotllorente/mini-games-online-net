import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { ProfileSummary } from '~components/atoms/ProfileSummary'
import { GameCardGrid } from '~components/organisms/GameCardGrid'

const Homepage: NextPage = () => {
  const { t } = useTranslation()
  const { firstName, lastName, points, recentlyPlayedGames, allGames } =
    mockedData // TODO

  return (
    <>
      <ProfileSummary
        firstName={firstName}
        lastName={lastName}
        points={points}
      />
      <h2>{t('homepage.welcome', { firstName })}</h2>
      <GameCardGrid
        title={t('homepage.recently-played') ?? undefined}
        gameCardList={recentlyPlayedGames}
      />
      <GameCardGrid
        title={t('routes.all-games') ?? undefined}
        gameCardList={allGames}
      />
    </>
  )
}

const mockedData = {
  firstName: 'FirstName',
  lastName: 'LastName',
  points: 1024,
  recentlyPlayedGames: [
    {
      name: 'Minecraft',
      image: '/static/images/minecraft.jpg'
    },
    {
      name: 'Candy Crush Saga',
      image: '/static/images/candy-crush-saga.png'
    }
  ],
  allGames: [
    {
      name: 'Candy Crush Saga',
      image: '/static/images/candy-crush-saga.png'
    },
    {
      name: 'Minecraft',
      image: '/static/images/minecraft.jpg'
    },
    {
      name: 'Tetris',
      image: '/static/images/tetris.jpg'
    },
    {
      name: '2048',
      image: '/static/images/2048.jpg'
    }
  ]
}

export default Homepage
