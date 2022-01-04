/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme} from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { Grid, Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link} from 'react-router-dom';
import { Helmet } from 'react-helmet' 

import Footer from './ui/Footer';

import HomeHero from '../res/HomeHero.png'
import HomeHeroXL from '../res/HomeHero-xl.png'
import LandingLogo from '../res/LandingLogo.png'
import EliteModel from '../res/models/EliteVar1.png'
import PredatorModel from '../res/models/PredatorVar1.png'
import TitanModel from '../res/models/TitanVar3.png'
import ApexModel from '../res/models/ApexVar1.png'

const TITLE = 'Jager Home'


const LearnButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'initial',
  border: '1px solid',
  borderColor: 'whitesmoke',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  }
});

const useStyles = makeStyles(theme => ({

HeroBlock: {
height: '100vh',
},
    
LandingLogo: {
position: 'absolute',
marginTop: '-56rem',
marginLeft: '29%'

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

ModelsContainer: {
flexDirection: 'row',
justifyContent: 'space-evenly',
padding: '10px',
width: 'fit-content',
paddingBottom: '50px',


},

ModelsItem: {
width: '34rem',
height: '20rem',
},

ModelsLearn: {
padding: '5px 5px 5px 15px',
textTransform: 'initial',
fontSize: '16px',
margin: '5px',

},

ModelsBuild: {
textTransform: 'initial',
fontSize: '16px',
margin: '5px',
},

ModelsHeader: {

padding: '20px',
paddingBottom: '30px',
backgroundColor: 'rgb(30,30,30)'
},

ModelTitle: {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '22px',
  paddingTop: '20px',
},

ModelSubtitle: {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '16px',
  padding: '40px 0px 25px 0px'
},

ModelCaption: {
  fontSize: '12px',
  textAlign: 'center',
},

PriceCaption: {
  fontSize: '18px',
  textAlign: 'center',
},

ModelPrice: {
  fontFamily: 'Work Sans',
  fontSize: '24px',
  textAlign: 'center',
  paddingBottom: '10px',
},  

}))

export default function Home() {

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



    // Scroll to Car Models List
      function ScrollTo(props) {
      const { children} = props;
      const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
      });


      const handleScroll = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#models');

        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };

      return (
        <div in={trigger}>
          <div onClick={handleScroll} role="presentation" className={classes.root}>
            {children}
          </div>
        </div>
      );
    }


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
      <img alt='Landing Page Cover'
             className={classes.LandingHero}
             src={HomeHeroXL} height={'100%'}
             width={'100%'}/>)

    const Hero = (
      <img alt='Landing Page Cover'
             className={classes.LandingHero}
             src={HomeHero} height={'100%'}
             width={'100%'}/>)

    return (
              
        <ParallaxProvider>         
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <section className={classes.HeroBlock}>                
        {breakpoint ? HeroXL : Hero}
        </section>                        
        <img alt="landing logo"
             justifyContent="center" alignItems='center'
             className={classes.LandingLogo} 
             src={LandingLogo}/>
         
        <ScrollTo>
             <Button className={classes.Explore}
              variant="contained">
             Explore Now
            <KeyboardArrowDown/>
             </Button>
        </ScrollTo>     
             <LearnButton className={classes.Learn} 
             variant="outlined" id="scroll_down">
             Learn More
            <KeyboardArrowRight/>
             </LearnButton>

             <Typography variant='h4' align='center' className={classes.ModelsHeader}>Models</Typography>

             <section className={classes.models} id="models" href="#models">
                <Grid container className={classes.ModelsContainer} >
                    <Grid container item xs={2} 
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                      <Grid item direction="column">                     
                        <Typography className={classes.ModelTitle}>
                            Titan
                        </Typography>
                        <Typography className={classes.ModelSubtitle}>
                            MASTER OF ALL SUVs
                        </Typography>
                        <Typography className={classes.ModelCaption}>
                          Lorem Ipsum, Pee Pee Poo Poo, Dolor Sit amet, bing bong ching chong
                          Wubba Lubba Dub Dub, Chitti Chitti bang bang
                        </Typography>
                      </Grid>                        
                        <img alt='Jager Titan'
                         className={classes.ModelsItem} 
                         src={TitanModel}>
                        </img>
                        <Grid container item direction="column">  
                        <Typography className={classes.PriceCaption}>
                            Starting From
                        </Typography>
                        <Typography className={classes.ModelPrice}>
                            $96,690
                        </Typography>
                      </Grid>
                        <Grid container item direction='column'>
                            <Button className={classes.ModelsBuild} 
                            variant="contained" component={Link} to={'/TitanConfigurator'}>
                            Build Your Own
                            </Button>
                            <Button className={classes.ModelsLearn} variant="outlined" component={Link} to={'/Titan'}>
                            Learn More
                            <KeyboardArrowRight/>
                            </Button>
                        </Grid>   
                      </Grid>
                    <Grid container item xs={2} 
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                      <Grid item direction="column"> 
                        <Typography className={classes.ModelTitle}>
                            Elite
                        </Typography>
                        <Typography className={classes.ModelSubtitle}>
                            NOT ONE TO COMPROMISE 
                        </Typography>
                        <Typography className={classes.ModelCaption}>
                          Lorem Ipsum, Pee Pee Poo Poo, Dolor Sit amet, bing bong ching chong
                          Wubba Lubba Dub Dub, Chitti Chitti bang bang
                        </Typography>
                      </Grid>  
                        <img alt='Jager Elite'
                         className={classes.ModelsItem} 
                         src={EliteModel}>
                        </img>
                        <Grid container item direction="column">  
                        <Typography className={classes.PriceCaption}>
                            Starting From
                        </Typography>
                        <Typography className={classes.ModelPrice}>
                            $86,690
                        </Typography>
                      </Grid>
                        <Grid container item direction='column'>
                            <Button className={classes.ModelsBuild} 
                            variant="contained" component={Link} to={'/EliteConfigurator'}>
                            Build Your Own
                            </Button>
                            <Button className={classes.ModelsLearn} variant="outlined" component={Link} to={'/Elite'}>
                            Learn More
                            <KeyboardArrowRight/>
                            </Button>
                        </Grid>                        
                    </Grid>

                    <Grid container item xs={2} 
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                      <Grid item direction="column"> 
                        <Typography className={classes.ModelTitle}>
                            Apex
                        </Typography>
                        <Typography className={classes.ModelSubtitle}>
                            DOMINATE THE ROADS
                        </Typography>
                        <Typography className={classes.ModelCaption}>
                          Lorem Ipsum, Pee Pee Poo Poo, Dolor Sit amet, bing bong ching chong
                          Wubba Lubba Dub Dub, Chitti Chitti bang bang
                        </Typography>   
                      </Grid>                   
                        <img alt='Jager Apex'
                         className={classes.ModelsItem} 
                         src={ApexModel}>
                        </img>
                        <Grid container item direction="column">  
                        <Typography className={classes.PriceCaption}>
                            Starting From
                        </Typography>
                        <Typography className={classes.ModelPrice}>
                            $101,690
                        </Typography>
                      </Grid>     
                        <Grid container item direction='column'>
                            <Button className={classes.ModelsBuild} 
                            variant="contained" component={Link} to={'/ApexConfigurator'}>
                            Build Your Own
                            </Button>
                            <Button className={classes.ModelsLearn} variant="outlined" component={Link} to={'/Apex'}>
                            Learn More
                            <KeyboardArrowRight/>
                            </Button>
                        </Grid>                                             
                    </Grid>

                    <Grid container item xs={2}   
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                      <Grid item direction="column">                        
                        <Typography className={classes.ModelTitle}>
                                Predator
                        </Typography>
                        <Typography className={classes.ModelSubtitle}>
                            UNSTOPPABLE IN EVERY SENSE
                        </Typography>
                        <Typography className={classes.ModelCaption}>
                          Lorem Ipsum, Pee Pee Poo Poo, Dolor Sit amet, bing bong ching chong
                          Wubba Lubba Dub Dub, Chitti Chitti bang bang
                        </Typography>
                      </Grid>    
                        <img alt='Jager Predator'
                         className={classes.ModelsItem} 
                         src={PredatorModel}>
                        </img>
                        <Grid container item direction="column">  
                        <Typography className={classes.PriceCaption}>
 
                        </Typography>
                        <Typography className={classes.ModelPrice}>
 
                        </Typography>
                      </Grid> 
                        <Grid container item direction='column'>
                            <Button disabled className={classes.ModelsBuild} 
                            variant="contained">
                            Build Your Own
                            </Button>
                            <Button className={classes.ModelsLearn} variant="outlined">
                            Learn More
                            <KeyboardArrowRight/>
                            </Button>
                        </Grid>                          
                    </Grid>
                </Grid>
                <br/>
             </section>
             <section >
             <br/>
             </section>  
             <br/>
             <Footer className={classes.HomeFoot}>

             </Footer>
        </ParallaxProvider>
    );
    
}