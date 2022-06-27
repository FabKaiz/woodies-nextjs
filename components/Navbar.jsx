import styles from '../styles/Navbar.module.scss'
import logo from '../public/assets/headerLogo.png'
import Image from 'next/image'
import ButtonTransparent from './ButtonTransparent'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'

const Menu = () => (
  <>
    <li>
      <a href="#" className={styles.active}>
        Home
      </a>
    </li>
    <li>
      <a href="#about">About Us</a>
    </li>
    <li>
      <a href="#hiw">How it works</a>
    </li>
    <li>
      <a href="#Categories">Categories</a>
    </li>
    <li>
      <a href="#Testimony">Testimony</a>
    </li>
    <li>
      <ButtonTransparent text="SIGN UP" />
    </li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className={styles.navContainer}>
      <Image
        src={logo}
        alt="logo"
        className={styles.img}
        width={193}
        height={33}
        objectFit="contain"
      />
      {toggleMenu ? (
        <RiCloseLine
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <RiMenu3Line
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(true)}
        />
      )}
      <ul className={styles.links}>
        <Menu />
      </ul>

      <div className={styles.navbar__menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#3E3F43"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#3E3F43"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className={`${styles.navbarMenuContainer} scale-up-center`}>
            <div className={styles.navbarMenuContainerLinks}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
