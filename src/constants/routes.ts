export const routes = {
  home: {
    en: '/',
    es: '/'
  },
  'all-games': {
    en: '/all-games',
    es: '/todos-los-juegos'
  },
  favorites: {
    en: '/favorites',
    es: '/favoritos'
  },
  profile: {
    en: '/profile',
    es: '/perfil'
  },
  settings: {
    en: '/settings',
    es: '/configuraciones'
  },
  about: {
    en: '/about',
    es: '/mas-informacion'
  }
}

export const allRoutes = {
  ...routes,
  login: {
    en: '/login',
    es: '/iniciar-sesion'
  },
  logout: {
    en: '/logout',
    es: '/cerrar-sesion'
  }
}
