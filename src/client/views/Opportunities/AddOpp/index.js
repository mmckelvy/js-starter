import React from 'react'

import Icon from 'client/components/Icon'

import styles from './styles'

export default function AddOpp() {
  return (
    <div style={styles.container}>
      <Icon name="add_circle_outline" styles={styles.icon} />
      <span>Add Opportunity</span>
    </div>
  )
}
