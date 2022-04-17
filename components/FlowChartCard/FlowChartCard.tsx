import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FlowChartCard.module.css'
import { useState } from 'react'

interface IProps {
  details: string
  title: string
}

export default function FlowChartCard({ title, details }: IProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.indicator}></div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyHead}>
          <VerifiedUserIcon />
          {title}
          {showDetails ? <button onClick={() => { setShowDetails(false) }} className={styles.button}><FontAwesomeIcon style={{ width: '15px' }} icon={faMinus} /></button> : <button onClick={() => { setShowDetails(true) }} className={styles.button}><FontAwesomeIcon style={{ width: '15px' }} icon={faPlus} /></button>}
        </div>
        {details && showDetails && <div className={styles.bodyDetails}>
          {details}
        </div>}
      </div>
    </div>
  )
}