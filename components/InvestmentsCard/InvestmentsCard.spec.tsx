import React from 'react'
import { mount } from '@cypress/react'
import InvestmentsCard from './InvestmentsCard'
import img from '../../assets/images/investment.svg'

it('is visible', () => {
  mount(
    <InvestmentsCard
      button={{ text: 'Join DAO', url: '' }}
      text="Decentralized regulation lives and dies with the DAO. The DAO is the nerve center of the project."
      title="DAO"
      img={img}
    />
  )
  cy.get('div').should('be.visible')
})
