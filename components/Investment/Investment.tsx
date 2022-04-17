import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import styles from './Investment.module.css'
import MyImage from '../MyImage/MyImage'
import src from '../../assets/images/investment.svg'

import React from 'react'
import Button from '../Button/Button'

export default function VerificationProcess() {
  return (
    <div className={styles.main}>
      <div className={styles.sideNote}>INVESTMENTS</div>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            If you knew that you wouldn’t be rugged, or trapped in a honey pot,
            or worried about your wallet getting emptied on connection...
            Wouldn’t you invest in more projects?
          </p>
          <Button type="link" style={{ width: 'fit-content', padding: '10px' }}>
            Learn More
          </Button>
        </div>
        <div className={styles.img}>
          <MyImage alt="image" placeholder="empty" src={src} />
        </div>
      </div>
    </div>
  )
}
