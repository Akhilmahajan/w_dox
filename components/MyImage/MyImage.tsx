import Image, { StaticImageData } from 'next/image'
import { object, string } from 'prop-types'
import React from 'react'
import styles from './MyImage.module.css'

interface IMyImage {
  src: StaticImageData
  alt: string
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | 'raw' | undefined
  width?: string
  style?: object
  placeholder?: 'blur' | 'empty' | undefined
  maxWidth?: string
  className?: string
}

export default function MyImage({
  src,
  alt,
  maxWidth,
  width,
  style,
  placeholder,
  className,
}: IMyImage) {
  const widths = { width, maxWidth }

  if (maxWidth) {
    widths['maxWidth'] = maxWidth
  }

  if (width) {
    widths['width'] = width
  }

  return (
    <div
      className={`${className} ${styles.imageContainer}`}
      style={{ ...style, ...widths }}
    >
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        layout="responsive"
        placeholder={placeholder}
      />
    </div>
  )
}

MyImage.propTypes = {
  alt: string,
  src: object,
  layout: string,
  width: string,
  height: string,
  className: string,
  placeholder: string,
  style: object,
}

MyImage.defaultProps = {
  layout: 'fill',
  height: 'unset',
  className: '',
  maxWidth: '100%',
  width: '100%',
  placeholder: 'blur',
}
