import React from 'react'
import { mount } from '@cypress/react'
import RecentProjectsCard from './RecentProjectsCard'
import boredApe from '../../assets/images/nft.png'

it('is visible', () => {
  mount(<RecentProjectsCard src={boredApe} />)
  cy.get('div').should('be.visible')
})
