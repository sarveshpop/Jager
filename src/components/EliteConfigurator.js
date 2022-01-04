/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles.css";
import React, { useRef} from 'react'
import { Typography, Button, Box, Grid,Stepper, Step, StepLabel, StepContent } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { Canvas} from '@react-three/fiber'
import { Suspense } from "react";
import { useProgress, OrbitControls, Stage } from "@react-three/drei";
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useLoader } from '@react-three/fiber'
import MenuItem from '@mui/material/MenuItem';
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { Helmet } from "react-helmet";

import CloseIcon from '@material-ui/icons/Close'
import EliteLogo from '../res/elitelogo.png';
import ConfigBg from '../res/configBg.png'

import RedPaint from '../res/colors/Red.png'
import BluePaint from '../res/colors/Blue.png'
import OrangePaint from '../res/colors/Orange.png'
import GreyPaint from '../res/colors/Grey.png'
import WhitePaint from '../res/colors/White.png'
import TaupePaint from '../res/colors/Taupe.png'

const TITLE = 'Jager Elite Builder'

const TextInput = styled(TextField)({
  color: 'white',
  border: 'whitesmoke',
  padding: '2px',
  margin: '10px',
  '&:hover': {
    color: 'whitesmoke',
    boxShadow: 'none',
  },
  '&:active': {
    color: 'white',
    boxShadow: 'none',
    border: 'whitesmoke',
  }
});

const useStyles = makeStyles(theme => ({

  Viewport: {
    height: '100vh !important',
    width: '100vw !important',
    zIndex: '1',
  },

  backdrop: {
    position: 'absolute',
    filter: 'blur(250px)',
    transform: 'rotate(360deg)',
    transitionDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },

  LogoContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '-52em',
  },

  EliteLogo: {
    width: '20em'
  },

  SpecPreview: {
    display: 'flex',
    flexWrap: 'nowrap',
    textAlign: 'center',
    marginTop: '-6em',
  },

  Spec: {
    fontFamily: 'Poppins',
    fontSize: '20px'
  },

  SpecSub: {
    color: '#b2b2b2',
    fontFamily: 'Source Sans Pro',
    fontSize: '18px',
    fontWeight: '400',
  },

  StepperBox: {
    display: 'flex',
    position: 'relative !important',
    alignItems: 'flex-end',
    float: 'right',
    marginTop: '-35rem',
    zIndex: '100',
    zoom: '140%',
  },


  StepperButtons: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },

    StepperFinalButtons: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'flex-end',
    marginTop: '-22em',
    marginBottom: '30em',
    padding: '5px',
    right: '15px',
    zIndex: '100'
  },

  ContinueButton: {
    marginRight: '15px',
  },

  ResetButton: {
    marginTop: '15px',
    border: '1px solid whitesmoke',
    marginRight: '15px',
  },

  Stepper: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },

  PaintSelect: {
    alignItems: 'center',
  },

  FormControlLabel: {
    fontSize: '16px !important',
  },

  center: {
    display: 'flex',
  },

    PaymentModal: {
    display: 'flex',
    width: '600px',
    height: '950px',
    left: '40em',
    zIndex: '100'
  },

  PaymentBox: {
    display: 'flex',
    backgroundColor: 'rgb(25,25,25)',
    border: '1px solid grey',
    borderRadius: '10px',
    padding: '30px',
    zIndex: '200'
  },

  TitleText: {
    marginLeft: '5em'
  },

  PaymentForm: {
    marginTop: '2em'
  },

  Final: {
    paddingTop: '2em',
  },

    FinalText: {    
    fontFamily: 'Source Sans Pro',
    fontSize: '18px',
  },

  FinalPrice: {
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: '300',
    padding: '10px'
  },
  
  Terms: {
    fontFamily: 'Display Source Sans',
    fontSize: '12px',
    fontWeight: '300',
  },

  OrderButton: {
    marginTop: '30px',
  },

}))




const EliteModelWhite = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL+'/models/EliteWhite.gltf');
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

const EliteModelBlue = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL+'/models/EliteBlue.gltf');
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

const EliteModelRed = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL+'/models/EliteRed.gltf');
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

const EliteModelGrey = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL+'/models/EliteGrey.gltf');
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

const EliteModelOrange = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL+'/models/EliteOrange.gltf');
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

const EliteModelTaupe = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL+'/models/EliteTaupe.gltf');
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

function Loader() {
  const { progress } = useProgress()
  return <div center>{progress} % loaded</div>
}


export default function Viewer() {
  const ref = useRef()    
  
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    var [showWhiteCar, setWhiteShowCar] = React.useState(true); 
    var [showBlueCar, setBlueShowCar] = React.useState(false);
    var [showRedCar, setRedShowCar] = React.useState(false);
    var [showGreyCar, setGreyShowCar] = React.useState(false);
    var [showOrangeCar, setOrangeShowCar] = React.useState(false);
    var [showTaupeCar, setTaupeShowCar] = React.useState(false);

    const SelectWhiteClick = () =>  setWhiteShowCar(true)
    const SelectBlueClick = () => setBlueShowCar(true)
    const SelectRedClick = () => setRedShowCar(true)
    const SelectGreyClick = () => setGreyShowCar(true)
    const SelectOrangeClick = () => setOrangeShowCar(true)
    const SelectTaupeClick = () => setTaupeShowCar(true)

  function WhiteSwitcher() {
      showWhiteCar=(true)
      setBlueShowCar(false)
      showBlueCar=(false)
      setRedShowCar(false)
      showRedCar=(false)
      setGreyShowCar(false)
      showGreyCar=(false)
      setOrangeShowCar(false)
      showOrangeCar=(false)
      setTaupeShowCar(false)
      showTaupeCar=(false)
      }

    function BlueSwitcher() {
      showBlueCar=(true)
      setWhiteShowCar(false)
      showWhiteCar=(false)
      setRedShowCar(false)
      showRedCar=(false)
      setGreyShowCar(false)
      showGreyCar=(false)
      setOrangeShowCar(false)
      showOrangeCar=(false)
      setTaupeShowCar(false)
      showTaupeCar=(false)
    }

     function RedSwitcher() {
      showRedCar=(true)
      setWhiteShowCar(false)
      showWhiteCar=(false)
      setBlueShowCar(false)
      showBlueCar=(false)
      setGreyShowCar(false)
      showGreyCar=(false)
      setOrangeShowCar(false)
      showOrangeCar=(false)
      setTaupeShowCar(false)
      showTaupeCar=(false)
    }

      function GreySwitcher() {
      showGreyCar=(true)
      setWhiteShowCar(false)
      showWhiteCar=(false)
      setRedShowCar(false)
      showRedCar=(false)
      setBlueShowCar(false)
      showBlueCar=(false)
      setOrangeShowCar(false)
      showOrangeCar=(false)
      setTaupeShowCar(false)
      showTaupeCar=(false)
    }

      function OrangeSwitcher() {
      showOrangeCar=(true)
      setWhiteShowCar(false)
      showWhiteCar=(false)
      setRedShowCar(false)
      showRedCar=(false)
      setGreyShowCar(false)
      showGreyCar=(false)
      setBlueShowCar(false)
      showBlueCar=(false)
      setTaupeShowCar(false)
      showTaupeCar=(false)
    }  
    
      function TaupeSwitcher() {
      showTaupeCar=(true)
      setWhiteShowCar(false)
      showWhiteCar=(false)
      setRedShowCar(false)
      showRedCar=(false)
      setGreyShowCar(false)
      showGreyCar=(false)
      setOrangeShowCar(false)
      showOrangeCar=(false)
      setBlueShowCar(false)
      showBlueCar=(false)
    }    


  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const classes = useStyles();

  const months = [
    {
      value: '1',
      label: 'January',
    },
    {
      value: '2',
      label: 'February',
    },
    {
      value: '3',
      label: 'March',
    },
    {
      value: '4',
      label: 'April',
    },
        {
      value: '5',
      label: 'May',
    },
    {
      value: '6',
      label: 'June',
    },
    {
      value: '7',
      label: 'July',
    },
    {
      value: '8',
      label: 'August',
    },
        {
      value: '9',
      label: 'September',
    },
    {
      value: '10',
      label: 'October',
    },
    {
      value: '11',
      label: 'November',
    },
    {
      value: '12',
      label: 'December',
    },
  ];

  const years = [
    {
      value: '21',
      label: '2021',
    },
    {
      value: '22',
      label: '2022',
    },
    {
      value: '23',
      label: '2023',
    },
    {
      value: '24',
      label: '2024',
    },
    {
      value: '25',
      label: '2025',
    },
    {
      value: '26',
      label: '2026',
    },
    {
      value: '27',
      label: '2027',
    },
    {
      value: '28',
      label: '2028',
    },
    {
      value: '29',
      label: '2029',
    },
    {
      value: '30',
      label: '2030',
    },
  ];

    const [month, setMonth] = React.useState('1');
    const [year, setYear] = React.useState('21');

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

    const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const stages = [
  {
    label: 'Engine',
    options: <Grid item container direction="column">
                <form>
               <input type="radio" value="84490" name="select" id="option-1" className={classes.RangeRadio} defaultChecked></input>
               <input type="radio" value="123490" name="select" id="option-2" className={classes.PerformanceRadio}></input>
                  <label for="option-1" class="option option-1">
                    <span>Long Range</span>
                  </label>
                  <label for="option-2" class="option option-2">
                    <span>Performance</span>
                  </label>
                  </form>
            </Grid>,
  },

  {
    label: 'Paint',
        options: 

        <Grid className={classes.PaintSelect} >
        <Typography>{}</Typography>
        <form>
          <Grid container item direction="row">            
                              
               <input type="radio" value="1" name="colorSelect" id="paintOption1" onClick={() => { SelectWhiteClick(); WhiteSwitcher() }} defaultChecked></input>
                  <label for="paintOption1" class="paintOption paintOption1">
                    <img class="paint" alt="White Paint" src={WhitePaint}></img>
                  </label>
               <input type="radio" value="2" name="colorSelect" id="paintOption2" onClick={() => { SelectBlueClick(); BlueSwitcher()}}></input>
                  <label for="paintOption2" class="paintOption paintOption2">
                    <img class="paint" alt="Blue Paint" src={BluePaint}></img>
                  </label>
               <input type="radio" value="3" name="colorSelect" id="paintOption3"  onClick={() => { SelectRedClick(); RedSwitcher()}}></input>
                  <label for="paintOption3" class="paintOption paintOption3">
                    <img class="paint" alt="Red Paint" src={RedPaint}></img>
                  </label>
          </Grid>
          <Grid container item direction="row">
               <input type="radio" value="4" name="colorSelect" id="paintOption4" onClick={() => { SelectGreyClick(); GreySwitcher()}}></input>
                  <label for="paintOption4" class="paintOption paintOption4">
                    <img class="paint" alt="Grey Paint" src={GreyPaint}></img>
                  </label>
               <input type="radio" value="5" name="colorSelect" id="paintOption5" onClick={() => { SelectOrangeClick(); OrangeSwitcher()}}></input>
                  <label for="paintOption5" class="paintOption paintOption5">
                    <img class="paint" alt="Orange Paint" src={OrangePaint}></img>
                  </label>
               <input type="radio" value="6" name="colorSelect" id="paintOption6" onClick={() => { SelectTaupeClick(); TaupeSwitcher()}}></input> 
                  <label for="paintOption6" class="paintOption paintOption6">
                    <img class="paint" alt="Taupe Paint" src={TaupePaint}></img>
                  </label>    
       </Grid>
       </form>
        </Grid>
,
  },

  {
    label: 'Accessories',
    options: 
    <Grid container item  >
        <FormGroup>
            <FormControlLabel className={classes.FormControlLabel} control={<Checkbox color="default" />} label="Heads-up Display" />
            <FormControlLabel className={classes.FormControlLabel} control={<Checkbox color="default" />} label="Jager Emergency Kit" />
            <FormControlLabel className={classes.FormControlLabel} control={<Checkbox color="default" />} label="Dolby Sub-Woofers" />
            <FormControlLabel className={classes.FormControlLabel} control={<Checkbox color="default" />} label="Heat Reflective Windscreen" />
        </FormGroup>
    </Grid>
  },
];

  return (  
    <div>
    <Helmet>
          <title>{ TITLE }</title>
    </Helmet>
    <img alt='backdrop' src={ConfigBg} className={classes.backdrop}/>
    <Canvas className={classes.Viewport} id="c" shadows={true} dpr={[1, 2]} camera={{ fov: 40 }}>
        <Suspense fallback={Loader}>
        <Stage controls={ref} preset="rembrandt" intensity={0.5} environment="sunset" >
        { showWhiteCar ? <EliteModelWhite/> : null }
        { showBlueCar ? <EliteModelBlue/> : null }
        { showRedCar ? <EliteModelRed/> : null }
        { showGreyCar ? <EliteModelGrey/> : null }
        { showOrangeCar ? <EliteModelOrange/> : null }
        { showTaupeCar ? <EliteModelTaupe/> : null }       
        </Stage>
        </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>


      <Box className={classes.StepperBox}>
        <Stepper className={classes.Stepper} activeStep={activeStep} orientation="vertical">
          {stages.map((stage, index) => (
            <Step key={stage.label}>
              <StepLabel className={classes.StepLabel}>
                {stage.label}
              </StepLabel>
              <StepContent>
                <Grid container item direction='column'>
                {stage.options}
                </Grid>
                <Box sx={{ mb: 2 }}>
                  <div className={classes.StepperButtons}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      className={classes.ContinueButton}
                      sx={{ mt: 1, mr: 1 }}>
                      {index === stages.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1, }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>      
        </Box>
          <div className={classes.LogoContainer}>
           <img alt='Elite Logo' className={classes.EliteLogo} src={EliteLogo}/>
          </div>

              <Grid className={classes.SpecPreview} container direction='row' justifyContent='center'>
                <Grid container direction='column' item xs={2} justifyContent='center'>
                  <Typography className={classes.Spec}>
                    5198 cc
                  </Typography>
                  <Typography className={classes.SpecSub}>
                    Engine Capacity
                  </Typography>
                </Grid>
                <Grid container direction='column' item xs={2} justifyContent='center'>
                  <Typography className={classes.Spec}>
                    301 Kmph
                  </Typography>
                  <Typography className={classes.SpecSub}>
                    Top Speed
                  </Typography>
                </Grid>
                <Grid container direction='column' item xs={2} justifyContent='center'>
                  <Typography className={classes.Spec}>
                    4.1 sec
                  </Typography>
                  <Typography className={classes.SpecSub}>
                    0 - 100 kmph
                  </Typography>
                </Grid>
              </Grid>

        {activeStep === stages.length && (
      <Grid container>
          <Grid item container class={classes.StepperFinalButtons} direction='column'>
        <Button onClick={handleOpen}  variant="contained" type='submit' className={classes.ContinueButton}> Continue to Payment</Button>
        <Button href={'/EliteConfigurator'} className={classes.ResetButton} sx={{ mt: 1, mr: 1, }}> Reset Configuration </Button> 
          </Grid>
      <Grid item container className={classes.center}>
      <Modal
        className={classes.PaymentModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box component='form' className={classes.PaymentBox} >
          <Grid container sx={{ m:2 }}>         
              <CloseIcon sx={{width: '30px', height: '30px' }} cursor='pointer' onClick={handleClose}></CloseIcon>
              <Typography align='center' className={classes.TitleText} >Continue with Payment</Typography> 
              <Grid item container className={classes.PaymentForm}>
              <form>
                <Typography>
                  Enter your details
                </Typography>
                <br/>
                <Grid item container>
                  <Grid item container>
                    <TextInput required label="First Name" variant="standard" />
                    <TextInput required label="Last Name" variant="standard" />

              </Grid>
              <Grid item container>
                    <TextInput required  label="Email Address" variant="standard" />
                    <TextInput required label="Contact Number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="standard" />

              </Grid>
                <Grid item container>
                    <TextInput required multiline title='Address' label="Address" variant="standard" fullWidth />
                </Grid>
                </Grid>
                <br/>
                <br/>
                <Typography> Card</Typography>
                <Grid item container>
                  <Grid item container>
                    <TextInput required label="Name on Card" variant="standard" />
                    <TextInput required label="Billing Zip Code" variant="standard" />
              </Grid>
              <Grid item container>
                    <TextInput required label="Card Number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="standard" />
                    <TextInput required label="CVV" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="standard" sx={{width: '6ch'}}/>
              </Grid>
              <br/>
              <br/>
              <Grid item container>
                    <TextInput required label="Expiration Month" select value={month} onChange={handleChangeMonth} variant="standard" sx={{width: '15ch'}}>
                    {months.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                  ))}
              </TextInput>
                    <TextInput required label="Expiration Year" select value={year} onChange={handleChangeYear} variant="standard" sx={{width: '10ch'}}>
                    {years.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                  ))}
              </TextInput>
              </Grid>          

              <Grid item container direction='column' className={classes.Final}>
                  <Typography className={classes.FinalText}>Purchase Price: <span className={classes.FinalPrice}> $86,690</span></Typography>
                  <Typography className={classes.FinalText}>Non-refundable Order Fee: <span className={classes.FinalPrice}> $250</span></Typography>
              </Grid>
              <Grid item container direction='column' className={classes.Final}>
                  <Typography className={classes.Terms}>By placing this order, I agree to the <a href="#" class="doc">Jager Order Agreement</a>, 
                    <a href="#" class="doc"> Terms of Use</a>, and <a href="#" class="doc">Privacy Notice</a>.
                  And am willing to sell my soul to Jeffrey Bezoz for a 1 year Prime subscription</Typography>
                  <Button onClick={handleOpen}  variant="contained" type='submit' className={classes.OrderButton} disabled>Place Order</Button>
              </Grid>
            </Grid>
            </form>
            </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      </Grid>
      </Grid>
        )}
      </div>      
  )
}
