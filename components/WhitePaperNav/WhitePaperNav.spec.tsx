import React from 'react'
import { mount } from '@cypress/react'
import WhitePaperNav from './WhitePaperNav'

it('is visible', () => {
  mount(<WhitePaperNav parentRoute="" />)
  cy.get('div').should('be.visible')
})
