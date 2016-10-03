import React from 'react'

import { Icon } from 'client/components'

import styles from './styles'

export default function AddOppToggle({ handleClick }) {
  return (
    <div style={styles.container} onClick={handleClick}>
      <Icon name="add_circle_outline" styles={styles.icon} />
      <span>Add Opportunity</span>
    </div>
  )
}

AddOppToggle.propTypes = {
  handleClick: React.PropTypes.func
}
