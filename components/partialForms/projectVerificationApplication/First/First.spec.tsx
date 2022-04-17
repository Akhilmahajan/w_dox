import React from 'react'
import { mount } from '@cypress/react'
import First from './First'

it('is visible', () => {
  mount(
    <div style={{ width: '100%', height: '100%', background: '#19191b' }}>
      <First />
    </div>
  )
  cy.get('div').should('be.visible')
})
