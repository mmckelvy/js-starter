import React from 'react'

import ActionButton from '../ActionButton'

import { color, dims } from 'client/global-styles'

import styles from './styles'

export default function Modify() {
  return (
    <div style={styles}>
      <ActionButton color={color.blue500} style={{marginRight: dims.base * 2}}>EDIT</ActionButton>
      <ActionButton color={color.red500}>DELETE</ActionButton>
    </div>
  )
}
