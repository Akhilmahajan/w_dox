import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import styles from './WhitePaperNav.module.css'
import WhitePaperActiveLink from '../WhitePaperActiveLink/WhitePaperActiveLink'

interface IProps {
  parentRoute: string
}

export default function WhitePaperNav({ parentRoute }: IProps) {
  return (
    <div className={styles.main}>
      <WhitePaperActiveLink
        href={`${parentRoute}/executivesummary`}
        icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
        text="Introducing WDOX DAO"
      />
      <WhitePaperActiveLink
        href={`${parentRoute}/background`}
        icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
        text="Background"
      />
      <WhitePaperActiveLink
        href={`${parentRoute}/environment`}
        text="Environment"
        icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
      />
      <WhitePaperActiveLink
        href={`${parentRoute}/status`}
        icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
        text="Status"
      />
      <WhitePaperActiveLink
        href={`${parentRoute}/token`}
        icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
        text="Token"
      />
    </div>
  )
}
