import classNames from 'classnames'
import { ComponentPropsWithRef, FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import ProfileIcon from '~assets/svg/person-white.svg'

type ProfileSummaryProps = FunctionComponent<
  ComponentPropsWithRef<'div'> & {
    firstName: string
    lastName?: string
    points: number
  }
>

export const ProfileSummary: ProfileSummaryProps = ({
  firstName,
  lastName,
  points,
  className
}) => {
  const { t } = useTranslation()

  return (
    <div
      className={classNames(
        'flex flex-row-reverse gap-2 items-center',
        className
      )}
    >
      <button className="w-5 h-5 p-1.25 rounded-full bg-primary-blue-darkWithOpacity">
        <ProfileIcon />
      </button>
      <span className="text-right">
        <p>
          {firstName}
          {lastName ? ` ${lastName}` : ''}
        </p>
        <p className="text-xs">{t('profile.points', { points })}</p>
      </span>
    </div>
  )
}
