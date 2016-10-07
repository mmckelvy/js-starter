import React from 'react'

import { Cell, Input, Submit } from 'client/components'

import validateForm from './validate-form'
import styles from './styles'

export default function NewOppRow({ formData, handleAdd, handleClear, handleChange }) {
  // Form is valid, show the submit options
  const submit = validateForm(formData)
    ? <Cell isAction><Submit handleAdd={handleAdd} handleClear={handleClear} /></Cell>
    : <Cell isAction />

  const { title, location, description, contact } = formData

  return (
    <div style={styles}>
      {/* Placeholder cell for layout purposes */}
      <Cell isAction />

      <Cell>
        <Input
          type="text"
          value={title}
          placeholder="Title..."
          onChange={handleChange.bind(null, 'title')}
        />
      </Cell>
      <Cell>
        <Input
          type="text"
          value={location}
          placeholder="Location..."
          onChange={handleChange.bind(null, 'location')}
        />
      </Cell>
      <Cell isDescription>
        <Input
          type="text"
          value={description}
          placeholder="Description..."
          onChange={handleChange.bind(null, 'description')}
        />
      </Cell>
      <Cell>
        <Input
          type="text"
          value={contact}
          placeholder="Contact..."
          onChange={handleChange.bind(null, 'contact')}
        />
      </Cell>

      {submit}
    </div>
  )
}

NewOppRow.propTypes = {
  formData: React.PropTypes.object,
  handleChange: React.PropTypes.func,
  handleClear: React.PropTypes.func,
  handleAdd: React.PropTypes.func,
}
