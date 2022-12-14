import HomeIcon from '~assets/svg/home-white.svg'
import ControllerIcon from '~assets/svg/controller-white.svg'
import FavoritesIcon from '~assets/svg/favorite-white.svg'
import ProfileIcon from '~assets/svg/person-white.svg'
import SettingsIcon from '~assets/svg/settings-white.svg'
import AboutIcon from '~assets/svg/info-white.svg'

import HomeIconPurple from '~assets/svg/home-purple.svg'
import ControllerIconPurple from '~assets/svg/controller-purple.svg'
import FavoritesIconPurple from '~assets/svg/favorite-purple.svg'
import ProfileIconPurple from '~assets/svg/person-purple.svg'
import SettingsIconPurple from '~assets/svg/settings-purple.svg'
import AboutIconPurple from '~assets/svg/info-purple.svg'

export const getIconFromRoute = (route: string, isPurple = false) => {
  if (isPurple) {
    switch (route) {
    case '/':
      return HomeIconPurple
    case '/all-games':
      return ControllerIconPurple
    case '/favorites':
      return FavoritesIconPurple
    case '/profile':
      return ProfileIconPurple
    case '/settings':
      return SettingsIconPurple
    case '/about':
      return AboutIconPurple
    default:
      return undefined
    }
  }

  switch (route) {
  case '/':
    return HomeIcon
  case '/all-games':
    return ControllerIcon
  case '/favorites':
    return FavoritesIcon
  case '/profile':
    return ProfileIcon
  case '/settings':
    return SettingsIcon
  case '/about':
    return AboutIcon
  default:
    return undefined
  }
}
