import React from 'react'

import Cell from 'client/components/Cell'
import Input from 'client/components/Input'

import styles from './styles'

export default function NewOppRow() {
  return (
    <div style={styles}>
      <Cell>
        <Input
          inputType="text"
          placeholder="Title"
        />
      </Cell>
      <Cell>
        <Input
          inputType="text"
          placeholder="Location"
        />
      </Cell>
      <Cell isDescription>
        <Input
          inputType="text"
          placeholder="Description"
        />
      </Cell>
      <Cell>
        <Input
          inputType="text"
          placeholder="Contact"
        />
      </Cell>
    </div>
  )
}

