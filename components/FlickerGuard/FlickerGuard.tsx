import { ReactChild } from 'react'
import styles from './FlickerGuard.module.css'

interface IProps {
  children?: ReactChild | ReactChild[] | string
}

export default function FlickerGuard({ children }: IProps) {
  return <div className={styles.flickerGuard}>{children}</div>
}
