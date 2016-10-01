import React from 'react';
import { Link } from 'react-router';

import styles from './styles';

export default function NavListItem({ link }) {
  return (
    <Link
      to={`/${link}`}
      activeStyle={{...styles.base, ...styles.active}}
      style={styles.base}>

      {link}
    </Link>
  );
}

NavListItem.propTypes = {
  link: React.PropTypes.string,
};
