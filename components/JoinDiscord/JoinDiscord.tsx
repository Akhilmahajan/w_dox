import Button from '../Button/Button'
import styles from './JoinDiscord.module.css'
import img from '../../assets/images/join-discord.png'
import MyImage from '../MyImage/MyImage'

export default function JoinDiscord() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Lorem ipsum dolor</h1>
      <div className={styles.secondary}>
        <div className={styles.act}>
          <h3>Lorem, ipsum dolor sit amet consectetur.</h3>
          <Button
            onClick={() => {
              console.log('')
            }}
          >
            Join
          </Button>
        </div>
        <div className={styles.img}>
          <MyImage placeholder="blur" alt="Mountains" src={img} />
        </div>
      </div>
    </div>
  )
}
