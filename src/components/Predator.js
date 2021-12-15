/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import {useMediaQuery} from '@material-ui/core';
import { createTheme} from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import PredatorLogo from '../res/predatorlogo.png'
import PredatorHero from '../res/PredatorHero.png'
import PredatorHeroXL from '../res/PredatorHero-xl.png'

const TITLE = 'Jager Predator'

const useStyles = makeStyles(theme => ({

HeroBlock: {
height: '100vh',
},

PredatorHero: {
position: 'absolute',
zIndex: '-10',
},

HeroTitle: {
paddingTop: '6em',
},

Soon: {
padding: '10px 15px 2.5em 25px',
textShadow: '-3px 2px 7px #000000a6',
},

}))

export default function Predator() {

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
      <img alt='Predator Page Cover'
             className={classes.PredatorHero}
             src={PredatorHeroXL} height={'100%'}
             width={'100%'}/>)

    const Hero = (
      <img alt='Predator Page Cover'
             className={classes.PredatorHero}
             src={PredatorHero} height={'100%'}
             width={'100%'}/>)

    return (
        <ParallaxProvider>         
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <section className={classes.HeroBlock}>                
        {breakpoint ? HeroXL : Hero}
        <Typography className={classes.HeroTitle} align='center'>
          <img alt='jager' width='40%' src={PredatorLogo}/>
        </Typography>    
        <Typography variant='h3' align='center' className={classes.Soon}> Coming Soon</Typography>
        </section> 

{/*              <Button className={classes.Learn} 
             variant="outlined" id="scroll_down">
             Learn More
            <KeyboardArrowDown/>
             </Button> */}
        </ParallaxProvider>
   );
    
}          