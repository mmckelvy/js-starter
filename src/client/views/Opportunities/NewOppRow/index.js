import React from 'react'

import { Cell, Input, Submit } from 'client/components'

import styles from './styles'

export default function NewOppRow() {
  return (
    <div style={styles}>
      {/* Placeholder cell for layout purposes */}
      <Cell isAction />

      <Cell>
        <Input
          inputType="text"
          placeholder="Title..."
        />
      </Cell>
      <Cell>
        <Input
          inputType="text"
          placeholder="Location..."
        />
      </Cell>
      <Cell isDescription>
        <Input
          inputType="text"
          placeholder="Description..."
        />
      </Cell>
      <Cell>
        <Input
          inputType="text"
          placeholder="Contact..."
        />
      </Cell>

      <Cell isAction><Submit /></Cell>
    </div>
  )
}

