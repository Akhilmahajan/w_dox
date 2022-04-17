import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
// import styles from './RoadMap.module.css'

import { useState } from 'react'

const steps = [
  {
    label: '.',
    description: (
      <span>
        <li>
          Launch the WDOX DAO, WDEX, and WDOX Verification NFTs via Incubator,
          LaunchPad, VC Funding, or IDO.
        </li>
        <li>
          Build the adoption of verification, and slowly transfer control to the
          DAO. No project is a true DAO on launch day. Network effects are
          important for this to truly be effective.
        </li>
        <li>
          Build the investigative team for WDOX; streamline the “Health” ratings
          system of verified/unverified projects.
        </li>
        <li>
          Begin making our indexed data more accessible; making our data
          collection more efficient.
        </li>
      </span>
    ),
  },
  {
    label: '..',
    description: (
      <span>
        <li>
          Begin sharing access for cryptocurrency projects to the WDEX once
          they’ve been verified.
        </li>
        <li>Begin building the marketplace for verified projects.</li>
        <li>
          Continue to grow our verified project database. The larger the
          adoption, the safer the space becomes.
        </li>
        <li>
          Look into artificial intelligence systems to verify projects;
          eliminating human bias, and human error.
        </li>
      </span>
    ),
  },
  {
    label: '...',
    description: (
      <span>
        <li>
          Launch the marketplace for verified projects with the lowest fees of
          any marketplace. The project can afford to offer lower fees than the
          competition because it’s technically our fifth stream of revenue, and
          we’re benefitting from use, more than fees.{' '}
        </li>
        <li>
          Rebalance the project: Ensure that minimum voting thresholds are met
          every time; Scale the back-end for more project information/encryption
          keys; Ensure the projects we do have verified are all meeting their
          bi-monthly minimum updating standards, check on all project wallets,
          NFTs.{' '}
        </li>
        <li>
          Begin transferring actual ownership, and decision-making, over to the
          DAO. Lower/Raise the threshold for participation.
        </li>
      </span>
    ),
  },
]

export default function RoadMap() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box>
      <Stepper
        sx={{ width: '100%' }}
        color="white"
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography sx={{ color: 'white' }} variant="caption">
                    Last step
                  </Typography>
                ) : null
              }
            >
              <Typography sx={{ color: 'white' }}>{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '21px',
                  lineHeight: '34px',
                  textAlign: 'justify',
                  color: '#ffffff',
                }}
              >
                {step.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {index !== steps.length - 1 && (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {'Continue'}
                    </Button>
                  )}
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

// export default function RoadMap() {
//   return (
//     <div className={styles.main}>
//       <div className={styles.stepper}>i</div>
//       <div className={styles.text}></div>
//     </div>
//   )
// }
