import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './SignInForm.module.css'
import TextInput from '../../inputs/TextInput/TextInput'
import Button from '../../Button/Button'

interface ILogInData {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20),
})

export default function LogInForm() {
  // May need to remove these states later, is getting the values on
  // submit will suffice for all uses.
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogInData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    console.log(errors)
  })

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.form}>
        {errors.email && errors.email.message && (
          <span>{errors.email.message}</span>
        )}
        <TextInput
          type="text"
          {...register('email')}
          id="email"
          label="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <br />
        {errors.password && errors.password.message && (
          <span>{errors.password.message}</span>
        )}
        <TextInput
          type="password"
          id="password"
          required
          label="password"
          {...register('password')}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Button type="submit" variant="outline" value="login" />
      </div>
    </form>
  )
}
