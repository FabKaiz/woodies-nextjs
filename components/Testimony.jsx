import styles from '../styles/Testimony.module.scss'
import SectionHeader from './SectionHeader'
import img1 from '../public/assets/testimony1.png'
import img2 from '../public/assets/testimony2.png'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import author1 from '../public/assets/author1.png'

const StarGroup = (
  <>
    <AiFillStar className={styles.star} />
    <AiFillStar className={styles.star} />
    <AiFillStar className={styles.star} />
    <AiFillStar className={styles.star} />
    <AiFillStar className={styles.star} />
  </>
)

const Testimony = () => {
  return (
    <section id="testimony">
      <SectionHeader title="What they say" grayText="TESTIMONY" />

      <div className={styles.testimonyContainer}>
        <div className={styles.testimonyLeft}>
          <div className={styles.imgContainer}>
            <Image src={img1} alt="interior" />
          </div>
          <div className={styles.imgContainer}>
            <Image src={img2} alt="interior" />
          </div>
        </div>

        <div className={styles.testimonyRight}>
          <div className={styles.testimonyCard}>
            {StarGroup}
            <p className={styles.authorText}>
              My experience with WOODIES is a complete success, from customed
              furniture, range of product, modern design, purchasing experience,
              the delivery and newsletter. Litterally everything is great. Thank
              you!
            </p>
            <div className={styles.authorContainer}>
              <Image
                src={author1}
                alt="author pic"
                layout="fixed"
                width={40}
                height={40}
              />
              <div className={styles.authorInfo}>
                <p>Sandra Dewi</p>
                <p>Jakarta Selatan</p>
              </div>
            </div>
          </div>
          {/* div with arrow prev and next */}
          <div className={styles.arrowContainer}>
            <span className={styles.arrowPrev}>Previous</span>
            <span className={styles.arrowNext}>Next</span>
          </div>
          {/* fake slider */}
          <div className={styles.sliderContainer}>
            <div>
              <div className={styles.sliderActive}></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimony
