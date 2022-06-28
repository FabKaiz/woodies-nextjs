import Image from 'next/image'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <h3>
          Are you looking for <span>woodden furniture</span> for your place?
        </h3>
        <h1>This is the Right Place</h1>
        <a href="#categories" className={styles.headerBtn}>
          Explore Furniture
        </a>
      </div>

      <div className={styles.headerRight}>
        <Image
          src="/assets/headerTable.png"
          alt="table"
          width={568}
          height={577}
        />
      </div>
    </header>
  )
}

export default Header
