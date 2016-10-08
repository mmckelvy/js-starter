import React from 'react'

import ActionButton from '../ActionButton'

import { color, dims } from 'client/global-styles'

import styles from './styles'

export default function Submit({ handleSubmit, handleClear }) {
  return (
    <div style={styles}>
      <ActionButton
        color={color.green500}
        onClick={handleSubmit}
        style={{marginRight: dims.base * 2}}>

          SUBMIT
        </ActionButton>
      <ActionButton
        onClick={handleClear}
        color={color.grey500}>

        CLEAR
      </ActionButton>
    </div>
  )
}

Submit.propTypes = {
  handleSubmit: React.PropTypes.func,
  handleClear: React.PropTypes.func,
}
