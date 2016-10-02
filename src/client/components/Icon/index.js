import React from 'react'

import { color, fontSize } from 'client/global-styles'

export default function Icon({ name, iconColor = color.orange900, size = fontSize.medium, styles }) {
  return (
    <i
      style={{...{color: iconColor, fontSize: size}, ...styles}}
      className="material-icons">

      {name}
    </i>
  )
}

Icon.propTypes = {
  name: React.PropTypes.string,
  iconColor: React.PropTypes.string,
  size: React.PropTypes.string,
  styles: React.PropTypes.object
}
