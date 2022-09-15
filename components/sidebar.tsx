import Link from 'next/link';

import styles from './sidebar.module.css';

export default function SideBar() {
  return (
    <div className={styles.main}>
      <div>
        <Link href="/">
          Home
        </Link>        
      </div>
      <div>
        <Link href="/account">
          Account
        </Link>
      </div>
    </div>
  )
}