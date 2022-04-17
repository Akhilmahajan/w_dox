import React from 'react'
import { mount } from '@cypress/react'
import MobileFooterLinks from './MobileFooterLinks'

it('is visible', () => {
  mount(<MobileFooterLinks />)
  cy.get('div').should('be.visible')
})
