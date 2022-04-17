import styles from './Environment.module.css'
import MyImage from '../../../components/MyImage/MyImage'
import masterDetailStyles from '../../../components/MasterDetail/MasterDetail.module.css'
import React from 'react'
import MasterDetail from '../../../components/MasterDetail/MasterDetail'
import { IData } from '../../../components/MasterDetail/MasterDetail'
import { Settings } from '@mui/icons-material'
// import WhitePaperNavMenu from '../../../components/WhitePaperNavMenu/WhitePaperNavMenu'
import Navs from '../../../components/Navs/Navs'
import img from '../../../assets/images/environment.png'
import Footer from '../../../components/Footer/Footer'
import WhitePaperNav from '../../../components/WhitePaperNav/WhitePaperNav'
import Button from '../../../components/Button/Button'

const data: Array<IData> = [
  {
    master: 'Development',
    detail:
      'Developers will want their project to shine on its merits, but around here, things usually fail to gain traction, or come under severe scrutiny, without the developer themselves being known. Developers will avoid creating the project they have in mind for fear of public rejection; for fear of losing their actual jobs, if they’re discovered; for fear of having their everyday lives - actually, and online - transformed forever. We’ve created a very simple, but non-fungible, way for developers and teams to share their identity, and without sharing it with the general public. We will allow developers to connect with our project over an encrypted communication layer, fill out our application form, upload their documents to our verification team - automated in the near future to eliminate human bias, but human as of now - and answer any questions our team may have to be certain they are who they say they are. The developers and project creators’ documents will be encrypted, stored off-chain, and forgotten about. This will earn the project a “badge” - internal - showing that the developers are known to our project, and their identities are real, and stored with us. This is the first part of the project from a developer’s viewpoint. We will then ask the project to submit their contract and front-end interface to our project for a security review. We will audit the project’s code, and we will issue another “badge” stating that the projects’ code is secure and safe. We will store the projects’ wallet/s, the developers’ identities, and a copy of the contract, as well. This is all encrypted, and stored on our servers. Lastly, our team will attempt to mint the project’s NFT, buy/sell their token, or have a look into their DAO’s financial plans. We will check the multi-sig wallets, and look for anything that’s out of the ordinary. Once all of the above are accounted for, and proven safe - the process could take anywhere from an hour to a few days, depending - the project moves on the the next stage. This is the final stage of verification for any project. The project will be able to mint an NFT unique to their project, and our verification. This NFT can, and should be, posted to the project’s website, socials, and shared with exchanges and marketplaces. This NFT will be similar to a QR-Code, in that you will be  able to scan the NFT to verify it’s authenticity with our project, and on the blockchain. The NFT must be minted using the verified project’s wallet, and will be a non-transferable. When the project is fully verified, the developers will generate an encryption key. This key will stay stored in a separate location, and is only accessible through a “Yes” DAO vote to one very specific proposal. When the project is fully verified, the developers will generate an encryption key. This key will stay stored in a separate location, and is only accessible through a “Yes” DAO vote, and only to one, very specific, proposal.',
    icon: <Settings />,
  },
  {
    master: 'Investor',
    detail:
      "Investors will use WDOX as their first method of due diligence. They will be able to safely invest in new and upcoming crypto and/or NFT projects without the fear they’re donating their money to a scammer, or some nefarious group. This will almost certainly give rise to a number of new financial projects that will continue to shape our space in the years to come. This will also help developers find funding for projects not really mainstream - to crypto, respectively. Investors will have a real and tangible way to know that the project’s builders’ are in fact known to our project, and if the DAO vote were passed, those identities could be turned over to the community and/or the authorities if the project scams its investors. It gives the investor peace of mind, while keeping everyone anonymous until they wish to share their identity. The second piece of the puzzle for the investor is voting control within the DAO. Investo’s will be able to vote on WDOX DAO proposals. This essentially gives them the ability to help build a Web3 future through funding, and be involved in regulating it. It keeps them up to date with verified projects, and ensures that they’re in knowledgable positions within the space. Aside from verification, investors will be able to view any projects’ “Health” status bar on our website. It will give the investor a good idea of where the project stands with its own community, and with other investors. It will let the investor know if something major has changed or happened within the project that could alter its trajectory. It's an important feature to consider, and one we're excited to implement. The use case for an investor is quite simple. He/She can scan the NFT of 'X' project to ensure that it's been verified through us, or they can visit the WDOX website to check if said project is stored in our verified database. Finally, he she could always check the investment project's wallet to be absolutely sure they're verified; the WDOX DAO NFT will be there, or it will not.",
    icon: <Settings />,
  },
  {
    master: 'User',
    detail:
      'These are the people who are hurt the most, and perhaps the role that benefits most from regulation. The fact is, without a massive user base, most projects will fail, or will “cut and run”. It’s simple. We want mainstream users to know they are investing, or minting, a real project. It will help beginners stick around long enough to become experienced traders, and change the space. It’s incredibly easy for a beginner to verify a project is safe. They simply scan the project’s NFT issued after we verify that project. Or, they can use our website to search for the potential investments’ verification; maybe they decide to check the project wallet on Etherscan, to make sure that project holds our NFT. This will make investing in new projects easier for the masses, and certainly make it easier to test concepts that could shape the world, and in a safe and honest way. The everyday user, professional or beginner, will also have a massive role in regulating the space moving forward. This group of people are the life blood of Web3. We’re going to create a “Health” status bar for most NFT, crypto, or DAO projects - verified through us or not. This “Health” status will give the users a rough idea, at a glance, if the project they’re interested in is trusted by the community. This will also incentivize projects to take a look at where their trust level between their holders/investors and themselves really lies. A project that is verified through WDOX DAO, and consistently has high “Health” status ratings is almost certainly a safer, or more sound, project than one without either of those things.',
    icon: <Settings />,
  },
]

const mobileData: Array<IData> = [
  {
    master: 'Development',
    detail:
      'Developers will want their project to shine on its merits, but around here, things usually fail to gain traction, or come under severe scrutiny, without the developer themselves being known. ',
    icon: <Settings />,
  },
  {
    master: 'Investor',
    detail:
      'Investors will use WDOX as their first method of due diligence. They will be able to safely invest in new and upcoming crypto and/or NFT projects without the fear they’re donating their money to a scammer, or some nefarious group. ',
    icon: <Settings />,
  },
  {
    master: 'User',
    detail:
      'These are the people who are hurt the most, and perhaps the role that benefits most from regulation. The fact is, without a massive user base, most projects will fail, or will “cut and run”. It’s simple.',
    icon: <Settings />,
  },
]

export default function Environment() {
  return (
    <div className={styles.flickerGuard}>
      <div className={styles.main}>
        <Navs />
        {/* <WhitePaperNavMenu /> */}
        <div className={styles.container}>
          <div className={styles.nav}>
            <WhitePaperNav parentRoute="/whitepaper" />
          </div>
          <div className={styles.body}>
            <div className={styles.header}>
              <div className={styles.headerImg}>
                <MyImage src={img} alt="Heading Image" />
              </div>
              <div className={styles.headerText}>
                What our project means to{' '}
                <span style={{ color: '#A8BAFF' }}>
                  Users, Developers, Investors ?
                </span>
              </div>
            </div>
            <div className={styles.title}>WDOX Environment</div>
            <div className={styles.intro}>
              <p>
                Today, the space we exist in is comprised of mainly three
                groups. At the heart of the space we have the developers; those
                that create the smart contracts, that build out user interfaces,
                that enable the general public to use Web3 assets. Then, we have
                the investors; those that finance projects, or speculate on a
                revolutionary idea. Finally, we have the users; the NFT minters,
                the retail investors, etc. So very often, a single individual
                will wear all three of these hats before understanding what many
                before her figured out the same way: crypto is dangerous, and
                unlikely to expand into the wider populace without some cleaning
                up. We’ve tackled this problem from the perspective of the three
                main roles within the environment. Almost all of the core team
                here have worn at least two of the three hats, and we uniquely
                understand the issues facing each. The intention here is to
                illustrate what our project means to each of them, individually,
                and how that will effect the collective.
              </p>
            </div>
            <div className={styles.desktopDetails}>
              <MasterDetail data={data} />
            </div>
            <div className={styles.mobileDetails}>
              {mobileData.map((datum, index) => (
                <div key={datum.master}>
                  <div className={styles.masterWrapper}>
                    <div>{datum.icon}</div>
                    <div
                      className={`${styles.master} ${masterDetailStyles.active}`}
                      key={index}
                    >
                      {datum.master}
                    </div>
                  </div>
                  <div className={styles.detail}>{datum.detail}</div>
                </div>
              ))}
            </div>

            <div className={styles.buttons}>
              <div className={styles.previousButton}>
                <Button type="link" href="background" variant="whitePaperNav">
                  Previous
                </Button>
              </div>
              <div className={styles.nextButton}>
                <Button type="link" href="status" variant="whitePaperNav">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
