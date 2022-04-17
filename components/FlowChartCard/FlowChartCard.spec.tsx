import React from 'react'
import { mount } from '@cypress/react'
import FlowChartCard from './FlowChartCard'

it('is visible', () => {
  mount(
    <FlowChartCard title='title' details='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
  )
  cy.get('div').should('be.visible')
})
