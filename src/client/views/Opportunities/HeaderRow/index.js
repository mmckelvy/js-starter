import React from 'react';

import Cell from 'client/components/Cell'

import styles from './styles'

export default function HeaderRow() {
  return (
    <div style={styles}>
      <Cell>Title</Cell>
      <Cell>Location</Cell>
      <Cell isDescription>Description</Cell>
      <Cell>Contact</Cell>
    </div>
  )
}
