import React from 'react'
import { mount } from '@cypress/react'
import AnimTextInput from './AnimTextInput'

it('is visible', () => {
  mount(
    <AnimTextInput id='' name='' type='text' />
  )
  cy.get('span').should('be.visible')
})
