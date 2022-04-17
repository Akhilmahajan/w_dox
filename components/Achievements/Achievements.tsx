import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import styles from './Achievements.module.css'
import MyImage from '../MyImage/MyImage'
import src from '../../assets/images/investment.svg'

import React from 'react'
import Button from '../Button/Button'

export default function VerificationProcess() {
  return (
    <div className={styles.main}>
      <div className={styles.sideNote}>ACHIEVEMENTS</div>
      <div className={styles.container}>
        <p className={styles.title}>
          The WDOX token is the governance token for the DAO. We’ve based voting
          weight not only on the amount of tokens held, but on the amount of
          time those tokens are locked up.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h1>DAO</h1>
            <span>Decentralized Autonomous Organization</span>
            <p>
              Decentralized regulation lives and dies with the DAO. The DAO is
              the nerve center of the project.
            </p>
          </div>
          <div className={styles.card}>
            <h1>DEX</h1>
            <span>Decentralized Exchange</span>
            <p>
              The WDEX was created to allow WDOX swaps at incredibly low fees.
              The fees charged to developers for verification will be put back
              into our own liquidity pools; reducing slippage and lowering fees.
            </p>
          </div>
          <div className={styles.card}>
            <h1>NFT</h1>
            <span>Non-Fungible Token</span>
            <p>
              The NFT is non-transferable, and is a visual representation of a
              project’s safety, and commitment to it’s holders. NFTs are only
              available to Verified Projects. Think of them like a “Security
              Badge.”
            </p>
          </div>
        </div>
        <div className={styles.button}>
          <Button
            type="link"
            style={{
              width: 'fit-content',
              height: 'fit-content',
              padding: '10px 30px',
            }}
            href=""
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
