import React from 'react'

import { Cell, Input, Submit } from 'client/components'

import styles from './styles'

export default function NewOppRow({ formData }) {
  return (
    <div style={styles}>
      {/* Placeholder cell for layout purposes */}
      <Cell isAction />

      <Cell>
        <Input
          type="text"
          placeholder="Title..."
        />
      </Cell>
      <Cell>
        <Input
          type="text"
          placeholder="Location..."
        />
      </Cell>
      <Cell isDescription>
        <Input
          type="text"
          placeholder="Description..."
        />
      </Cell>
      <Cell>
        <Input
          type="text"
          placeholder="Contact..."
        />
      </Cell>

      <Cell isAction><Submit /></Cell>
    </div>
  )
}

NewOppRow.propTypes = {
  formData: React.PropTypes.object
}
