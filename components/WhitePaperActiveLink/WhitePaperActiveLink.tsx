import React, { ReactChild, ReactChildren } from 'react'
import { useRouter } from 'next/router'
import styles from './WhitePaperActiveLink.module.css'

interface IActiveLinkProps {
  text: string
  href: string
  icon?: ReactChild | ReactChild[] | ReactChildren | JSX.Element
  shallow?: boolean
}

function WhitePaperActiveLink({ text, href, shallow, icon }: IActiveLinkProps) {
  const router = useRouter()

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault()
        router.push(href, undefined, { shallow })
      }}
      className={`${styles.navLink} ${
        router?.asPath === href ? styles.activeLink : ''
      }`}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </a>
  )
}

WhitePaperActiveLink.defaultProps = {
  shallow: false,
  icon: '',
}

export default WhitePaperActiveLink
