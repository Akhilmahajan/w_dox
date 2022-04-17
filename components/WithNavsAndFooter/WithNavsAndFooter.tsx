import styles from './WithNavsAndFooter.module.css'
import Footer from '../Footer/Footer'
import Navs from '../Navs/Navs'

import React, { ReactChild } from 'react'
import FlickerGuard from '../FlickerGuard/FlickerGuard'

interface IProps {
  children: ReactChild | ReactChild[] | string
}

export default function WithNavsAndFooter({ children }: IProps) {
  return (
    <FlickerGuard>
      <Navs />
      <div className={styles.main}>
        {children}
        <Footer />
      </div>
    </FlickerGuard>
  )
}
