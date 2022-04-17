import React from 'react'
import { mount } from '@cypress/react'
import FrequentlyAsked from './FrequentlyAsked'

it('is visible', () => {
  mount(<FrequentlyAsked />)
  cy.get('div').should('be.visible')
})
