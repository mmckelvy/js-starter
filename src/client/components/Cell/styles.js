import { dims } from 'client/global-styles'

export default function styles(isDescription, isAction) {
  let flexProp

  if (isDescription) {
    flexProp = `1 1 ${dims.tableLarge}px`
  } else if (isAction) {
    flexProp = `1 1 ${dims.tableSmall}px`
  } else {
    flexProp = `1 1 ${dims.tableBase}px`
  }

  return {
    flex: flexProp,
    padding: `0 ${dims.base * 3}px`,
    textAlign: 'justify',
  }
}
