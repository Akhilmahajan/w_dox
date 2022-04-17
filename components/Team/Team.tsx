import styles from './Team.module.css'
import MyImage from '../MyImage/MyImage'
import avatar from '../../assets/images/avatar.jpg'

export default function Team() {
  return (
    <div className={styles.main}>
      <div className={styles.sideNote}>TEAM</div>
      <div className={styles.container}>
        <span className={styles.heading}>Meet the Team</span>
        <span className={styles.text}>
          The Core Team’s identity data will get entered into the same system
          that verified project’s data gets entered into. We have no control of
          the decryption keys once the verification NFT is issued. We’ve created
          this project to protect the community: developers, investors, and
          collectors. We deserve the same privacy we’re offering to the
          community.{' '}
        </span>
        <div className={styles.cards}>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>position</span>
            <span className={styles.position}>Name</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>position</span>
            <span className={styles.position}>Name</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>position</span>
            <span className={styles.position}>Name</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>position</span>
            <span className={styles.position}>Name</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>position</span>
            <span className={styles.position}>Name</span>
          </div>
        </div>
      </div>
    </div>
  )
}
