import React from 'react'

import { Cell, Modify, Submit } from 'client/components'

import styles from './styles'

export default function OppRow({ opp, handleEdit, handleDelete }) {
  const { title, location, description, contact } = opp

  return (
    <div style={styles}>
      <Cell isAction><Modify handleEdit={handleEdit} handleDelete={handleDelete} /></Cell>
      <Cell>{title}</Cell>
      <Cell>{location}</Cell>
      <Cell isDescription>{description}</Cell>
      <Cell>{contact}</Cell>

      {/* Placeholder cell for formatting purposes */}
      <Cell isAction><Submit /></Cell>
    </div>
  )
}

OppRow.propTypes = {
  opp: React.PropTypes.object,
  handleEdit: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
}
