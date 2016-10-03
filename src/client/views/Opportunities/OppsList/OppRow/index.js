import React from 'react'

import { Cell, Modify, Submit } from 'client/components'

import styles from './styles'

export default function OppRow({ opp }) {
  const { title, location, description, contact } = opp

  return (
    <div style={styles}>
      <Cell isAction><Modify /></Cell>
      <Cell>{title}</Cell>
      <Cell>{location}</Cell>
      <Cell isDescription>{description}</Cell>
      <Cell>{contact}</Cell>

      <Cell isAction><Submit /></Cell>
    </div>
  )
}

OppRow.propTypes = {
  opp: React.PropTypes.object
}
