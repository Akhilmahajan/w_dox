import FlowChartCard from '../FlowChartCard/FlowChartCard'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FlowChart.module.css'

export default function FlowChart() {
  return (
    <div className={styles.placeholder}>
      <div className={styles.largeText}>Project Application Flow Chart</div>
      <div className={styles.flowChart}>
        <div className={`${styles.card} ${styles.locking}`}>
          <FlowChartCard
            title="Locking WDOX"
            details="We’re working to make Web3 a safer place, and we’re asking the community to play a major role. We want everyone to be involved in making the space more honest, more enjoyable, and yes, more profitable for all. Fraud ends here."
          />
        </div>
        <div className={`${styles.card} ${styles.verify}`}>
          <FlowChartCard title="Only Verify Dex" details="" />
        </div>
        <div className={`${styles.card} ${styles.staking}`}>
          <FlowChartCard title="Staking for ETH" details="" />
        </div>
        <div className={`${styles.card} ${styles.voting}`}>
          <FlowChartCard title="Voting Rights Over Project Data" details="" />
        </div>
        <div className={`${styles.card} ${styles.security}`}>
          <FlowChartCard title="Security NFT" details="" />
        </div>
        <div className={styles.connectors}>
          <div className={styles.majorConnector}></div>
          <div className={styles.bottomLeftConnector}></div>
          <div className={styles.bottomRightConnector}></div>
          <div className={styles.terminator}></div>
          <div className={styles.middleConnector}></div>
          <div className={styles.data}>
            <span>Data</span>
          </div>
          <div className={styles.swap}>
            <span>Low Fees WDOX Swaps</span>
          </div>
          <FontAwesomeIcon className={styles.toStaking} icon={faCaretDown} />
          <FontAwesomeIcon className={styles.toVerify} icon={faCaretDown} />
          <FontAwesomeIcon className={styles.toVoting} icon={faCaretDown} />
          <FontAwesomeIcon className={styles.toSecurity} icon={faCaretDown} />
          <FontAwesomeIcon className={styles.toLocking} icon={faCaretUp} />
          <FontAwesomeIcon className={styles.toTerminator} icon={faCaretDown} />
        </div>
      </div>
    </div>
  )
}
