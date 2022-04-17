import React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'

it('is visible', () => {
  mount(
    <Button
      variant="primary"
      onClick={() => {
        console.log('')
      }}
    >
      Hello
    </Button>
  )
  cy.get('div').should('be.visible')
})
