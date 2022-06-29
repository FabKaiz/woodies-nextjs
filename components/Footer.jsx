import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* div newsletters */}
      <div className={styles.newsletterContainer}>
        <div>
          <h2>Subscribe to our newsletter</h2>
          <p>A monthly digest of the new WOODIES products, hot offers, and resources.</p>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Your email address" />
          <button className={styles.inputBtn}>Subscribe</button>
        </div>
      </div>
      {/* div bottom */}
    </footer>
  )
}

export default Footer