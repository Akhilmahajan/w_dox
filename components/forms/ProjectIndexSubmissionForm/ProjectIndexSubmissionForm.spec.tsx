import React from 'react'
import { mount } from '@cypress/react'
import ProjectIndexSubmissionForm from './ProjectIndexSubmissionForm'

it('is visible', () => {
  mount(
    <ProjectIndexSubmissionForm />
  )
  cy.get('div').should('be.visible')
})
