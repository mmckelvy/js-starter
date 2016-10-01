import React from 'react'

import Cell from 'client/components/Cell'

import styles from './styles'

export default function OppRow({ opp }) {
  const { title, location, description, contact } = opp

  return (
    <div style={styles}>
      <Cell text={title} />
      <Cell text={location} />
      <Cell text={description} isDescription />
      <Cell text={contact} />
    </div>
  )
}

OppRow.propTypes = {
  opp: React.PropTypes.object
}
