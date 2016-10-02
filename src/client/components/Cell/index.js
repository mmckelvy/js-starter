import React from 'react'

import styles from './styles'

export default function Cell({ isDescription, children }) {
  return (
    <div style={styles(isDescription)}>{children}</div>
  )
}

Cell.propTypes = {
  isDescription: React.PropTypes.bool,
  children: React.PropTypes.node
}

