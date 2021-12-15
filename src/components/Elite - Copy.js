import React from 'react';
import { Route } from 'react-router';
import Lottie from 'react-lottie';
import { Link} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { Grid, Typography } from '@material-ui/core';

import EliteHero from '../res/EliteHero.png'

const useStyles = makeStyles(theme => ({
    
Learn: {
float: 'right',
marginRight: '35rem',
marginTop: '-12rem',
borderRadius: '50px',
padding: '10px 15px 10px 25px',
textTransform: 'initial',

},

Explore: {
float: 'left',
marginLeft: '35rem',
marginTop: '-12rem',
borderRadius: '50px',
padding: '10px 15px 10px 25px',
textTransform: 'initial',
},

}))

export default function Elite() {

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

    return (
        <ParallaxProvider>         
        
        <section className={classes.HeroBlock}>                
        <img alt='Landing Page Cover'
             className={classes.EliteHero}
             src={EliteHero} height={'100%'}
             width={'100%'}/>
        </section>
              <a href="EliteEditor.js"> 
             <Button className={classes.Explore}
              variant="contained">
             Build Your Own            
             <KeyboardArrowRight/>
             </Button> 
             </a>   
             <Button className={classes.Learn} 
             variant="outlined" id="scroll_down">
             Learn More
            <KeyboardArrowDown/>
             </Button>
<script src="EliteEditor.js"/>

        </ParallaxProvider>
   );
    
}               