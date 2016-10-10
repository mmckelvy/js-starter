import { dims } from 'client/global-styles'

export default function styles(pathname) {
  const baseStyles = {
    flex: `1 1 100%`,
  }

  const addlStyles = {
    login: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    opportunities: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: dims.base * 4
    },
  }

  return {
    ...baseStyles,
    ...addlStyles[pathname.slice(1)]
  }
}
