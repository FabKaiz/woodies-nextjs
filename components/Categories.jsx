import styles from '../styles/Categories.module.scss'
import CategoryCard from './CategoryCard'
import SectionHeader from './SectionHeader'

import desk from '../public/assets/categories1.png'
import chair from '../public/assets/categories2.png'
import kitchenware from '../public/assets/categories3.png'
import bookShelf from '../public/assets/categories4.png'
import electronics from '../public/assets/categories5.png'

const Categories = () => {
  return (
    <section>
      <SectionHeader title="What we have" grayText="Categories" />
      <div className={styles.categoriesContainer}>
        <div className={styles.productContainer}>
          <CategoryCard
            productName="Desk"
            img={desk}
            color="#F9BDBD"
            justifyContent="start"
          />
          <CategoryCard productName="Chair" img={chair} color="#F7DEA6" />
          <CategoryCard
            productName="Kitchenware"
            img={kitchenware}
            color="#A8DCEC"
          />
          <CategoryCard
            productName="Book Shelf"
            img={bookShelf}
            color="#F9BDBD"
          />
          <CategoryCard
            productName="Electronics"
            img={electronics}
            color="#F7DEA6"
          />
        </div>
      </div>
    </section>
  )
}

export default Categories
