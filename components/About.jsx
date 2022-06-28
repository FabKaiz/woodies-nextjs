import SectionHeader from './SectionHeader'
import styles from '../styles/About.module.scss'
import img1 from '../public/assets/about1.png'
import img2 from '../public/assets/about2.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <SectionHeader title="Who we are" grayText="About us" />
      <div className={styles.aboutTop}>
        <div className={styles.left}>
          <Image src={img1} alt="wood product" />
        </div>
        <div className={styles.right}>
          <h2>
            <span>WOODIES</span> is the{' '}
            <span>home of modern wooden furniture</span>
          </h2>
          <p>
            The answer to your need for furniture with shapes, sizes and colors.
          </p>
        </div>
      </div>

      <div className={styles.aboutBottom}>
        <div className={styles.left}>
          <h2>
            Customized furniture <span>made just for you</span>
          </h2>
          <p>
            Get it easy to adjust furniture to the shape and size of your
            dwelling or business.
          </p>
        </div>
        <div className={styles.right}>
          <Image src={img2} alt="wood product" />
        </div>
      </div>
    </div>
  )
}

export default About
