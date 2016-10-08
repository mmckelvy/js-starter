import React from 'react'

import ActionButton from '../ActionButton'

import { color, dims } from 'client/global-styles'

import styles from './styles'

export default function Modify({ handleEdit, handleDelete }) {
  return (
    <div style={styles}>
      <ActionButton
        color={color.blue500}
        style={{marginRight: dims.base * 2}}
        onClick={handleEdit}>

          EDIT
        </ActionButton>

      <ActionButton
        onClick={handleDelete}
        color={color.red500}>

        DELETE
      </ActionButton>
    </div>
  )
}

Modify.propTypes = {
  handleEdit: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
}
