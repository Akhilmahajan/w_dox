import { TextField } from '@mui/material'
import React from 'react'
import { FormikProps } from 'formik'

// Shape of form values

interface FormValues {
  email: string

  password: string
}

interface IProps {
  formik: FormikProps<FormValues>
}

export default function Third({ formik }: IProps) {
  return (
    <div>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
    </div>
  )
}
