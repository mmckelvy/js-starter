import { color, dims, type } from 'client/global-styles'

export default {
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: '0 0 120px',
    justifyContent: 'space-between',
    padding: `0 ${dims.base * 4}px`,
  },
  header: {
    ...type.h3,
    ...{color: color.grey400, width: '100%'}
  },
  img: {
    marginBottom: dims.base
  }
}
