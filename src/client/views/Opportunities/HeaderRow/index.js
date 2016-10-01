import React from 'react';

import Cell from 'client/components/Cell'

import styles from './styles'

export default function HeaderRow() {
  return (
    <div style={styles}>
      <Cell text="Title" />
      <Cell text="Location" />
      <Cell text="Description" isDescription />
      <Cell text="Contact" />
    </div>
  )
}
