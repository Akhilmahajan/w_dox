import token from '../../../assets/images/tokenwdox.svg'
import Footer from '../../../components/Footer/Footer'
import WhitePaperNav from '../../../components/WhitePaperNav/WhitePaperNav'
import Button from '../../../components/Button/Button'
import Navs from '../../../components/Navs/Navs'
// import WhitePaperNavMenu from '../../../components/WhitePaperNavMenu/WhitePaperNavMenu'
import MyImage from '../../../components/MyImage/MyImage'
import DoughnutChart from '../../../components/DoughnutChartVisx/DoughnutChart'
import FlickerGuard from '../../../components/FlickerGuard/FlickerGuard'

import styles from './Token.module.css'

export default function Token() {
  return (
    <FlickerGuard>
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
            <h2>$WDOX</h2>
            <p>
              The WDOX token is the governance token for the DAO. We’ve based
              voting weight not only on the amount of tokens held, but on the
              amount of time those tokens are locked up. The time lock periods
              vary; 1-week, 2-weeks, 1-month, 3-months, 6-months, 1-year, and
              2-years. The more tokens to you have and the longer those tokens
              are locked up, the larger your share of the vote - measured in
              vWDOX, and the more $sWDOX tokens your recieve to stake. Like
              other gauge weighted tokens, the voting weight will decrease
              linearly over time. The token is not meant to be speculative, but
              we imagine it will be at some point. We’re going to implement a
              “vesting period” for all Pre-Sale tokens to help avoid wild price
              action early on. We will also have a maximum buy, and a maximum
              amount per wallet, limit. See details below.
            </p>
            <h2>Token Distribution</h2>
            <p>
              <b>The total amount of tokens</b> to be minted is{' '}
              <b>3,000,000,000</b>; it’s a fixed amount, with no risk of
              inflation over time.
            </p>
            <div className={styles.doughnut}>
              <DoughnutChart />
            </div>
            <h2>Vesting {'&'} Limits</h2>
            <p>
              <b>Vesting:</b>
              <br />
              <b>Pre-Sale Liquidity Providers</b> = 30-day vesting period <br />
              <b>Core Team</b> = 30-day vesting period <br />
              <b>Limits: Maximum Buy</b> = 0.5% of total supply, or 15,000,000
              tokens <br /> <b>Maximum Amount per Wallet</b> = 1.25% of total
              supply, or 37,500,000 tokens <br /> <b>Minimum Locked for DAO</b>{' '}
              = 3,000 WDOX
            </p>
            <h2>Token Release Schedule</h2>
            <div className={styles.schedule}>
              <p>
                <b>The initial token release will be</b> 1,650,000,000{' '}
                <b>
                  for the Presale event. The Public release will be the
                  reamaining
                </b>{' '}
                1,350,000,000. <br />
                <br />
                <b>Presale Token Release Amount:</b>
                <br />
                <b>Pre-Sale LPs</b> = 750,000,000
                <br />
                <b>Core Team</b> = 750,000,000
                <br />
                <b>Reserve Holdings / Treasury</b> = 150,000,000
              </p>
              <div className={styles.img}>
                <MyImage alt="" src={token} placeholder="empty" />
              </div>
            </div>
            <div className={styles.staking}>
              <h2>Staking</h2>
              <p>
                The $WDOX token can be locked to enable DAO voting. Locked WDOX
                tokens will give you both a DAO vote, and return to you sWDOX
                tokens according to the amount of time those tokens are locked.
                <p>
                  Tokens locked the maximum amount of time (2-years) will get
                  1-1 exchange; tokens locked for (1-year) will get .5-1; tokens
                  locked (6-months) will get .25-1; etc. The minimum amount of
                  tokens to stake is the same as the minimum amount to lock for
                  a DAO vote - 10,000 WDOX tokens.
                </p>
                <p>
                  The $sWDOX tokens can be staked to earn WETH trading fees.
                  Technical Documentation for $WDOX available on the “Technical
                  Sheet.” GitHub Repos: https://github.com/WDOX-DAO
                </p>
              </p>
            </div>
            <div className={styles.security}>
              <ul>
                <li>
                  <b>Treasury Address:</b>{' '}
                  0x30F313f8172A409cC72A6126a476b74a375732fa
                </li>
                <li>
                  <b>Token Deployment Address:</b>
                  0x7BBC4b2435B948c5de8eFE084518dFBf39478eB1
                </li>
                <li>
                  <b>Donation Address:</b>{' '}
                  0x4Ab1256A5E5c14b11d028b044A12C85378849F72
                </li>
              </ul>
            </div>
            <div className={styles.team}>
              <ul>
                <li>
                  <b>Genesis</b>: 0xb1656010A4F9DCC549bDc9C16CB3c44F68dcE948
                </li>
                <li>
                  <b>Stack</b>: 0x8D52f69CbB24eb43Bf74919ecb1d214190199262
                </li>
                <li>
                  <b>Adeshina</b>: 0xEBC8C09D8040911a7fe11bC99f1fEcAB009bDF9a
                </li>
                <li>
                  <b>Gigglz</b>: 0x90a6536cFa351c5aE257a20Ec4d55e556b912e7F
                </li>
                <li>
                  <b>Valentine</b>: 0xDB6667F124aB859258bFD649b531A44BA2E69722{' '}
                </li>
                <li>
                  <b>Gojo</b>: 0x952e2f0bf9da6efaa803e33768d34031254aef1c
                </li>
                <li>
                  <b>Taiwo</b>: 0xd65cfDab704E0Ae426B5F4117f66F2cf2cA488CC
                </li>
              </ul>
            </div>
            <div className={styles.buttons}>
              <div>
                <Button
                  type="link"
                  href="status"
                  style={{ width: '100%' }}
                  variant="whitePaperNav"
                >
                  Previous
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </FlickerGuard>
  )
}
