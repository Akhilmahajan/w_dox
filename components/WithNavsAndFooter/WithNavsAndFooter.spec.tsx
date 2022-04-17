import React from 'react'
import { mount } from '@cypress/react'
import WithNavsAndFooter from './WithNavsAndFooter'
import { Provider } from 'react-redux'
import store from '../../redux/store'

it('is visible', () => {
  mount(
    <Provider store={store}>
      <WithNavsAndFooter>Hello</WithNavsAndFooter>
    </Provider>
  )
  cy.get('div').should('be.visible')
})
