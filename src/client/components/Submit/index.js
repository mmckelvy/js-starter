import React from 'react'

import ActionButton from '../ActionButton'

import { color, dims } from 'client/global-styles'

import styles from './styles'

export default function Submit() {
  return (
    <div style={styles}>
      <ActionButton color={color.green500} buttonStyles={{marginRight: dims.base * 2}}>SUBMIT</ActionButton>
      <ActionButton color={color.grey500} buttonStyles={{marginRight: dims.base * 2}}>CLEAR</ActionButton>
    </div>
  )
}
