import React from 'react'
import { mount } from '@cypress/react'
import FlowChart from './FlowChart'

it('is visible', () => {
  mount(
    <FlowChart />
  )
  cy.get('div').should('be.visible')
})
