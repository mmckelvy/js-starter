import React from 'react'

import styles from './styles'

export default function ActionButton({ color, children, handleClick, style }) {
  const defaultStyles = styles(color)

  return (
    <div
      style={{...{color}, ...defaultStyles, ...style}}
      onClick={handleClick}>

      {children}
    </div>
  )
}

ActionButton.propTypes = {
  color: React.PropTypes.string,
  children: React.PropTypes.node,
  handleClick: React.PropTypes.func,
  style: React.PropTypes.object,
}
