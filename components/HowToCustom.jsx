import styles from '../styles/HowToCustom.module.scss'
import SectionHeader from './SectionHeader'
import img1 from '../public/assets/htc1.png'
import img2 from '../public/assets/htc2.png'
import img3 from '../public/assets/htc3.png'
import img4 from '../public/assets/htc4.png'
import Image from 'next/image'

const HowToCustom = () => {
  return (
    <section id="hiw">
      <SectionHeader title="How to custom" grayText="How it works" />

      <div className={styles.imgContainer}>
        <Image src={img1} alt="logo" />
        <Image src={img2} alt="logo" />
        <Image src={img3} alt="logo" />
        <Image src={img4} alt="logo" />
      </div>

      <a className={styles.htcBtn} href="#">
        <p>Get Personalized Now</p>
      </a>
    </section>
  )
}

export default HowToCustom
