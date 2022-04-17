import React, { ReactChild, ReactChildren } from 'react'
import { useRouter } from 'next/router'
import styles from './ActiveLink.module.css'

interface IActiveLinkProps {
  children: ReactChild | ReactChild[] | ReactChildren
  href: string
  shallow: boolean
}

function ActiveLink({ children, href, shallow }: IActiveLinkProps) {
  const router = useRouter()

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault()
        router.push(href, undefined, { shallow: shallow })
      }}
      className={`${styles.navLink}  ${
        router?.asPath === href ? styles.activeLink : ''
      }`}
    >
      {children}
    </a>
  )
}

ActiveLink.defaultProps = {
  shallow: false,
}

export default ActiveLink
