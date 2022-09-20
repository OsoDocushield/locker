import Link from 'next/link';

import styles from './sidebar.module.css';

export default function SideBar() {
  return (
    <div className={styles.main}>
      <div className={styles.item}>
        <Link href="/">
          Home
        </Link>        
      </div>
      <div className={styles.item}>
        <Link href="/account">
          Account
        </Link>
      </div>
    </div>
  )
}