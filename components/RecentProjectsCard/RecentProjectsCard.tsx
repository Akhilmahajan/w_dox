/* eslint-disable @next/next/no-img-element */
import Image, {
  //Image,
  StaticImageData,
} from 'next/image'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import styles from './RecentProjectsCard.module.css'
import Button from '../Button/Button'
import MyImage from '../MyImage/MyImage'
import { Favorite } from '@mui/icons-material'

interface IProps {
  src: StaticImageData
}

export default function RecentProjectsCard({ src }: IProps) {
  return (
    <div className={styles.main}>
      {/* <img className={styles.img} src={src.src} alt="" /> */}
      <div className={styles.img}>
        <MyImage alt="image" src={src} />
        {/* <Image src={src} alt="" objectPosition="responsive" objectFit="cover" /> */}
      </div>

      {/* <div className={styles.smImg}>
        <Image src={src} alt="" objectPosition="center" objectFit="cover" />
      </div> */}
      <div className={styles.container}>
        <div className={styles.title}>NFT Project</div>
        <div className={styles.details}>
          <span className={styles.shieldContainer}>
            <VerifiedUserIcon />
          </span>
          Project Verified
          <span className={styles.health}>
            <span className={styles.heartIcon}>
              <Favorite />
            </span>{' '}
            9/10
          </span>
        </div>
        <div className={styles.button}>
          <Button
            style={{ width: '100%', borderRadius: '2px', margin: '0' }}
            variant="primary"
            onClick={() => {
              console.log('')
            }}
          >
            Check Project
          </Button>
        </div>
      </div>
    </div>
  )
}
