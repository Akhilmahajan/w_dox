import { useState } from 'react'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Navs from '../../components/Navs/Navs'
import styles from './Doodles.module.css'
import VerifiedIcon from '../../assets/images/verfied.png'
import MyImage from '../../components/MyImage/MyImage'
import discordIcon from '../../assets/images/discord.png'
import twitterIcon from '../../assets/images/twitter.png'
import telegramIcon from '../../assets/images/telegram.png'
import githubIcon from '../../assets/images/github.png'
import mediumIcon from '../../assets/images/medium.png'
import doodlesLogoIcon from '../../assets/images/doodles_logo.png'
import solanaLogo from '../../assets/images/solana-sol-logo.png'
import doodleGrid from '../../assets/images/doodle_grid.png'
import selectedCopyIcon from '../../assets/images/selected-copy-icon.png'
import unselectedCopyIcon from '../../assets/images/unselected-copy-icon.png'

export default function Doodles() {
  const [selectedIndex, setSelectedIndex] = useState()

  function SocialImage(props: any) {
    return (
      <div>
        <MyImage
          src={props.socialIcon}
          className={styles.socialIcon}
          alt="verification icon"
          height="36"
          width="36"
        />
      </div>
    )
  }

  function CardValues(props: any) {
    return (
      <div className={styles.cardValues}>
        <div>
          <p className={styles.cardTitle}>{props.title}</p>
        </div>
        <div>
          <p className={styles.cardValueText}>{props.value}</p>
        </div>
      </div>
    )
  }

  const contractAddresses = [
    {
      title: 'NFT Contract Address:',
      address: 'x8a90cab2b38dba80c64b7734e58ee1db38b8992e ',
    },
    {
      title: 'Owner Wallet Address: ',
      address: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e ',
    },
    {
      title: 'Treasury Wallet Address:  ',
      address: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e ',
    },
    {
      title: 'Treasury Wallet Address:',
      address: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e ',
    },
  ]

  function ContractAddresses(props: any) {
    return (
      <div className={styles.contractDetailWrapper}>
        <h4>{props.title}</h4>
        <div className={styles.addressWrapper}>
          <p className={styles.addressText}>{props.address}</p>
          <div
            onClick={() => {
              navigator.clipboard.writeText(props.address)
              setSelectedIndex(props.index)
            }}
            className={styles.copyIconWrapper}
          >
            <MyImage
              src={
                selectedIndex == props.index
                  ? selectedCopyIcon
                  : unselectedCopyIcon
              }
              alt="verification icon"
              height="18"
              width="15"
              className={styles.copyIcon}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className={styles.doodles}>
        <Navs />
        <div className={styles.main}>
          <div className={styles.topSectionWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>
                <div>
                  <h1>Doodles NFT</h1>
                </div>
                <div className={styles.verificationIcon}>
                  <MyImage
                    src={VerifiedIcon}
                    alt="verification icon"
                    height="36"
                    width="36"
                  />
                </div>
              </div>
              <div className={styles.titleDesc}>
                <p>Created by the Doodles Founders </p>
              </div>
            </div>

            <div className={styles.doodleLogoWrapper}>
              <MyImage
                src={doodlesLogoIcon}
                alt="verification icon"
                height="36"
                width="36"
                className={styles.doodlesLogo}
              />
            </div>
          </div>

          <div className={styles.logoHandleWraper}>
            <div className={styles.socialMediaLogo}>
              <SocialImage socialIcon={mediumIcon} />
              <SocialImage socialIcon={telegramIcon} />
              <SocialImage socialIcon={discordIcon} />
              <SocialImage socialIcon={githubIcon} />
              <SocialImage socialIcon={twitterIcon} />
            </div>
          </div>

          <div className={styles.middleSectionCard}>
            <div className={styles.cardValues}>
              <div>
                <p className={styles.cardTitle}>Blockchain</p>
              </div>
              <div className={styles.cardValue}>
                <MyImage
                  src={solanaLogo}
                  className={styles.blockchainIcon}
                  alt="verification icon"
                  height="26"
                  width="26"
                />
                <p className={styles.blockchainText}>Solana</p>
              </div>
            </div>

            <CardValues title="Collection #" value="10 000" />
            <CardValues title="Owners" value="9999" />
            <CardValues title="Floor Price - OpenSea" value="50 ETH" />
            <CardValues title="Floor Price - LooksRare" value="51 ETH" />
            <CardValues title="WDOX Health score" value="5" />
          </div>

          <div className={styles.nftCardsWrapper}>
            <MyImage
              src={doodleGrid}
              alt="verification icon"
              height="434"
              width="699"
              className={styles.nftIcon}
            />
            <MyImage
              src={doodleGrid}
              alt="verification icon"
              height="434"
              width="699"
              className={styles.nftIcon}
            />
          </div>

          <div className={styles.doodleFooter}>
            <div className={styles.doodleFooterTextWrapper}>
              <div>
                <h3>About</h3>
              </div>
              <div className={styles.doodleDescriptionWrapper}>
                <p className={styles.doodleDescription}>
                  Space Doodles is your first venture into the galaxy to
                  discover joy and rainbow puke. It’s the first, small step in
                  unveiling our universe to collectors with dozens of
                  spacecrafts designed by Burnt Toast.{' '}
                  <p>
                    What is your Doodle in search of? Where is it going? How
                    many other Doodlers are near you? Your Doodle is the key to
                    answering these questions in our first step of revealing the
                    universe. All Doodlers can claim their Space Doodle for free
                    and receive its own unique appearance and competencies
                    within their personal spacecraft.
                  </p>
                </p>
              </div>
            </div>
            <div className={styles.contractsWrapper}>
              <div>
                <h3>Contracts</h3>
              </div>
              <div>
                {contractAddresses.map((contract, index) => {
                  return (
                    <ContractAddresses key={index}
                      title={contract.title}
                      address={contract.address}
                      index={index}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <div className={styles.backButtonWrapper}>
            <div className={styles.backButton}>
            <Button
              style={{ borderRadius: '2px', marginLeft: '15%' }} 
              onClick={() => {
                console.log('')
              }}
              variant="primary"
              
            >
              Enter app
            </Button>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
