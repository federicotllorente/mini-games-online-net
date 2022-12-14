import { ComponentPropsWithRef, FunctionComponent } from 'react'
import { GameCard as GameCardType } from '~types'

type GameCardProps = FunctionComponent<
  ComponentPropsWithRef<'div'> & GameCardType
>

export const GameCard: GameCardProps = ({ name, image }) => (
  <div className="w-screen-8/10 h-screen-w-6/10 relative">
    {image && (
      <>
        <img
          src={image}
          alt={`${name} image`}
          className="absolute w-full h-full rounded"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-secondary-black to-transparent opacity-80 rounded"></span>
      </>
    )}
    <p className="absolute bottom-1.5 left-2.5">{name}</p>
  </div>
)
