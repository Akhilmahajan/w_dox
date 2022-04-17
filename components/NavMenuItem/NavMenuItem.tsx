import React, { MouseEventHandler, ReactChild, ReactChildren } from 'react'
import { func, any, string } from 'prop-types'
import styles from './NavMenuItem.module.css'
import { useRouter } from 'next/router'

interface INavItemProps {
  onClick?: () => void
  onBlur?: () => void
  tooltipTitle: string | null
  children?: ReactChild | ReactChildren | ReactChild[] | null
  href: string
}

export default function NavMenuItem({
  //onClick,
  onBlur,
  children,
  //tooltipTitle,
  href,
}: INavItemProps) {
  const router = useRouter()
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a
      onClick={handleClick}
      onBlur={onBlur}
      className={`${styles.menuItem}  ${
        router.asPath === href ? styles.activeLink : ''
      }`}
    >
      {children}
    </a>
  )
}

NavMenuItem.propTypes = {
  onClick: func,
  onBlur: func,
  children: any,
  tooltipTitle: string,
  href: string,
}

NavMenuItem.defaultProps = {
  onclick: () => {
    console.log('')
  },
  title: '',
  className: '',
}
