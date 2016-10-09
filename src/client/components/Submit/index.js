import React from 'react'

import ActionButton from '../ActionButton'

import { color, dims } from 'client/global-styles'

import styles from './styles'

export default function Submit({ handleSubmit, handleCancel }) {
  return (
    <div style={styles}>
      <ActionButton
        color={color.green500}
        onClick={handleSubmit}
        style={{marginRight: dims.base * 2}}>

          SUBMIT
        </ActionButton>
      <ActionButton
        onClick={handleCancel}
        color={color.grey500}>

        CANCEL
      </ActionButton>
    </div>
  )
}

Submit.propTypes = {
  handleSubmit: React.PropTypes.func,
  handleCancel: React.PropTypes.func,
}
