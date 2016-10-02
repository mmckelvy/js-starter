import { color, font, fontSize } from 'client/global-styles'

export default function styles(focused, error, disabled) {
  var borderColor
  var labelColor

  if (error) {
    borderColor = color.red500
    labelColor = color.red500
  } else if (disabled) {
    borderColor = color.grey300
    labelColor = color.grey300
  } else if (focused) {
    borderColor = color.blue500
    labelColor = color.blue500
  } else {
    borderColor = color.grey400
    labelColor = color.grey400
  }

  return {
    input: {
      boxSizing: 'border-box',
      width: '100%',
      outline: 'none',
      fontFamily: font.primary,
      fontSize: fontSize.small,
      padding: '0 12px',
      border: `2px solid ${borderColor}`,
      height: '40px',
      lineHeight: '40px',
      borderRadius: '4px',
      transition: 'border 250ms ease-in-out',
    },
    label: {
      color: labelColor,
      fontFamily: 'ProximaNova-Regular, sans-serif',
      fontSize: fontSize.small,
      marginBottom: '4px',
      transition: 'color 250ms ease-in-out',
    },
  }
}
