import React from 'react'
import Button from '../Button/Button'
import styles from './HomeWhitePaper.module.css'

export default function HomeWhitePaper() {
  return (
    <div className={styles.main}>
      <div className={styles.sideNote}>WHITEPAPER</div>
      <div className={styles.whitepaper}>
        <h2>Check out out white paper</h2>
        <Button
          variant="primary"
          onClick={() => {
            console.log('')
          }}
        >
          Check Whitepaper
        </Button>
      </div>
    </div>
  )
}
