import React from 'react'

import styles from './styles'

export default function Content({ pathname, children }) {
  const appliedStyles = styles(pathname)

  return <div style={appliedStyles}>{children}</div>
}

Content.propTypes = {
  children: React.PropTypes.node,
  pathname: React.PropTypes.string,
}
