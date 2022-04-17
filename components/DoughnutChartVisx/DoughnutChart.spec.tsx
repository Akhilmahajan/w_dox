import React from 'react'
import { mount } from '@cypress/react'
import DoughnutChart from './DoughnutChart'

it('is visible', () => {
  mount(<DoughnutChart />)
  cy.get('div').should('be.visible')
})
