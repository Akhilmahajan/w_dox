/* eslint-disable react/button-has-type */
import { useRouter } from 'next/router'
import React, { ReactChild } from 'react'
import styles from './Button.module.css'
import { Button as MaterialButton } from '@mui/material'

interface IButtonProps {
  children?: React.ReactChild | React.ReactChild[] | string
  href?: string
  fullWidth?: boolean // Not currently in use
  size?: 'small' | 'medium' | 'large'
  type?: 'submit' | 'button' | 'reset' | 'link'
  value?: string | number
  className?: string
  onClick?: () =>
    | void
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | ((value: number | string | object) => void)
    | null
  title?: string
  style: { [key: string]: string }
  variant?: 'primary' | 'danger' | 'warning' | 'outline' | 'whitePaperNav'
}

export default function Button({
  children,
  type,
  className,
  variant,
  size,
  style,
  value,
  href,
  fullWidth,
  onClick,
}: IButtonProps) {
  let cName = ''
  let btn: ReactChild = <div></div>
  const router = useRouter()

  switch (variant) {
    case 'primary':
      cName = styles.primary
      break
    case 'outline':
      cName = styles.outline
      break
    case 'whitePaperNav':
      cName = styles.whitePaperNav
      break
    default:
      break
  }

  switch (type) {
    case 'submit':
      btn = (
        <input
          style={style}
          type="submit"
          value={value}
          className={`${className} ${cName} ${styles.button}`}
        />
      )
      break
    case 'reset':
      break
    case 'link':
      btn = (
        <a
          href={href}
          onClick={(event) => {
            event.preventDefault()
            router.push(href ?? '', undefined, { shallow: false })
          }}
          className={`${styles.whitePaperNav} ${className} ${cName}`}
          style={style}
        >
          {children}
        </a>
      )
      break
    case 'button':
      btn = (
        /*<button
          onClick={onClick}
          className={`${styles.button} ${className} ${cName}`}
          style={style}
        >
          {children}
        </button>*/
        <MaterialButton sx={style} variant="contained">
          {children}
        </MaterialButton>
      )
      break

    default:
      break
  }

  return btn
}

Button.defaultProps = {
  variant: 'primary',
  className: '',
  type: 'button',
  style: {},
  size: 'medium',
  children: '',
  fullWidth: false,
  href: '',
}
