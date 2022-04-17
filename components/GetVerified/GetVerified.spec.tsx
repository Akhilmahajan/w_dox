import React from 'react'
import { mount } from '@cypress/react'
import GetVerified from './GetVerified'

it('is visible', () => {
  mount(
    <GetVerified />
  )
  cy.get('div').should('be.visible')
})
