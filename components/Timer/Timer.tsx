import { useEffect, useState } from 'react'
import { setTimeout } from 'timers'
import styles from './Timer.module.css'

export default function Timer() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const expected = 1649127291061 + 60 * 60 * 24 * 365

  useEffect(() => {
    setTimeout(() => {
      const _time = expected - Date.now()
      const target = new Date(_time)
      setTime({
        hours: target.getHours(),
        minutes: target.getMinutes(),
        seconds: target.getSeconds(),
      })
    }, 1000)
  }, [time, expected])

  const { hours, minutes, seconds } = time

  return (
    <div className={styles.wrapper}>
      <span>{hours}</span>
      <span className={styles.separator}>:</span>
      <span>{minutes}</span>
      <span className={styles.separator}>:</span>
      <span>{seconds}</span>
    </div>
  )
}
