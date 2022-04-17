// https://mui.com/material-ui/react-button/#upload-button
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
//import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
//import { FormikProps } from 'formik'
// import TextInput from '../../../inputs/TextInput/TextInput'
//import { FormValues } from '../../../../pages/projectverificationapplication/index'
import styled from '@emotion/styled'

// Shape of form values

/*const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})
*/

/* <BootstrapButton variant="contained" disableRipple>
Bootstrap
</BootstrapButton> */

const TextInput = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label': {
    color: 'grey',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    color: 'white',
  },
})

const WhiteText = styled(Typography)({
  color: 'white',
})

const validationSchema = yup.object({
  projectName: yup
    .string()
    .required('Project name is required')
    .max(225, 'Too long'),
})

interface IProps {
  next: () => void
}

export default function First() {
  const formikObj = useFormik({
    initialValues: {
      projectName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  // const [file, setFile] = useState<File>()
  return (
    <Grid container spacing={2}>
      <form onSubmit={formikObj.handleSubmit}>
        <Grid item xs={12}>
          <WhiteText>Project Name</WhiteText>{' '}
        </Grid>
        <Grid item xs={12}>
          <TextInput
            fullWidth
            id="projectName"
            name="projectName"
            label="Project Name"
            value={formikObj.values.projectName}
            onChange={formikObj.handleChange}
            error={
              formikObj.touched.projectName &&
              Boolean(formikObj.errors.projectName)
            }
            helperText={
              formikObj.touched.projectName && formikObj.errors.projectName
            }
          />
        </Grid>
        <Grid item xs={12}>
          {/* <TextInput
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        /> */}
        </Grid>
        <Grid item xs={12}>
          <WhiteText>Project Details</WhiteText>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit"></Button>
        </Grid>
      </form>
    </Grid>
  )
}
