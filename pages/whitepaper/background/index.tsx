import MyImage from '../../../components/MyImage/MyImage'
import img from '../../../assets/images/introducing.svg'
import styles from './Background.module.css'

import React from 'react'
import Footer from '../../../components/Footer/Footer'
import WhitePaperNav from '../../../components/WhitePaperNav/WhitePaperNav'
import Button from '../../../components/Button/Button'
import Navs from '../../../components/Navs/Navs'
// import WhitePaperNavMenu from '../../../components/WhitePaperNavMenu/WhitePaperNavMenu'

export default function Background() {
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
          <div className={styles.header}>
            <div className={styles.headingText}>
              The crypto space is full of projects that are downright dangerous.{' '}
            </div>
            <div className={styles.headingImg}>
              <MyImage src={img} placeholder="empty" alt="Heading Image" />
            </div>
          </div>
          <div className={styles.bodyTitle}>Background</div>
          <div className={styles.bodyText}>
            <p>
              It’s become a toxic space, and that’s unfortunate when the
              potential for real change is considered. The space has become
              synonymous with scams. We use phrases like “rug pull” and “honey
              pot” way too often, and this inhibits main stream adoption. The
              same holds true for the NFT space. Developers are hired or
              outsourced from freelance sites, and scams emerge. Often, a
              project born in good faith is left to die when the team behind it
              earns untold amounts of money after minting out, and then they
              continue to pull in royalties from secondary sales.
            </p>
            <p>
              In the current space, scammers are almost incentivized to lead
              mass marketing campaigns, hire a developer, an artist, and launch
              a project. If the project does well, and volume is high on
              secondary marketplaces, then the project should feel compelled to
              deliver on their “Roadmap.” Having said that, it’s become
              irrelevant to 90% of the project leaders in the space.
            </p>
            <p>
              If the project does poorly, or is announced a scam, the developers
              of said project still reap the secondary sales royalties, and
              sometimes with even greater volume, as people try to escape its
              downward spiral. This is plaguing our space. The creation of NFTs,
              and even crypto tokens, has become plug-and-play easy. Project
              leaders do not need a single scrap of blockchain experience or
              frontend development skill; so long as they have the ability to
              finance the project’s creation, they stand to make millions of
              dollars. The expression many use within the crypto space is “Wild
              West”, and in a sense, we are all correct.
            </p>
            <p>
              This space is largely unregulated, and will be for some time to
              come. Most of us, especially those that have been around for a
              while are believers in a free market, financial freedom, or the
              right to privacy. We believe that in order for NFTs - utility and
              art based - to becomes mainstream, for crypto-currencies to catch
              fiat in a real way, for innovation within the entire sphere to
              help fix the problems that exist - we need real regulation, and we
              need it to come from within. Regulation WILL come from world
              governments. They will over-regulate, and stifle innovation. It’s
              not a matter of what, but of when. They will hire so-called
              experts, and those experts will make things incredibly difficult
              for new projects, novel ideas, or revolutionary breakthroughs to
              happen.
            </p>
            <p>
              This is a space built on decentralization, and this needs to
              continue in order for it to be sustainable. Regulating through
              identity disclosure, and fear of public and/or legal reprisal is
              one of the best ways for our space to regulate itself. The trouble
              is, until now, that’s a relatively dangerous and/or nerve wracking
              task.
            </p>
            <p>
              All too often project developers simply do not want to document
              their identity. The reasons vary, but something as simple as
              working for a major technology company, or being known in the
              space from another project - whether successful or not - could
              hold back a project, and therefore, slow innovation. Developers
              could come from a privacy background, or could have watched first
              hand how easy it can be to have their identities stolen, or their
              lives flipped upside down. A hypothetical, real-life Satoshi
              Nakamoto wouldn’t be able to buy a gallon of milk without being
              stalked and harassed endlessly. Vitalik Buterin is an
              international celebrity. Sergei Nazarov is a celebrity within the
              crypto space, and has thousands of “Marines” hanging on his every
              word.
            </p>
            <p>
              Developers of large, successful projects will always have
              incentive to publicly identify themselves. This is especially true
              when it becomes their primary source of income. Not so for the
              risk on projects that could, on one hand, fail miserably. Or, on
              the other hand, they could change finance, leasing, ticketing,
              etc. as we know it. Today, those of us in this space hear, or
              read, “un-doxxed team” and we try to convince ourselves that it’s
              going to be okay. We do our diligence, and we think... “well,
              SHIBA was created anonymously; Bitcoin was created anonymously;
              Bored Ape Yacht Club was created anonymously”... but in reality,
              we are terrified. Most of us are already psychologically out of
              the project before its begun. It’s just become too risky in a
              space full of scams.
            </p>
            <p>
              We are a core team of six from all across the world; spread over
              four continents, and 5 timezones. When I put the project together,
              I was looking for a specific set of qualities amongst all new
              hires. I wanted the new hires to become team members, not
              employees. I wanted them all to believe in the possibility that a
              single project could help clean up Web3. We’ve all, at some point
              or another, been the victim of an outright scam, a “slow-rug”
              scam, a “honey pot”, or even a complete wallet wipe-out scam. It
              has to stop. There has to be some barrier to entry, and it has to
              be done in a way that’s not going to stifle innovation, or keep
              otherwise great developers from building within Web3.
            </p>
            <p>
              Make no mistake, Web3 - NFTs, crypto, DAOs - are the future of the
              global financial system, and finance is only one of countless
              industries that will be revolutionized by the blockchain. We
              believe that in order for this to happen, we need to regulate the
              space from within. Government overregulation is hardly conducive
              to innovation.
            </p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.previousButton}>
              <Button
                type="link"
                href="executivesummary"
                variant="whitePaperNav"
              >
                Previous
              </Button>
            </div>
            <div className={styles.nextButton}>
              <Button type="link" href="environment" variant="whitePaperNav">
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
