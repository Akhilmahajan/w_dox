import { useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FrequentlyAskedCard.module.css'
import Link from 'next/link'

interface IProps {
  title: string
  details: string
  href?: string
  style?: { [key: string]: string }
  className?: string
}

export default function FrequentyAskedCard({ title, href, details }: IProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {title}
        {showDetails ? (
          <button
            onClick={() => {
              setShowDetails(false)
            }}
            className={styles.button}
          >
            <FontAwesomeIcon style={{ width: '15px' }} icon={faMinus} />
          </button>
        ) : (
          <button
            onClick={() => {
              setShowDetails(true)
            }}
            className={styles.button}
          >
            <FontAwesomeIcon style={{ width: '15px' }} icon={faPlus} />
          </button>
        )}
      </div>
      {showDetails && <div className={styles.details}>{details}</div>}
      {href && (
        <div className={styles.readFull}>
          <Link href={href}>Read more</Link>
        </div>
      )}
    </div>
  )
}

FrequentyAskedCard.defaultProps = {
  href: '',
  className: '',
  style: {},
}
