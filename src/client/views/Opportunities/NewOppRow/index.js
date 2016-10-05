import React from 'react'

import { Cell, Input, Submit } from 'client/components'

import styles from './styles'

/**
Need to map this to the inputs...

Should probably do a map...
*/

export default function NewOppRow({ handleChange }) {
  return (
    <div style={styles}>
      {/* Placeholder cell for layout purposes */}
      <Cell isAction />

      <Cell>
        <Input
          type="text"
          placeholder="Title..."
          onChange={handleChange.bind(null, 'title')}
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
  formData: React.PropTypes.object,
  handleChange: React.PropTypes.func,
}
