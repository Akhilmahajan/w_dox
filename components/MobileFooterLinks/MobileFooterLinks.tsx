import { Button as MaterialButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'
import styles from './MobileFooterLinks.module.css'

export default function MobileFooterLinks() {
  const [opened, setOpened] = useState([false, false, false])

  const links_list = [
    {
      group: 'Company',
      links: [
        { text: 'How It Works', url: '' },
        { text: 'Achievements', url: '' },
        { text: 'Verification', url: '' },
        { text: 'Education', url: '' },
        { text: 'WDOX System', url: '' },
        { text: 'Whitepaper', url: '' },
        { text: 'Presale', url: '' },
      ],
    },
    {
      group: 'App',
      links: [
        { text: 'Staking', url: '' },
        { text: 'Verification', url: '' },
        { text: 'NFT Status', url: '' },
        { text: 'Contracts', url: '' },
      ],
    },
    {
      group: 'Resources',
      links: [
        { text: 'Education', url: '' },
        { text: 'FAQ', url: '' },
        { text: 'Tuturial', url: '' },
        { text: 'Blog', url: '' },
      ],
    },
  ]

  return (
    <div className={styles.main}>
      {links_list.map((links, activeIndex) => {
        return (
          <div
            key={activeIndex}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className={styles.head}>
              <button
                className={styles.button}
                onClick={() => {
                  const _opened = [...opened]
                  _opened[activeIndex] = !opened[activeIndex]
                  setOpened(_opened)
                }}
              >
                {links.group}
              </button>
              {opened[activeIndex] ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <div className={styles.linksContainer}>
              {opened[activeIndex] &&
                links.links.map((link, index) => {
                  return (
                    <a className={styles.link} key={index} href={link.url}>
                      {link.text}
                    </a>
                  )
                })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
