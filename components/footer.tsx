import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      NFT locker &copy; {new Date().getFullYear()}
    </footer>
  )
}
