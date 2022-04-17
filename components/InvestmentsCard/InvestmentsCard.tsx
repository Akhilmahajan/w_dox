import { Button } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from './InvestmentsCard.module.css'

interface IProps {
  img: string | StaticImageData
  title: string
  text: string
  button: { text: string; url: string }
}

export default function InvestmentsCard({ img, title, text, button }: IProps) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" placeholder="empty" />
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.button}>
          <Button variant="contained" href="">
            {button.text}
          </Button>
        </div>
      </div>
    </div>
  )
}
