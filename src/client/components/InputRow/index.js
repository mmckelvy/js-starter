import React from 'react'

import { Cell, Input, Submit } from 'client/components'

import validateForm from './validate-form'
import styles from './styles'

export default function InputRow({ formData, handleSubmit, handleCancel, handleChange }) {
  // Form is valid, show the submit options
  const submit = validateForm(formData)
    ? <Cell isAction><Submit handleSubmit={handleSubmit} handleCancel={handleCancel} /></Cell>
    : <Cell isAction />

  const { title, location, description, contact } = formData

  return (
    <div style={styles.container}>
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
          style={styles.textarea}
          isTextArea={true}
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

InputRow.propTypes = {
  formData: React.PropTypes.object,
  handleChange: React.PropTypes.func,
  handleCancel: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
}
