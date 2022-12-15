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
    <div className="overflow-x-scroll -mx-3 px-3">
      <div className="w-max flex gap-1.5">
        {gameCardList.map((gameCard, idx) => (
          <GameCard key={`game-card-${idx}`} {...gameCard} />
        ))}
      </div>
    </div>
  </div>
)
