import React from 'react'
import { mount } from '@cypress/react'
import SignInForm from './SignInForm'

it('is visible', () => {
  mount(
    <SignInForm />
  )
  cy.get('div').should('be.visible')
})
