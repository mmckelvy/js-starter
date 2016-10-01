import React, { Component } from 'react';

import NavList from './NavList';

import styles from './styles';
import mkLogo from './mk-logo.png';

export default class Nav extends Component {
  render() {
    return (
      <nav style={styles.container}>
        <div>
          <img style={styles.img} src={mkLogo} />
          <h3 style={styles.header}>Admin Page</h3>
        </div>
        <NavList />
      </nav>
    );
  }
}
