import React from 'react'

import Cell from 'client/components/Cell'

import styles from './styles'

export default function OppRow({ opp }) {
  const { title, location, description, contact } = opp

  return (
    <div style={styles}>
      <Cell>{title}</Cell>
      <Cell>{location}</Cell>
      <Cell isDescription>{description}</Cell>
      <Cell>{contact}</Cell>
    </div>
  )
}

OppRow.propTypes = {
  opp: React.PropTypes.object
}
