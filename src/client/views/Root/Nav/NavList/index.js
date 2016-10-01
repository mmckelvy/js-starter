import React from 'react';

import NavListItem from './NavListItem';

import styles from './styles';
import links from './links';

export default function NavList() {
  const items = links.map((link, index) => <NavListItem key={index} link={link} />);

  return (
    <div style={styles}>
      {items}
    </div>
  );
}
