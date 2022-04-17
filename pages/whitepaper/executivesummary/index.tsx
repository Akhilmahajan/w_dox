import styles from './ExecutiveSummary.module.css'
import MyImage from '../../../components/MyImage/MyImage'
import _textImage from '../../../assets/images/verify.svg'
import ExecSumIntro from '../../../components/ExecSumIntro/ExecSumIntro'
import Button from '../../../components/Button/Button'
import WithNavsAndFooter from '../../../components/WithNavsAndFooter/WithNavsAndFooter'

export default function ExecutiveSummary() {
  return (
    <WithNavsAndFooter>
      <ExecSumIntro />
      <div className={styles.text}>
        <div className={styles.textHeading}>
          <div className={styles.textImg}>
            <MyImage placeholder="empty" src={_textImage} alt="image" />
          </div>
          <div className={styles.textTitle}>
            WDOX is the first decentralized regulation ecosystem within Web3.
          </div>
        </div>
        <div className={styles.textBody}>
          <p>
            It’s made up of several parts, which in total, create a platform for
            developers to identify themselves, and have their projects -
            contracts, websites, functions, etc. - verified as safe in a
            universally recognizable way. Think of it as a security audit; or,
            imagine we are gate keepers. We protect the developers from having
            their lives’ put under a microscope, their identities’ floating
            around the Internet. All while ensuring the holders that said
            developers are decent people, building good projects, and willing to
            be held accountable.
          </p>
          <p>
            This document presents a case for a governance token ($WDOX) to
            control the DAO, as well as, a case for the creation of a
            utility-based, non-transferable, NFT to establish verification
            amongst developers, project creators, and investors. In total, the
            WDOX platform will use known technologies in a new and intuitive way
            to make verifying good projects incredibly easy, and identify bad,
            or “sketchy” projects, even easier. It’s created with both beginners
            and experienced traders in mind.
          </p>
          <p>
            Its verification process, concepts of security, and/ or token
            economics may be difficult to explain to a beginner in the space,
            but visually seeing the NFT verification of a new project will be
            simple and straight forward. The $WDOX token is meant to fuel the
            WDOX DAO platform, and provide weighted governance to the DAO. The
            DAO is the most important piece of the project; any and all
            decisions - whether to publicly or legally identify a project’s
            creators or owners, for example - will be brought to vote within the
            DAO. The NFT issuance, to projects that have been verified as safe,
            will be important in setting a new safety standard for token, NFT,
            or DAO investments in the future. WDOX DAO will also run a safety
            mint and/or buy-sell for each new project that has requested
            verification. This should eliminate the possibility of users getting
            stuck in a “honey pot” or being “rugged” outright. We will ensure
            that each project’s code is verified on Etherscan, and that the
            developers are able to be held accountable in the event they don’t
            honor their Roadmaps (blatantly), or outright scam their holders’.
            Existing projects will also be encouraged to apply for verification,
            as their projects will also be gone over thoroughly and assigned a
            “Health” status rating.
          </p>
          <p>
            Data gathered through verification and our index of all Web3
            projects will be controlled by our DAO. This data will be stored
            seperately from project verification data. The DAO will ultimately
            hold a vote to determine whether or not to allow access to the
            database for researchers, marketing companies, development teams, or
            analytics firms.
          </p>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <Button type="link" href="background" variant="whitePaperNav">
                Read Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </WithNavsAndFooter>
  )
}
