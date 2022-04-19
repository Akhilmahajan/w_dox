import { useState } from 'react'
import { Grid, Paper, FormControl, Button, Box, TextField, InputAdornment, ThemeProvider, createTheme } from '@mui/material';
import Footer from '../../components/Footer/Footer'
import Navs from '../../components/Navs/Navs'
import styles from '../doodles/Doodles.module.css'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepButton, Typography } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import pageStyles from './verification.module.css'
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';

import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const defaultTheme = createTheme();
const steps = [0, 1, 2, 3, 4];
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: '15px',
    left: 'calc(-50% + 14px)',
    right: ' calc(50% + 14px)',
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
                  <RadioButtonUncheckedIcon fontSize='large' />
                ) : (
                  <AdjustOutlinedIcon color='primary' fontSize='large' />
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
        <Grid container spacing={2} justifyContent="center" sx={{ marginY: "50px" }}>
          <Grid item sm={12} md={8} sx={{ textAlign: 'center' }}>
            <Typography className={pageStyles.heading} variant="h4" sx={{ marginY: "5%" }}>
              Project Verification Application
            </Typography>
            <HorizontalLinearStepper
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            <Paper sx={{
              textAlign: 'left',
              padding: "40px",
              marginTop: "4%",
              background: 'hsl(0deg 0% 0% / 25%)',
              color: 'white',
              '@media(minWidth: 480px)': {
                background: 'hsl(0deg 0% 0% / 100%)',
              }
            }} className={pageStyles.continer}>


              <S2></S2>
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  )
}




function S2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <h3>Core Development Team</h3>
        </Grid>
        <Grid item xs={12} sm={12} columns={{ xs: 4, md: 12 }} >
          <Box className={pageStyles.team} >
            <h4>Developer 1</h4>
            <div>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5" r="5" fill="#4F46E5" />
              </svg>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5" r="5" fill="white" />
              </svg>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5" r="5" fill="white" />
              </svg>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5" r="5" fill="white" />
              </svg>
            </div>

            <span>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 5C10.5 5.26522 10.3946 5.51957 10.2071 5.70711C10.0196 5.89464 9.76522 6 9.5 6H6.5V9C6.5 9.26522 6.39464 9.51957 6.20711 9.70711C6.01957 9.89464 5.76522 10 5.5 10C5.23478 10 4.98043 9.89464 4.79289 9.70711C4.60536 9.51957 4.5 9.26522 4.5 9V6H1.5C1.23478 6 0.98043 5.89464 0.792894 5.70711C0.605357 5.51957 0.5 5.26522 0.5 5C0.5 4.73478 0.605357 4.48043 0.792894 4.29289C0.98043 4.10536 1.23478 4 1.5 4H4.5V1C4.5 0.734783 4.60536 0.48043 4.79289 0.292893C4.98043 0.105357 5.23478 0 5.5 0C5.76522 0 6.01957 0.105357 6.20711 0.292893C6.39464 0.48043 6.5 0.734783 6.5 1V4H9.5C9.76522 4 10.0196 4.10536 10.2071 4.29289C10.3946 4.48043 10.5 4.73478 10.5 5Z" fill="white" fill-opacity="0.6" />
              </svg> Add Developer
            </span>

          </Box>

          {/* <p>Add developer</p> */}
          <Box className={pageStyles.showHide} >
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5" r="5" fill="#4F46E5" />
            </svg>
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5" r="5" fill="white" />
            </svg>
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5" r="5" fill="white" />
            </svg>
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5" r="5" fill="white" />
            </svg>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>

          <h4>Developer Name</h4>
          <FormControl fullWidth>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<PersonIcon sx={{ color: "#A0A3BD", fontSize: 20 }} />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>

          <h4>Identity Document</h4>
        </Grid>
        <Grid item xs={12} sm={6}>

          <FormControl fullWidth>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<PersonIcon sx={{ color: "#A0A3BD", fontSize: 20 }} />}
            />
          </FormControl>
        </Grid>


        <Grid item xs={6} sm={3} >
          <FormControl fullWidth >
            <br />
            <DashedButton></DashedButton>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} >
          <FormControl fullWidth >
            <br />
            <DashedButton></DashedButton>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} >
          <FormControl fullWidth >
            <h4>Email Address</h4>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<MarkEmailUnreadOutlinedIcon sx={{ color: "#A0A3BD", fontSize: 20 }} />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} >
          <FormControl fullWidth >
            <h4>Social Media</h4>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<VolumeUpOutlinedIcon sx={{ color: "#A0A3BD", fontSize: 20 }} />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} columns={{ xs: 4, md: 12 }}  >
          <PersonIcon sx={{ color: "#A0A3BD", fontSize: 20 }} />
          <span className={pageStyles.span}>Add Line</span >
        </Grid>
        <Grid item xs={12} sm={12} >
          <Box sx={{ display: 'flex', justifyContent: "space-between", marginX: "2%" }}>
            <Button variant="contained" size="large" sx={{ paddingX: '7%', fontFamily: "Nunito Sans", fontStyle: 'normal' }}  >Back</Button>
            <Button variant="contained" size="large" sx={{ paddingX: '7%' }}>Next</Button>
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
}



const IconTextField = ({ iconStart, iconEnd, InputProps, value, ...props }: any) => {
  return (
    <TextField
      value={value}
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  );
};




const ButtonTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${"#A0A3BD"}`,
            color: "#A0A3BD",

          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `2px dashed ${defaultTheme.palette.secondary.main}`,
            color: "#A0A3BD",
          },
        },
        {
          props: { variant: 'dashed', size: 'large' },
          style: {
            borderWidth: 4,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary', size: 'large' },
          style: {
            fontSize: 18,
          },
        },
      ],
    },
  },
});

function DashedButton() {
  return (
    <ThemeProvider theme={ButtonTheme}>
      <Button variant="dashed" sx={{ padding: '12px' }} startIcon={<DriveFileMoveIcon />}>
        Upload  File
      </Button>
    </ThemeProvider >
  );
}