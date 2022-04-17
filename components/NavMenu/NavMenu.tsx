import React, { useState } from 'react'
import styles from './NavMenu.module.css'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import { ArrowForward } from '@mui/icons-material'
import logo from '../../assets/images/footer_logo.svg'
import MyImage from '../MyImage/MyImage'
// import Link from 'next/link'

export default function NavMenu() {
  // const menuRef: React.MutableRefObject<HTMLInputElement | undefined> = useRef()
  // const buttonRef: React.MutableRefObject<HTMLInputElement | undefined> = useRef()
  // const [menuBtnVisible, setMenuBtnVisible] = useState<boolean>(true)
  const [menuItemsVisible, setMenuItemsVisible] = useState<boolean>(false)

  const openMenu = () => {
    // setMenuItemsVisible((prevState) => !prevState)
    setMenuItemsVisible(true)
  }

  const closeMenu = () => {
    setMenuItemsVisible(false)
    //setMenuBtnVisible(true)
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <MyImage src={logo} placeholder="empty" alt="logo" />
        </div>
        <div className={`${styles.navButton}`}>
          {!menuItemsVisible && (
            <button
              onClick={openMenu}
              // onBlur={closeMenu}
              className={styles.menuToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
          {menuItemsVisible && (
            <button
              onClick={closeMenu}
              // onBlur={openMenu}
              className={styles.menuBack}
            >
              <ArrowForward />
            </button>
          )}
        </div>
      </div>
      {menuItemsVisible && (
        <div className={styles.menuItems}>
          <NavMenuItem href="/" tooltipTitle="Home page">
            Home
          </NavMenuItem>
          <NavMenuItem href="/doodles" tooltipTitle="Profile">
            Profile
          </NavMenuItem>
          <NavMenuItem
            href="/whitepaper/executivesummary"
            tooltipTitle="Executive Summary"
          >
            White Paper
          </NavMenuItem>
          <NavMenuItem href="/presale" tooltipTitle="Presale">
            Presale
          </NavMenuItem>
        </div>
      )}
    </>
  )
}
