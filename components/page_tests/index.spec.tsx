import React from 'react'
import { mount } from '@cypress/react'
import Home from '../../pages/index'

it('is visible', () => {
  mount(<Home />)
  cy.get('div').should('be.visible')
})
