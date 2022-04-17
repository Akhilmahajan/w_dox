import * as React from 'react';
import { useState } from 'react'
import {Grid, Paper, FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material';
import Footer from '../../components/Footer/Footer'
import Navs from '../../components/Navs/Navs'
import styles from '../doodles/Doodles.module.css'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepButton, StepLabel, Typography } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import pageStyles from './verification.module.css'

const steps = [0, 1, 2, 3, 4];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: '15px',
    left: 'calc(-50% + 14px)',
    right:' calc(50% + 14px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "red"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "green"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 2,
    borderRadius: 1
  }
}));

function HorizontalLinearStepper({
  currentStep,
  setCurrentStep
}: any) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper alternativeLabel connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label} onClick={() => setCurrentStep(label)}>
            <StepButton
              icon={
                label < currentStep ? (
                  <CheckCircleIcon color='primary' fontSize='large' />
                ) : label > currentStep ? (
                  <RadioButtonUncheckedIcon  fontSize='large'/>
                ) : (
                  <AdjustOutlinedIcon color='primary' fontSize='large'/>
                )
              }
            />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default function Doodles() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <div className={styles.doodles}>
        <Navs />
        <Grid container spacing={2} justifyContent="center" sx={{marginY:"50px"}}>
          <Grid item sm={12} md={8} sx={{textAlign:'center'}}>
            <Typography className={pageStyles.heading} variant="h4" sx={{marginY:"5%"}}>
              Project Verification Application
            </Typography>
            <HorizontalLinearStepper 
              currentStep={currentStep} 
              setCurrentStep={setCurrentStep}
            />
            <Paper sx={{
                textAlign:'left',
                padding:"40px",
                marginTop:"4%",
                background: 'hsl(0deg 0% 0% / 25%)',
                color:'white',
                '@media(minWidth: 480px)' : {
                  background: 'hsl(0deg 0% 0% / 100%)',
                }
              }} className={pageStyles.continer}>
              <h3>Community Update Information</h3>
              <p>* We need developers to submit updates to our project to more accurately represent your “Health” rating. Upon submission, the updates will be verified and reflected within your project’s “Health” rating immediately.</p>

              <b>How often will the project update its Roadmap ?</b>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)', 
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginTop: '21px',
                  }}
                >
                  <MenuItem selected>
                    <span>Quarterly</span>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <p>* We need the developers to disclose the marketing they’ve paid for. This is especially true if the project is paying for promotion on social media - Twitter, TikTok, YouTube, Instagram, Weibo, etc. The amount spent, to whom it was given, and on what metrics. We do this to protect the community from serial scammers. </p>
              <b>How often will the project update its Marketing/Advertising?</b>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)', 
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginTop: '21px'
                  }}
                >
                  <MenuItem selected>
                  <span>Quarterly</span>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ display:'flex', justifyContent:"space-between", marginTop :"7%" ,marginX:"2%" }}>
                <Button variant="contained" size="large" sx={{ paddingX:'7%',fontFamily:"Nunito Sans",fontStyle: 'normal'}}  >Back</Button>
                <Button variant="contained" size="large" sx={{ paddingX:'7%'}}>Next</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  )
}
