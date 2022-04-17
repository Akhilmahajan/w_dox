import React from 'react'
import { mount } from '@cypress/react'
import HomeView from './HomeView'

it('is visible', () => {
  mount(
    <HomeView />
  )
  cy.get('div').should('be.visible')
})
