import React from 'react'
import { mount } from '@cypress/react'
import FrequentlyAskedCard from './FrequentlyAskedCard'

it('is visible', () => {
  mount(
    <FrequentlyAskedCard
      title="How to Apply for Pre-Sale."
      href="/#"
      details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  )
  cy.get('div').should('be.visible')
})
