import * as React from 'react';
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

import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const defaultTheme = createTheme();
function PromotionDisclosure() {
  return (
    <>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 10.1154L25.5 0.5L21.6538 21.6538L8.25 14.3423L23.5769 2.42308L5.87308 13.0442L0.5 10.1154ZM8.19231 25.5V16.3962L13.9615 19.7308L8.19231 25.5Z" fill="#A0A3BD" />
      </svg>
    </>
  )
}
function Discord() {
  return (
    <>
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0465 10.5625C10.0465 10.7942 9.9778 11.0208 9.84903 11.2135C9.72027 11.4062 9.53724 11.5564 9.32311 11.6451C9.10898 11.7338 8.87336 11.757 8.64603 11.7118C8.41871 11.6666 8.2099 11.555 8.04601 11.3911C7.88213 11.2272 7.77051 11.0184 7.7253 10.7911C7.68008 10.5638 7.70329 10.3281 7.79198 10.114C7.88068 9.89987 8.03088 9.71685 8.2236 9.58808C8.41631 9.45932 8.64288 9.39059 8.87466 9.39059C9.18546 9.39059 9.48353 9.51405 9.7033 9.73382C9.92307 9.95359 10.0465 10.2517 10.0465 10.5625ZM15.1247 9.39059C14.8929 9.39059 14.6663 9.45932 14.4736 9.58808C14.2809 9.71685 14.1307 9.89987 14.042 10.114C13.9533 10.3281 13.9301 10.5638 13.9753 10.7911C14.0205 11.0184 14.1321 11.2272 14.296 11.3911C14.4599 11.555 14.6687 11.6666 14.896 11.7118C15.1234 11.757 15.359 11.7338 15.5731 11.6451C15.7872 11.5564 15.9703 11.4062 16.099 11.2135C16.2278 11.0208 16.2965 10.7942 16.2965 10.5625C16.2965 10.2517 16.1731 9.95359 15.9533 9.73382C15.7335 9.51405 15.4355 9.39059 15.1247 9.39059ZM23.1715 14.7129C21.5504 16.1191 19.3727 17.1933 16.8825 17.7988C16.7578 17.8294 16.63 17.8458 16.5016 17.8476C16.2122 17.8474 15.9287 17.7657 15.6835 17.6121C15.4383 17.4584 15.2413 17.2388 15.1149 16.9785L14.1872 15.123C12.7337 15.2923 11.2656 15.2923 9.81216 15.123L8.88442 16.9785C8.75804 17.2388 8.561 17.4584 8.31579 17.6121C8.07058 17.7657 7.78709 17.8474 7.4977 17.8476C7.36931 17.8458 7.24154 17.8294 7.11684 17.7988C4.62661 17.1933 2.44887 16.1191 0.827781 14.7129C0.599138 14.5162 0.432295 14.2576 0.347386 13.9682C0.262476 13.6788 0.263129 13.371 0.349265 13.082L3.66958 2.02731C3.73339 1.80372 3.84753 1.59771 4.00326 1.42505C4.15899 1.2524 4.35218 1.11768 4.56802 1.03121C5.54533 0.624001 6.55895 0.310104 7.59536 0.0937136C7.97139 0.0086218 8.36563 0.0664688 8.70137 0.255999C9.03711 0.445529 9.29033 0.753185 9.41177 1.1191L9.9977 2.85739C11.3285 2.71418 12.6708 2.71418 14.0016 2.85739L14.5875 1.1191C14.709 0.753185 14.9622 0.445529 15.2979 0.255999C15.6337 0.0664688 16.0279 0.0086218 16.404 0.0937136C17.4404 0.310104 18.454 0.624001 19.4313 1.03121C19.6471 1.11768 19.8403 1.2524 19.996 1.42505C20.1518 1.59771 20.2659 1.80372 20.3297 2.02731L23.65 13.082C23.7362 13.371 23.7368 13.6788 23.6519 13.9682C23.567 14.2576 23.4002 14.5162 23.1715 14.7129ZM22.1461 13.541L18.8356 2.47653C17.9428 2.1056 17.0176 1.81792 16.0719 1.61715L15.5739 3.082C16.2181 3.20546 16.854 3.36853 17.4782 3.57028C17.5756 3.60234 17.6658 3.65328 17.7436 3.7202C17.8214 3.78712 17.8852 3.8687 17.9315 3.96029C17.9777 4.05188 18.0055 4.15168 18.0132 4.254C18.0208 4.35631 18.0083 4.45914 17.9762 4.5566C17.9442 4.65407 17.8932 4.74427 17.8263 4.82204C17.7594 4.89982 17.6778 4.96365 17.5862 5.0099C17.4946 5.05615 17.3948 5.08391 17.2925 5.09158C17.1902 5.09926 17.0874 5.08671 16.9899 5.05465C15.4958 4.56637 13.7672 4.31246 11.9997 4.31246C10.2321 4.31246 8.50356 4.56637 7.00942 5.05465C6.93094 5.08179 6.84832 5.09501 6.76528 5.09371C6.57947 5.09376 6.39973 5.02758 6.25832 4.90706C6.11691 4.78653 6.02308 4.61955 5.99368 4.43609C5.96428 4.25262 6.00123 4.06468 6.0979 3.906C6.19457 3.74732 6.34462 3.62829 6.52114 3.57028C7.14527 3.36853 7.78124 3.20546 8.42544 3.082L7.93716 1.61715C6.98937 1.81776 6.06125 2.10208 5.16372 2.46676L1.84341 13.5312C3.27895 14.7812 5.23208 15.7285 7.48794 16.2851L8.19106 14.8691C7.62641 14.755 7.06884 14.6082 6.52114 14.4297C6.42368 14.3976 6.33348 14.3466 6.2557 14.2797C6.17792 14.2128 6.11409 14.1312 6.06784 14.0396C6.02159 13.948 5.99384 13.8482 5.98616 13.7459C5.97848 13.6436 5.99103 13.5408 6.02309 13.4433C6.05516 13.3459 6.1061 13.2557 6.17302 13.1779C6.23994 13.1001 6.32152 13.0363 6.41311 12.99C6.5047 12.9438 6.6045 12.916 6.70681 12.9083C6.80913 12.9007 6.91196 12.9132 7.00942 12.9453C8.50356 13.4336 10.2321 13.6875 11.9997 13.6875C13.7672 13.6875 15.4958 13.4336 16.9899 12.9453C17.1867 12.8805 17.4012 12.8966 17.5862 12.99C17.7712 13.0834 17.9115 13.2465 17.9762 13.4433C18.041 13.6402 18.0249 13.8547 17.9315 14.0396C17.8381 14.2246 17.675 14.3649 17.4782 14.4297C16.9305 14.6082 16.3729 14.755 15.8082 14.8691L16.5114 16.2851C18.7672 15.7285 20.7204 14.7812 22.1461 13.541Z" fill="#A0A3BD" />
      </svg>

    </>
  )
}
function Whitepapaer() {
  return (
    <>
      <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7957 6.00685L8.35728 0.356536C8.23047 0.195099 8.10366 0.11438 7.91344 0.11438H1.57281C0.875344 0.11438 0.304688 0.840849 0.304688 1.72875V21.1013C0.304688 21.9892 0.875344 22.7156 1.57281 22.7156H11.7178C12.4153 22.7156 12.9859 21.9892 12.9859 21.1013V6.57188C12.9859 6.32972 12.9225 6.16829 12.7957 6.00685ZM7.91344 2.05163L11.4642 6.57188H7.91344V2.05163ZM11.7178 21.1013H1.57281V1.72875H6.64531V6.57188C6.64531 7.45979 7.21597 8.18626 7.91344 8.18626H11.7178V21.1013Z" fill="#A0A3BD" />
      </svg>



    </>
  )
}
function ProjectWallets() {
  return (
    <>
      <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3949 14.85C14.2131 14.85 14.0388 14.9445 13.9102 15.1127C13.7817 15.2809 13.7095 15.509 13.7095 15.7469C13.7095 15.9847 13.7817 16.2129 13.9102 16.3811C14.0388 16.5493 14.2131 16.6437 14.3949 16.6437H16.8626C17.0444 16.6437 17.2188 16.5493 17.3473 16.3811C17.4759 16.2129 17.5481 15.9847 17.5481 15.7469C17.5481 15.509 17.4759 15.2809 17.3473 15.1127C17.2188 14.9445 17.0444 14.85 16.8626 14.85H14.3949ZM0 3.37V21.8456C0 23.035 0.361096 24.1756 1.00385 25.0166C1.64661 25.8575 2.51837 26.33 3.42737 26.33H16.8626C17.7716 26.33 18.6434 25.8575 19.2861 25.0166C19.9289 24.1756 20.29 23.035 20.29 21.8456V9.28937C20.29 8.25566 20.017 7.25369 19.5174 6.45291C19.0178 5.65213 18.3222 5.10169 17.5481 4.89469V3.54937C17.5481 2.74063 17.3026 1.96501 16.8655 1.39314C16.4284 0.821273 15.8356 0.5 15.2175 0.5H2.33061C1.73619 0.499934 1.16422 0.797041 0.731699 1.33054C0.299179 1.86404 0.0388043 2.59361 0.00383863 3.37H0ZM16.1772 3.54937V4.805H2.33061C2.07609 4.805 1.832 4.67271 1.65202 4.43724C1.47205 4.20176 1.37095 3.88239 1.37095 3.54937C1.37095 3.21636 1.47205 2.89699 1.65202 2.66151C1.832 2.42604 2.07609 2.29375 2.33061 2.29375H15.2175C15.7478 2.29375 16.1772 2.85627 16.1772 3.54937ZM1.37095 6.59875H16.8626C17.408 6.59875 17.9311 6.88223 18.3167 7.38682C18.7024 7.89141 18.9191 8.57578 18.9191 9.28937V21.8456C18.9191 22.5592 18.7024 23.2436 18.3167 23.7482C17.9311 24.2528 17.408 24.5362 16.8626 24.5362H3.42737C2.88197 24.5362 2.35891 24.2528 1.97326 23.7482C1.5876 23.2436 1.37095 22.5592 1.37095 21.8456V6.59875Z" fill="#A0A3BD" />
      </svg>


    </>
  )
}
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

              <S1></S1>
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  )
}





function S1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>

          <h3>Project Name</h3>
          <h4>Project Name</h4>
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
          <h3>Project Details</h3>
          <h4>Roadmap Timeline</h4>
        </Grid>
        <Grid item xs={12} sm={9}>
          <FormControl fullWidth>
            <BasicTimePicker></BasicTimePicker>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} >
          <FormControl fullWidth >
            <DashedButton></DashedButton>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} >
          <FormControl fullWidth >
            <h4>Website URL</h4>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<LanguageIcon sx={{ color: "#A0A3BD", fontSize: 20 }} />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} >
          <FormControl fullWidth >
            <h4>Twitter</h4>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<TwitterIcon sx={{ color: "#A0A3BD", fontSize: 20 }} />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} >
          <FormControl fullWidth >
            <h4>Discord</h4>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<Discord />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} >
          <FormControl fullWidth >
            <h4>Promotion Disclosure</h4>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<PromotionDisclosure />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} className={pageStyles.m35}>
          <h4>Whitepapaer/ Litepaper</h4>
        </Grid>
        <Grid item xs={12} sm={9} >
          <FormControl fullWidth >

            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<Whitepapaer />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} >
          <br />
          <FormControl fullWidth  >
            <DashedButton ></DashedButton>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} className={pageStyles.m35}  >
          <h4 >Other documents</h4>
        </Grid>
        <Grid item xs={12} sm={9} >
          <FormControl fullWidth >

            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<Whitepapaer />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} >
          <br />
          <FormControl fullWidth >
            <DashedButton></DashedButton>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} >
          <FormControl fullWidth >
            <h4>Project Wallets</h4>
            <IconTextField
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                marginTop: '21px'
              }}
              iconEnd={<ProjectWallets />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} columns={{ xs: 4, md: 12 }}  >
          <PersonIcon sx={{ color: "#A0A3BD", fontSize: 20 }} />
          <span className={pageStyles.span}>Add Line</span >
        </Grid>
        <Grid item xs={12} sm={12} >
          <Button variant="contained" size="large" sx={{ paddingX: '7%' }}>Next</Button>
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
function BasicTimePicker() {
  const [value, setValue] = React.useState<Date | null>(null);
  const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color: "#A0A3BD"
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            background: 'rgba(255, 255, 255, 0.1)',
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#959292'
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <TimePicker

          label="Roadmap Timeline"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}




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