import React from 'react'
import { mount } from '@cypress/react'
import Timer from './Timer'

it('renders search bar', () => {
  mount(<Timer />)
  cy.get('div').should('not.be.null')
})
