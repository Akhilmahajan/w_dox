import React from 'react'
import { mount } from '@cypress/react'
import AnimatedTimeDigit from './AnimatedTimeDigit'

it('is visible', () => {
  mount(
    <AnimatedTimeDigit number={5} />
  )
  cy.get('div').should('be.visible')
})
