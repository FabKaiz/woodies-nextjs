import styles from '../styles/CategoryCard.module.scss'
import Image from 'next/image'
import ButtonTransparent from './ButtonTransparent'

const CategoryCard = ({ productName, img, color, justifyContent }) => {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundColor: `${color}` }}
    >
      <h3>{productName}</h3>
      <div
        className={styles.imgContainer}
        style={{ justifyContent: `${justifyContent}` }}
      >
        <Image src={img} alt="product" layout="fixed" />
      </div>
      <div className={styles.btnContainer}>
        <ButtonTransparent text="Shop Now" />
      </div>
    </div>
  )
}

export default CategoryCard
