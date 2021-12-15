/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Link} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax'
import {useMediaQuery} from '@material-ui/core';
import { createTheme} from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Footer from './ui/Footer';

import TitanLogo from '../res/titanlogo.png'
import TitanHero from '../res/TitanHero.png'
import TitanHeroXL from '../res/TitanHero-xl.png'
import InteriorFront from '../res/interiorFront.jpg'
import InteriorBack from '../res/interiorBack.jpg'
import SpecTitanXL from '../res/spectitan-xl.png'
import SpecTitan from '../res/spectitan.png'
import BuyTitanXL from '../res/buytitan-xl.png'
import BuyTitan from '../res/buytitan.png'

const TITLE = 'Jager Titan'

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

TitanSpecHero: {
position: 'absolute',
zIndex: '-10',
},

TitanHero: {
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
marginTop: '5em',
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

export default function Titan() {

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

      const theme = React.useMemo(() =>
      createTheme({
        typography: {
          fontSize: 16,
        },
      }),
      )

      const breakpoint = useMediaQuery(theme.breakpoints.down("xl"));

//Render Page
    const classes = useStyles();

        const HeroXL = (
      <img alt='Titan Page Cover'
             className={classes.TitanHero}
             src={TitanHeroXL} height={'100%'}
             width={'100%'}/>)

    const Hero = (
      <img alt='Titan Page Cover'
             className={classes.TitanHero}
             src={TitanHero} height={'100%'}
             width={'100%'}/>)

    const HeroSpecXL = (
      <img alt='Titan Specification Section Cover'
             src={SpecTitanXL} height={'100%'}
             className={classes.TitanSpecHero}
             width={'100%'}/>)

    const HeroSpec = (
      <img alt='Titan Specification Section Cover'
             className={classes.TitanSpecHero}
             src={SpecTitan} height={'100%'}
             width={'100%'}/>)
             
    const HeroBuyXL = (
      <img alt='Titan Buy Section Cover'
             src={BuyTitanXL} height={'100%'}
             className={classes.TitanBuyHero}
             width={'100%'}/>)

    const HeroBuy = (
      <img alt='Titan Buy Section Cover'
             src={BuyTitan} height={'100%'}
             className={classes.TitanBuyHero}
             width={'100%'}/>)          

    return (
        <ParallaxProvider>         
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <section className={classes.HeroBlock}>                
          {breakpoint ? HeroXL : Hero}
        <Typography className={classes.HeroTitle} align='center'>
          <img alt='jager' width='30%' src={TitanLogo}/>
        </Typography>
        </section> 
             <Button className={classes.Explore}
              variant="contained" component={Link} to={'/TitanConfigurator'}>
             Build Your Own            
             <KeyboardArrowRight/>
             </Button>    
             <LearnButton className={classes.Learn} 
             variant="outlined" id="scroll_down">
             Learn More
            <KeyboardArrowDown/>
             </LearnButton>
        <section className={classes.InteriorBlock}>
          <img alt='Elite Interior Front' src={InteriorFront} className={classes.InteriorHero}/> 
        </section>
        {/* <Button id="scroll_down1" className={classes.NextSection} >
          <KeyboardArrowDown className={classes.NextSection}/>
        </Button> */}
        <section className={classes.InteriorBlock}>
          <img alt='Elite 2' src={InteriorBack} height='100%' width='100%' className={classes.InteriorHero}/> 
        </section>
        <section className={classes.SpecBlock}>
        {breakpoint ? HeroSpecXL : HeroSpec}
                <div className={classes.SpecSheet}>
        <Grid container direction='column' >
          <Grid container item className={classes.SpecTitle}>
            <Typography variant='h4'><b>Titan</b><span className={classes.SpecTitleSpan}>Specs</span></Typography>
          </Grid>
          <Grid container item direction='column' className={classes.SpecData}>
            <Typography className={classes.SpecKey}>Engine</Typography>
            <Typography className={classes.SpecValue}>V8 bi-turbo - 3996 cc</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Acceleration</Typography>
            <Typography className={classes.SpecValue}>4 seconds 0 - 100 kmph</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Power and Torque</Typography>
            <Typography className={classes.SpecValue}>641 bhp & 850 Nm</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Top Speed</Typography>
            <Typography className={classes.SpecValue}>305 Kmph</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Drag Coefficient</Typography>
            <Typography className={classes.SpecValue}>0.24 Cd</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Weight</Typography>
            <Typography className={classes.SpecValue}>2,200 kg</Typography>
            <br/>                     
            <Typography className={classes.SpecKey}>DriveTrain</Typography>
            <Typography className={classes.SpecValue}>4WD</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Wheels</Typography>
            <Typography className={classes.SpecValue}>22"</Typography>
            <br/>
            <Typography className={classes.SpecKey}>Boot Space</Typography>
            <Typography className={classes.SpecValue}>616 Litres</Typography>
            <br/>      
          </Grid>
        </Grid>
        </div>
        </section>

        <section className={classes.BuyBlock} >
        <BuyButton component={Link} to={'/TitanConfigurator'}>
             Buy Now
        </BuyButton>
        {breakpoint ? HeroBuyXL : HeroBuy}
        </section>
        <Footer>
          
        </Footer>
        </ParallaxProvider>
   );
    
}          