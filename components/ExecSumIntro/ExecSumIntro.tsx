import MyImage from '../MyImage/MyImage'
import img from '../../assets/images/WDOX Structure illustration.svg'
import dex from '../../assets/images/dexicon.svg'
import nft from '../../assets/images/nfticon.svg'
import verification from '../../assets/images/verification_icon.svg'
import dao from '../../assets/images/daoicon.svg'
import token from '../../assets/images/token_icon.svg'
import lock from '../../assets/images/lock_icon.svg'
import styles from './ExecSumIntro.module.css'
import WhitePaperNav from '../WhitePaperNav/WhitePaperNav'

export default function ExecSumIntro() {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Executive Summary</div>
      <div className={styles.nav}>
        <WhitePaperNav parentRoute="/whitepaper" />
      </div>
      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.token}`}>
          <div className={styles.tokenIcon}>
            <MyImage
              src={token}
              placeholder="empty"
              alt="executive summary image"
            />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.title}>Token</div>
            <div className={styles.details}>
              WDOX Token is the governance token of the DAO. Weight is assigned
              based on both the amount of tokens, and the time tokens are locked
              for voting.
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.staking}`}>
          <div className={styles.icon}>
            <MyImage
              src={lock}
              placeholder="empty"
              alt="executive summary image"
            />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.title}>Staking</div>
            <div className={styles.details}>
              Staking of the vWDOX token will be available immediately. WDOX
              Tokens locked for voting will be reissued as vWDOX Tokens, which
              can be staked for WETH.
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.dao}`}>
          <div className={styles.icon}>
            <MyImage
              src={dao}
              placeholder="empty"
              alt="executive summary image"
            />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.title}>WDOX DAO</div>
            <div className={styles.details}>
              Decentralized regulation lives and dies with the DAO. The DAO is
              the nerve center of the project.
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <MyImage
            src={img}
            placeholder="empty"
            alt="executive summary image"
          />
        </div>
        <div className={`${styles.card} ${styles.verification}`}>
          <div className={styles.icon}>
            <MyImage
              src={verification}
              placeholder="empty"
              alt="executive summary image"
            />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.title}>Verification</div>
            <div className={styles.details}>
              WDOX Token is the governance token of the DAO. Weight is assigned
              based on both the amount of tokens, and the time tokens are locked
              for voting.
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.nft}`}>
          <div className={styles.icon}>
            <MyImage
              src={nft}
              placeholder="empty"
              alt="executive summary image"
            />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.title}>NFT</div>
            <div className={styles.details}>
              The NFT is non-transferable, and is a visual representation of a
              project’s safety, and commitment to it’s holders. NFTs are only
              available to Verified Projects. Think of them like a “Security
              Badge.”
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.dex}`}>
          <div className={styles.icon}>
            <MyImage
              src={dex}
              placeholder="empty"
              alt="executive summary image"
            />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.title}>DEX</div>
            <div className={styles.details}>
              The WDOX DEX was created to allow WDOX swaps at incredibly low
              fees. The fees charged to developers/projects to be verified will
              be put back into our own liquidity pools; allowing for lower
              slippage and lower fees. Accepted token support: USDT, USDC, ETH,
              DAI, UST, WBTC, and WDOX.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
