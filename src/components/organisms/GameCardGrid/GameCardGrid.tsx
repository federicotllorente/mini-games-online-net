import { ComponentPropsWithRef, FunctionComponent } from 'react'
import { GameCard as GameCardType } from '~types'
import { GameCard } from '~components/molecules/GameCard'

type GameCardGridProps = FunctionComponent<
  ComponentPropsWithRef<'div'> & {
    gameCardList: GameCardType[]
    title?: string
    displayTitle?: boolean
  }
>

export const GameCardGrid: GameCardGridProps = ({
  gameCardList,
  title,
  displayTitle = true
}) => (
  <div>
    {title && displayTitle && <h3 className="pb-1.5">{title}</h3>}
    <div className="overflow-x-scroll md:overflow-auto -mx-3 px-3 md:mx-0 md:px-0">
      <div className="w-max md:w-full flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-1.5">
        {gameCardList.map((gameCard, idx) => (
          <GameCard key={`game-card-${idx}`} {...gameCard} />
        ))}
      </div>
    </div>
  </div>
)
