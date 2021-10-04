import React from 'react';
import PATH from '../constants/path';

import styles from '../styles/Header.module.css';

const menuList = [
  {
    id: 'home',
    path: PATH.HOME,
    name: '홈',
  },
  {
    id: 'detail',
    path: PATH.DETAIL,
    name: '제주도 항공권',
  },
  {
    id: 'reservation',
    path: PATH.RESERVATION,
    name: '예약',
  },
];

const Header = ({ currentPath }) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        {menuList.map(({ id, path, name }) => (
          <li key={id} className={styles.menu_item}>
            <a
              href={path}
              aria-current={currentPath === path ? 'page' : 'tab'}
              active={currentPath === path ? 'true' : 'false'}
              rel="noreferrer noopener"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
