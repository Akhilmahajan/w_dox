import dynamic from 'next/dynamic'
import styles from './Status.module.css'
import status from '../../../assets/images/status.png'
import MyImage from '../../../components/MyImage/MyImage'
import React from 'react'
// import WhitePaperNavMenu from '../../../components/WhitePaperNavMenu/WhitePaperNavMenu'
import Navs from '../../../components/Navs/Navs'
import WhitePaperNav from '../../../components/WhitePaperNav/WhitePaperNav'
import Button from '../../../components/Button/Button'
import Footer from '../../../components/Footer/Footer'

const DynamicRoadmapNoSSR = dynamic(
  () => import('../../../components/RoadMap/RoadMap'),
  { ssr: false }
)

export default function Status() {
  return (
    <div className={styles.flickerGuard}>
      <div className={styles.main}>
        <Navs />
        {/* <div className={styles.whitePaperNavMenu}>
        <WhitePaperNavMenu />
      </div> */}
        <div className={styles.container}>
          <div className={styles.nav}>
            <WhitePaperNav parentRoute="/whitepaper" />
          </div>
          <div className={styles.body}>
            <div className={styles.statusHeading}>
              <div className={styles.statusHeadingText}>Current status</div>
              <div className={styles.statusHeadImg}>
                <MyImage placeholder="empty" alt="" src={status} />
              </div>
            </div>
            <div className={styles.statusText}>
              The project has yet to have a token generation event. We’re
              building our ecosystem out, and are doing rigorous testing to
              ensure a smooth operating environment for the community. Our token
              Presale is scheduled for 4/15/2022, and by whitelist only. Having
              said that, we’re exploring opening the whitelisting opportunities
              up to the public. This is, after all, a community project. The
              project will be taken public ten-days after the Presale begins, or
              24-hours after the Presale token supply has been purchased.
            </div>
            <div className={styles.roadMapHeading}>Roadmap 2022</div>
            <div className={styles.roadMap}>
              <DynamicRoadmapNoSSR />
            </div>
            <div className={styles.buttons}>
              <Button type="link" href="environment" variant="whitePaperNav">
                Previous
              </Button>
              <Button type="link" href="token" variant="whitePaperNav">
                Next
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
