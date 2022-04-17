import React from 'react'
import { mount } from '@cypress/react'
//import TextInput from './TextInput'
import { TextField } from '@mui/material'
import styled from '@emotion/styled'

it('is visible', () => {
  // mount(
  //   <TextInput id='' style={{ width: '100%' }} name='' label='email' placeholder='email' type='text' />
  // )
  const ValidationTextField = styled(TextField)({
    '& fieldset': {
      borderColor: 'green',
      borderWidth: 2,
      borderRadius: 20,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  })

  mount(
    <>
      <ValidationTextField label="Outlined secondary" />
      <TextField
        sx={{
          '& fieldset': {
            borderRadius: 20,
          },
        }}
      />
    </>
  )
  cy.get('span').should('be.visible')
})
