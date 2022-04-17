import styles from './ProjectVerificationApplication.module.css'
import Footer from '../../components/Footer/Footer'
import Navs from '../../components/Navs/Navs'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import First from '../../components/partialForms/projectVerificationApplication/First/First'
import Second from '../../components/partialForms/projectVerificationApplication/Second/Second'
// import Third from '../../components/partialForms/projectVerificationApplication/Third/Third'
import Disclaimer from '../../components/Disclaimer/Disclaimer'

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
  '',
]

interface IStepperProp {
  activeStep: number
  // setActiveStep: (step: number | ((prevActiveStep: number) => number)) => void
  handleStep: (step: number) => void
  completed: { [k: number]: boolean }
  // setCompleted: (newCompleted: { [k: number]: boolean }) => void
  // handleDone: () => void
}

function HorizontalNonLinearStepper({
  activeStep,
  handleStep,
  completed,
}: IStepperProp) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton
              onClick={() => {
                handleStep(index)
              }}
              color="inherit"
            ></StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

const validationSchema = yup.object({
  projectName: yup.string().required('Project name is required'),
  developerName: yup.string().required('Developer name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

export { validationSchema }

export default function ProjectVerificationApplication() {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState<{
    [k: number]: boolean
  }>({})

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleSubmit = async () => {
    console.log('')
  }

  const handleStep = (step: number) => {
    setActiveStep(step)
  }

  const formikObj = useFormik({
    initialValues: {
      projectName: '',
      developerName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const forms = [
    <First
      //formik={formikObj}
      key="first"
    />,
    <Second
      //formik={formikObj}
      key="second"
    />,
    // <Third formik={formikObj} key="third" />,
    <Disclaimer key="disclaimer" />,
  ]

  return (
    <div className={styles.main}>
      <Navs />
      <div className={styles.container}>
        <h3 className={styles.heading}>Project Verification Application</h3>
        {activeStep} {completedSteps()}
        <div className={styles.form}>
          <HorizontalNonLinearStepper
            handleStep={handleStep}
            completed={completed}
            activeStep={activeStep}
            // setActiveStep={setActiveStep}
            // setCompleted={setCompleted}
            // handleDone={handleSubmit}
          />
          <form className={styles.form} onSubmit={formikObj.handleSubmit}>
            <div className={styles.partialForm}>{forms[activeStep]}</div>
            {/* {completedSteps() > 1 && (
                <Button variant="contained" onClick={handleBack}>
                  Back
                </Button>
              )} */}
            {activeStep === totalSteps() - 1 ? (
              <Button variant="contained" type="submit">
                Submit
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export interface FormValues {
  email: string
  projectName: string
  password: string
  developerName: string
}
