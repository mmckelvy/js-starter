import React, { Component } from 'react'

import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'

import styles from './styles'

export default class Root extends Component {

  render() {
    const { location, children } = this.props

    return (
      <div style={styles.container}>
        <Nav />
        <Content pathname={location.pathname}>
          {children}
        </Content>
        <Footer />
      </div>
    )
  }
}

Root.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
}
