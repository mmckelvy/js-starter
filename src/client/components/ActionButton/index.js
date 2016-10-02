import React from 'react'

import styles from './styles'

export default function ActionButton({ color, children, handleClick, buttonStyles }) {
  const defaultStyles = styles(color)

  return (
    <div
      style={{...{color}, ...defaultStyles, ...buttonStyles}}
      onClick={handleClick}>

      {children}
    </div>
  )
}

ActionButton.propTypes = {
  color: React.PropTypes.string,
  children: React.PropTypes.node,
  handleClick: React.PropTypes.func,
  buttonStyles: React.PropTypes.object,
}
