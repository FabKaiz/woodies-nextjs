import styles from '../styles/Footer.module.scss'
import logo from '../public/assets/headerLogo.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* div newsletters */}
      <div className={styles.newsletterContainer}>
        <div>
          <h2>Subscribe to our newsletter</h2>
          <p>
            A monthly digest of the new WOODIES products, hot offers, and
            resources.
          </p>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Your email address" />
          <button className={styles.inputBtn}>Subscribe</button>
        </div>
      </div>
      {/* div bottom */}
      <div className={styles.footerLinks}>
        <div className={styles.line} />
        <div className={styles.linksContainer}>
          <div className={styles.col}>
            <Image
              src={logo}
              alt="logo"
              layout="fixed"
              width={190}
              height={33}
            />
            <p>(012) 8967453</p>
            <p>woodies@gmail.com</p>
            <p>Jakarta, Indonesia</p>
          </div>
          <div className={styles.col}>
            <h4>Product</h4>
            <p>Furnitures</p>
            <p>Packages</p>
            <p>Services</p>
          </div>
          <div className={styles.col}>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Jobs</p>
            <p>Our Team</p>
          </div>
          <div className={styles.col}>
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2020 WOODIES - coded with ❤️ by{' '}
          <a href="https://github.com/FabKaiz" target="_blank" rel="noreferrer">
            FabKaiz
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
