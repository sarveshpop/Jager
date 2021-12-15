import React, { useEffect, useState} from 'react';
import { AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import  MenuItem  from '@material-ui/core/MenuItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';


import logo from '../../res/img/logo.jpg';
import { classes } from 'istanbul-lib-coverage';


function HideOnScroll(props) {
  const {children} = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const useStyles = makeStyles((theme) => ({
  logo: {
    width: "7em",
  },
  menu: {
    backgroundColor: theme.palette.common,
  }
}));

const classes = useStyles();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 100,
      width: '100%',
      backgroundColor: '#daa520',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(16),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function ScrollTop(props) {
  


  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });


  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function Header(props) {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTraget)
    setOpen(true) 
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

    useEffect(() => {
if (window.location.pathname === "/" && value !== 0) {
  setValue(0);
} else if (window.location.pathname === "/GT" && value !== 1) {
  setValue(1);
} else if (window.location.pathname === "/Predator" && value !== 2) {
  setValue(2);
} else if (window.location.pathname === "/Titan" && value !== 3) {
  setValue(3);
} else if (window.location.pathname === "/Apex" && value !== 4) {
  setValue(4);
}
    }, [value]);

 const tabs = (
    <React.Fragment>
    <Grid justify="center" alignItems="center" direction="row">
              <StyledTabs value={value} onChange={handleChange} >

                <StyledTab
                 value={1}
                 aria-owns={anchorEl ? "simple-menu" : undefined}
                 aria-haspopup={anchorEl ? "true" : undefined }
                 className={classes.tab}
                 component={Link} 
                 onMouseOver={event => handleClick(event)}
                 to="/GT"
                 label="GT"/>

                <StyledTab 
                value={2}  
                className={classes.tab}
                component={Link} 
                to="/Predator"
                label="Predator" 
                />

                <StyledTab 
                value={3}  
                className={classes.tab}
                component={Link} 
                to="/Titan"
                label="Titan" 
                />

                <StyledTab 
                value={4}  
                className={classes.tab}
                component={Link} 
                to="/Apex"
                label="Apex" 
                />

                </StyledTabs>

         <Menu 
         id="simple-menu"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         classes={{paper: classes.menu}}
         MenuListProps={{onMouseLeave: handleClose}}
         elevation={0}>
           <MenuItem onClick={handleClose}>Car 1</MenuItem>
           <MenuItem onClick={handleClose}>Car 2</MenuItem>
           <MenuItem onClick={handleClose}>Car 3</MenuItem>
         </Menu>
         </Grid>
    </React.Fragment>
 );

return (
    <React.Fragment>
     <CssBaseline/>
      <HideOnScroll {...props}>
         <AppBar color="transparent" elevation={0} >
         <Toolbar disableGuters>
{/*          <img 
         alt="Jager" 
         className={classes.logo} 
         src={logo}
         href="/" value="/" component={Link} to="/"/> */}
         {tabs}
         </Toolbar>
         </AppBar>
        </HideOnScroll>
            <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
             <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 0 24 24" width="3rem" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
             </svg>
      </ScrollTop>
    </React.Fragment>
);

} 