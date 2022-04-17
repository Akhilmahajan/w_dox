import React from 'react'
import { mount } from '@cypress/react'
import Team from './Team'

it('is visible', () => {
  mount(
    <Team />
  )
  cy.get('div').should('be.visible')
})
