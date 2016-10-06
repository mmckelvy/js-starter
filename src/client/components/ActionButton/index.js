import React from 'react'

import styles from './styles'

export default function ActionButton({ color, children, onClick, style }) {
  const defaultStyles = styles(color)

  return (
    <div
      style={{...{color}, ...defaultStyles, ...style}}
      onClick={onClick}>

      {children}
    </div>
  )
}

ActionButton.propTypes = {
  color: React.PropTypes.string,
  children: React.PropTypes.node,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
}
