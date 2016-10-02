import { font, dims } from 'client/global-styles'

export default function styles(color) {
  return {
    border: `1px solid ${color}`,
    borderRadius: '3px',
    cursor: 'pointer',
    fontFamily: font.secondary,
    fontSize: 12,
    height: dims.base * 3,
    lineHeight: `${dims.base * 3}px`,
    padding: `0 ${dims.base}px`
  }
}
