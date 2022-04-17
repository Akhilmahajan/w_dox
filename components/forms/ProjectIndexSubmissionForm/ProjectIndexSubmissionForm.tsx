import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@mui/material'
import styles from './ProjectIndexSubmissionForm.module.css'

interface IFormData {
  email: string,
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20)
})

export default function ProjectIndexSubmissionForm() {
  // May need to remove these states later, is getting the values on 
  // submit will suffice for all uses.
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
    console.log(errors)
  })

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">
          {errors.email && errors.email.message && <span>{errors.email.message}</span>}
          <input
            type="text"
            {...register('email')}
            id="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </label>
        <br />
        <label htmlFor="password">
          {errors.password && errors.password.message && <span>{errors.password.message}</span>}
          <input
            type="text"
            id="password"
            required
            {...register('password')}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </label>
        <input type="submit" value="login" />
        <TextField className={styles.inputRounded} sx={{ background: 'white', borderRadius: 10 }} id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </form>
  )
}