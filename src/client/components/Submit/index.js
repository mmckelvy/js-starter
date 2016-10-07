import React from 'react'

import ActionButton from '../ActionButton'

import { color, dims } from 'client/global-styles'

import styles from './styles'

export default function Submit({ handleAdd, handleClear }) {
  return (
    <div style={styles}>
      <ActionButton
        color={color.green500}
        onClick={handleAdd}
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
  handleAdd: React.PropTypes.func,
  handleClear: React.PropTypes.func,
}
