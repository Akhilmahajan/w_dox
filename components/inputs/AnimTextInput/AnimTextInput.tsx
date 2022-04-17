import styles from './AnimTextInput.module.css'

interface IProps {
  type: 'email' | 'text' | 'number'
  style?: { [key: string]: string }
  wrapperStyle?: { [key: string]: string }
  hookFormProps?: { [key: string]: string }
  id: string
  name: string
  className?: string
  wrapperClassName?: string
  required?: boolean
  placeholder?: string
}

export default function AnimTextInput({ type, style, placeholder, id, wrapperStyle, required, className, name, hookFormProps }: IProps) {
  return (
    <span style={wrapperStyle} className={`${styles.container} ${styles.wrapperClassName}`}>
      <input style={style} required={required} placeholder=' ' type={type} {...hookFormProps} className={`${styles.input} ${className}`} name={name} id={id} />
      <label className={styles.label} htmlFor={id}>{placeholder}</label>
    </span >
  )
}

AnimTextInput.defaultProps = {
  hookFormProps: {},
  className: '',
  style: {},
  wrapperStyle: {},
  wrapperClassName: '',
  required: false,
  placeholder: ''
}