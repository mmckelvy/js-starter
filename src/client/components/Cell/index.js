import React from 'react'

import styles from './styles'

export default function Cell({ text, isDescription }) {
  return (
    <div style={styles(isDescription)}>{text}</div>
  )
}

Cell.propTypes = {
  isDescription: React.PropTypes.bool,
  text: React.PropTypes.string,
}

