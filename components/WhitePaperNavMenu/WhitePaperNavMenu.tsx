import React, { useState } from 'react'
import styles from './WhitePaperNavMenu.module.css'
import WhitePaperActiveLink from '../WhitePaperActiveLink/WhitePaperActiveLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { ArrowBack } from '@mui/icons-material'

export default function WhitePaperNavMenu() {
  // const menuRef: React.MutableRefObject<HTMLInputElement | undefined> = useRef()
  // const buttonRef: React.MutableRefObject<HTMLInputElement | undefined> = useRef()
  //const [menuBtnVisible, setMenuBtnVisible] = useState<boolean>(true)
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
            <ArrowBack />
          </button>
        )}
      </div>
      {menuItemsVisible && (
        <div className={styles.menuItems} onBlur={closeMenu}>
          <WhitePaperActiveLink
            href="executivesummary"
            icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
            text="Executive Summary"
          />
          <WhitePaperActiveLink
            href="background"
            icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
            text="Background"
          />
          <WhitePaperActiveLink
            href="environment"
            icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
            text="Environment"
          />
          <WhitePaperActiveLink
            href="status"
            icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
            text="Status"
          />
          <WhitePaperActiveLink
            href="status"
            icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
            text="Token"
          />
        </div>
      )}
    </>
  )
}
