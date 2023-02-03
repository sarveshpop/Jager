/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Link} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Footer from './ui/Footer';

import ApexLogo from '../res/apexlogo.png'
import ApexHero from '../res/ApexHero.png'
import InteriorFront from '../res/interiorFront.jpg'
import SpecApex from '../res/specapex.png'
import BuyApex from '../res/buyapex.png'

const TITLE = 'Jager Apex'

const BuyButton = styled(Button)({
  position: 'absolute',
  marginLeft: '40%',
  marginTop: '2em',
  padding: '5px 20px 5px 20px',
  fontSize: '70px',
  textTransform: 'none',
  borderBottom: '0px solid transparent',
  transition: ' all 0.4s cubic-bezier(0.42, 0, 0.58, 1)',
  
  '&:hover': {
    backgroundColor: 'transparent',
    borderBottom: '2px solid white',
    borderRadius: '0px',
    transition: 'all 0.1s ease-in-out',
    transitionDelay: '0.5s ease-in-out',
    },
  '&:before': {
    boxShadow: 'none',
    
  },

});

const LearnButton = styled(Button)({

  boxShadow: 'none',
  textTransform: 'initial',
  border: '1px solid',
  backgroundColor: 'rgba(0,0,0, 0.5)',
  borderColor: 'whitesmoke',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
});

const useStyles = makeStyles(theme => ({

HeroBlock: {
height: '100vh',
},

InteriorBlock: {
height: '100vh',
},

SpecBlock: {
height: '100vh'
},

BuyBlock: {
height: '100vh',
},

ApexSpecHero: {
position: 'absolute',
zIndex: '-10',
},

ApexHero: {
position: 'absolute',
zIndex: '-10',
},

HeroTitle: {
paddingTop: '6em',
},
    
Learn: {
float: 'right',
marginRight: '35rem',
marginTop: '-10rem',
borderRadius: '50px',
padding: '10px 15px 10px 25px',
textTransform: 'initial',

},

Explore: {
float: 'left',
marginLeft: '35rem',
marginTop: '-10rem',
borderRadius: '50px',
padding: '10px 15px 10px 25px',
textTransform: 'initial',
},

SpecSheet: {  
display: 'flex',
float: 'right',
paddingRight: '20em',
marginTop: '8em',
letterSpacing: '0.08rem',
},

SpecTitle: {
paddingBottom: '30px',
},

SpecTitleSpan: {
color: 'rgb(205,205,205)',
paddingLeft: '10px',
},

SpecKey: {
fontSize: '1.25rem',
},

SpecValue: {
fontSize: '16px',
fontFamily: 'Source Sans Pro',
fontWeight: '300',
padding: '5px 0px 5px 0px',
color: 'rgb(205,205,205)',
},


}))

export default function Apex() {

    // Scroll Down... but with a Click! yeah, Sue me.
    (function() {

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }
if(btnScrollDown){
  btnScrollDown.addEventListener('click', scrollDown);
}
})();

//Render Page
    const classes = useStyles();

    const Hero = (
      <img alt='Apex Page Cover'
             className={classes.ApexHero}
             src={ApexHero} height={'100%'}
             width={'100%'}/>)

    const HeroSpec = (
      <img alt='Apex Specification Section Cover'
             src={SpecApex} height={'100%'}
             className={classes.ApexSpecHero}
             width={'100%'}/>)

    const HeroBuy = (
      <img alt='Apex Buy Section Cover'
             src={BuyApex} height={'100%'}
             className={classes.ApexBuyHero}
             width={'100%'}/>) 

    return (
        <ParallaxProvider>         
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <section className={classes.HeroBlock}>                
        {Hero}
        <Typography className={classes.HeroTitle} align='center'>
          <img alt='jager' width='30%' src={ApexLogo}/>
        </Typography>
        </section> 
             <Button className={classes.Explore}
              variant="contained" component={Link} to={'/ApexConfigurator'}>
             Build Your Own            
             <KeyboardArrowRight/>
             </Button>    
             <LearnButton className={classes.Learn} 
             variant="outlined" id="scroll_down">
             Learn More
            <KeyboardArrowDown/>
             </LearnButton>
        <section className={classes.InteriorBlock}>
          <img alt='Elite Interior Front' src={InteriorFront}  height='100%' width='100%' className={classes.InteriorHero}/> 
        </section>
        <section className={classes.SpecBlock}>
        {HeroSpec}
                <div className={classes.SpecSheet}>
        <Grid container direction='column' >
          <Grid container item className={classes.SpecTitle}>
            <Typography variant='h4'><b>Apex</b><span className={classes.SpecTitleSpan}>Specs</span></Typography>
          </Grid>
          <Grid container item direction='column' className={classes.SpecData}>
            <Typography className={classes.SpecKey}>Engine</Typography>
            <Typography className={classes.SpecValue}>V12 coupé - 6161 cc</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Acceleration</Typography>
            <Typography className={classes.SpecValue}>3.5 seconds 0 - 100 kmph</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Power and Torque</Typography>
            <Typography className={classes.SpecValue}>638 bhp & 819 Nm</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Top Speed</Typography>
            <Typography className={classes.SpecValue}>330 Kmph</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Drag Coefficient</Typography>
            <Typography className={classes.SpecValue}>0.208 Cd</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Weight</Typography>
            <Typography className={classes.SpecValue}>1,511 kg</Typography>
            <br/>                     
            <Typography className={classes.SpecKey}>DriveTrain</Typography>
            <Typography className={classes.SpecValue}>RWD</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Wheels</Typography>
            <Typography className={classes.SpecValue}>21"</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Gearbox</Typography>
            <Typography className={classes.SpecValue}>7 Speed</Typography>
            <br/>      
          </Grid>
        </Grid>
        </div>
        </section>

        <section className={classes.BuyBlock}>
        <BuyButton component={Link} to={'/ApexConfigurator'}>
             Buy Now
        </BuyButton>
        {HeroBuy}
        </section>
        <Footer>
          
        </Footer>
        </ParallaxProvider>
   );
    
}          
