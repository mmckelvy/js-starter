export const color = {
  grey300: '#CCCCCC',
  grey400: '#BFBFBF',
  grey500: '#999999',
  grey600: '#737373',
  orange100: '#FFE0B2',
  orange900: '#E65100',
  red500: '#F44336',
  blue500: '#2196F3',
  green500: '#4CAF50'
}

export const dims = {
  base: 8,
  tableBase: 250,
  tableLarge: 500,
}

export const font = {
  primary: 'Quattrocento, serif',
  secondary: 'Open Sans, sans-serif',
}

export const fontSize = {
  small: '14px', // links, buttons
  base: '18px', // body text
  medium: '24px', // Subheaders
  large: '32px', // Section headers
  xl: '48px', // Landing header
}

export const type = {
  accent: {
    color: color.grey500,
    fontFamily: font.secondary,
    fontSize: fontSize.small,
    fontWeight: 400,
    lineHeight: 1,
  },
  body: {
    color: 'black',
    fontFamily: font.primary,
    fontSize: fontSize.base,
    lineHeight: 1.5
  },
  h1: {
    color: color.orange900,
    fontFamily: font.secondary,
    fontSize: fontSize.xl,
    fontWeight: 300,
    lineHeight: 1,
  },
  h2: {
    color: color.grey600,
    fontFamily: font.secondary,
    fontSize: fontSize.large,
    fontWeight: 300,
    lineHeight: 1,
  },
  h3: {
    color: color.grey600,
    fontFamily: font.secondary,
    fontSize: fontSize.medium,
    fontWeight: 300,
    lineHeight: 1,
  },
}
