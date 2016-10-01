import { color, font, fontSize } from 'client/global-styles';

export default {
  active: {
    borderBottomColor: color.orange900
  },
  base: {
    borderBottomColor: 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
    color: color.grey500,
    cursor: 'pointer',
    fontFamily: font.secondary,
    fontSize: fontSize.small,
    paddingBottom: '16px',
    textDecoration: 'none',
    transition: 'border-bottom-color 250ms ease-in-out',
  },
};
