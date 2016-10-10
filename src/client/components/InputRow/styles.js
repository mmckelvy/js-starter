import { dims } from 'client/global-styles'

export default {
  container: {
    display: 'flex',
    padding: `${dims.base * 2}px 0`,
    position: 'relative',
  },
  textarea: {
    minHeight: dims.base * 20,
    maxWidth: '100%',
    resize: 'vertical'
  }
}

