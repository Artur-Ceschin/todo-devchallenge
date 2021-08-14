import React from 'react';
import { ActiveLink } from '../ActiveLink';
import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>#todo</h1>
      <div className={styles.headerLinks}>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>All</a>
          </ActiveLink>
          <ActiveLink href="/active" activeClassName={styles.active}>
            <a>Active</a>
          </ActiveLink>
          <ActiveLink href="/completed" activeClassName={styles.active}>
            <a>Completed</a>
          </ActiveLink>
        </nav>
      </div>
    </div>
  );
}
