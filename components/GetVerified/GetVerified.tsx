import Button from '../Button/Button'
import styles from './GetVerified.module.css'

export default function GetVerified() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Want to Get Verified?</h1>
      <p>
        Unknown, and existing, projects prove their bonafides to WDOX DAO; we
        encrypt their data and store it off-chain. If a project “rugs” or fails
        to deliver, the DAO decides how to hold them accountable.
      </p>
      <Button
        onClick={() => {
          console.log('')
        }}
      >
        Get Verified
      </Button>
    </div>
  )
}
