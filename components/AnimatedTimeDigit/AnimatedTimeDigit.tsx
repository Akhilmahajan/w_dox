/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import styles from './AnimatedTimeDigit.module.css'

interface IProps {
  number: number
}

export default function AnimatedTimeDigit({ number }: IProps) {
  const [motion, setMotion] = useState(styles.animate)
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const expected = 3600 * 365

  useEffect(() => {
    setInterval(() => {
      const d = new Date()
      const _time = d.getTime() - expected
      const target = new Date(_time)
      setTime({
        hours: target.getHours(),
        minutes: target.getMinutes(),
        seconds: target.getSeconds(),
      })
    }, 1000)
  }, [expected])

  return (
    <div className={styles.main}>
      <div className={`${styles.wrapper} ${motion}`}>
        <span className={`${styles.digit}`}>{number}</span>
        <span className={`${styles.digit}`}>{number}</span>
        <span className={`${styles.digit}`}>{number}</span>
      </div>
    </div>
  )
}
