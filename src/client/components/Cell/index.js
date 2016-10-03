import React from 'react'

import styles from './styles'

export default function Cell({ isDescription, isAction, cellStyles, children }) {
  const appliedStyles = {
    ...styles(isDescription, isAction),
    ...cellStyles
  }

  return (
    <div style={appliedStyles}>{children}</div>
  )
}

Cell.propTypes = {
  isDescription: React.PropTypes.bool,
  isAction: React.PropTypes.bool,
  cellStyles: React.PropTypes.object,
  children: React.PropTypes.node
}

