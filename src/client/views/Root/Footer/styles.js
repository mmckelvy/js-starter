import { color, dims, type } from 'client/global-styles';

export default {
  container: {
    display: 'flex',
    flex: `0 0 ${dims.base * 8}px`,
    justifyContent: 'center',
    padding: `${dims.base * 2}px`,
  },
  type: {...type.accent, ...{color: color.orange900}}
};
