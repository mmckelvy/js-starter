import { dims } from 'client/global-styles'

export default function styles(isDescription) {
  let flexProp

  if (isDescription) {
    flexProp = `0 1 ${dims.tableLarge}px`
  } else {
    flexProp = `0 0 ${dims.tableBase}px`
  }

  return {
    flex: flexProp,
    padding: `0 ${dims.base * 3}px`,
    textAlign: 'justify',
  }
}
