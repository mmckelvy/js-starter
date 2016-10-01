import React from 'react'

import OppRow from './OppRow'

import styles from './styles'

export default function OppsList({ opps }) {
  const els = opps.map((opp, index) => <OppRow key={index} opp={opp} />)

  return <div style={styles}>{els}</div>
}

OppsList.propTypes = {
  opps: React.PropTypes.array
}
