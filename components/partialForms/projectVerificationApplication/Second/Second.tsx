import { TextField } from '@mui/material'
import React from 'react'
import { FormikProps } from 'formik'
import { FormValues } from '../../../../pages/projectverificationapplication/index'
import TextInput from '../../../inputs/TextInput/TextInput'

// Shape of form values

interface IProps {
  formik: FormikProps<FormValues>
}

export default function Second() {
//{ formik }: IProps
  return (
    <div>
      {/* <TextInput
        fullWidth
        id="developerName"
        name="developerName"
        label="DeveloperName"
        value={formik.values.developerName}
        onChange={formik.handleChange}
        error={formik.touched.developerName && Boolean(formik.errors.email)}
        helperText={formik.touched.developerName && formik.errors.email}
      /> */}
    </div>
  )
}
