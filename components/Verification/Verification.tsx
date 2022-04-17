import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import styles from './Verification.module.css'
import GetVerified from '../GetVerified/GetVerified'

export default function VerificationProcess() {
  return (
    <div className={styles.main}>
      <div className={styles.sideNote}>VERIFICATION</div>
      <div className={styles.container}>
        <div className={styles.process}>
          <p>Verification Process</p>
          <div className={styles.int}>
            <div className={styles.icon}>
              <VerifiedUserIcon fontSize="large" />
            </div>
            <p>Apply for Verification</p>
          </div>
          <div className={styles.int}>
            <div className={styles.icon}>
              <VerifiedUserIcon fontSize="large" />
            </div>
            <p>Encrypt All Data</p>
          </div>
          <div className={styles.int}>
            <div className={styles.icon}>
              <VerifiedUserIcon fontSize="large" />
            </div>
            <p>Issue Verification NFT</p>
          </div>
        </div>
        <GetVerified />
      </div>
    </div>
  )
}
