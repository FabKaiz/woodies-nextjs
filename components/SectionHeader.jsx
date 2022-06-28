import styles from '../styles/SectionHeader.module.scss'
import logo from '../public/assets/logoSmall.png'
import Image from 'next/image'

const SectionHeader = ({ title, grayText }) => {
  return (
    <div className={styles.sectionHeaderContainer}>
      <div className={styles.img}>
        <Image
          src={logo}
          alt="woodies logo"
          width={30}
          height={30}
          layout="fixed"
        />
      </div>
      <h3>{title}</h3>
      <div className={styles.line} />
      <h2>{grayText}</h2>
    </div>
  )
}

export default SectionHeader
