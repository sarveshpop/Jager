import React, { useEffect, useState} from 'react';
import { AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { Link} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider} from '@material-ui/core/styles'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Tooltip from '@material-ui/core/Tooltip';
// import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
// import Avatar from '@material-ui/core/Avatar';
// import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
// import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import { ListItem, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { SwipeableDrawer } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { useLovelySwitchStyles } from '@mui-treasury/styles/switch/lovely';
import Logo from '../../res/logo.svg';


function HideOnScroll(props) {
  const {children} = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });


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
      backgroundColor: '#ffff',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);


const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);



  const useStyles = makeStyles((theme) => ({
    root: {
    ...theme.typography,
    display: 'flex',
    fontSize: '1rem',
    backgroundColor: 'rgb(22,22,22)',
    
  },

    AppBar: {
 
    },

      toolbarMargin: {
    ...theme.mixins.toolbar,

    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
   smallLogo: {
    width: "7em",
    margin: "30px 0px 30px 50px",
    [theme.breakpoints.down("sm")]: {
    marginLeft:'35vw',
  }
  }, 

  ListItem: {
    opacity: 1,
  },
/*   Menu: {
    display: 'block',
    backgroundColor: 'rgba(1,1,1,.5)',
    left: '0 !important',
    width: '100%',
    maxWidth: 'inherit',
    marginTop: '10px',
  }, */
   tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    [theme.breakpoints.down("xl")]: {
    padding: " 0px 2em 2px 2em",
    },
    [theme.breakpoints.down("md")]: {
    padding: "1em",
  }
  },

    tabContainer: {
    marginLeft: "auto"
  },

    paper: {
    margin: '0',
    backgroundColor: 'rgb(22,22,22)',
  },
    drawer: {
      backgroundColor: 'rgba()',
      width: '50%'

  },

  drawerIcon: {
    ...theme.typography.tab,
   width: '1.5em',
   height: '1.5em',
   marginLeft: '-20vw',
  },

   AccountCircleContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    }
   },

   AccountCircleOutlined: {
   width: '1.5em',
   height: '1.5em',
   },

  drawerIconContainer: {
    marginRight: "auto",
    left: "0",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },

FormControlLabel: {
  fontSize: '16px'
},


}));

// const MenuList = withStyles({
//   root: {
//     display: 'block',
//     backgroundColor: 'rgba(1,1,1,.5)',
//     left: '0 !important',
//     width: '100vw',
//     position: 'absolute',
//     marginTop: '5em',
//   }
// })(MuiMenuList);

// const MenuItem = withStyles({
//   root: {
//     outline: 'none'
//   }
// })(MuiMenuItem);

// const Accordion = withStyles({
//   root: {
//     border: 'none',
//     backgroundColor: 'transparent',
//     boxShadow: 'none',
//     '&:not(:last-child)': {
//       borderBottom: 0,
//     },
//     '&:before': {
//       display: 'none',
//     },    
//     '&$expanded': {
//     },
//   },
//   expanded: {},
// })(MuiAccordion);

// const AccordionSummary = withStyles({
//   root: {
//     backgroundColor: 'transparent',
//     borderBottom: 'none',
//     marginBottom: -1,
//     minHeight: 56,
//     '&$expanded': {
//       minHeight: 56,
//     },
//   },
//   content: {
//     '&$expanded': {
//       margin: '12px 0',
//     },
//   },
//   expanded: {},
// })(MuiAccordionSummary);

// const AccordionDetails = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(1),
//   },
// }))(MuiAccordionDetails);

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [ /* anchorEl */, setAnchorEl] = React.useState();
  const [/* openMenu */, setOpenMenu] = React.useState(false);
  const [openDrawer, setOpenDrawer] = useState(false)
  const [toggled, setToggled] = React.useState(false);
  const lovelyStyles = useLovelySwitchStyles();

  // const anchorRef = React.useRef(null);
  // // const [selectedIndex, setSelectedIndex]=useState(0);

  // const [expanded, setExpanded] = React.useState('false');

  // const embraceChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const theme = React.useMemo(() =>
      createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
        typography: {
          fontSize: 16,
        },
      }),
  );

const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);
    const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTraget)
    setOpenMenu(true) 
  }

  // Trash Code, Don't Want It, Don't Wanna Delete It.

  // const handleMenuItemClick = (e, i) => {
  //   setAnchorEl(null);
  //   setOpenMenu(false);
  //   props.setSelectedIndex(i);
  // }

  // const handleToggle = () => {
  //   setOpenMenu((prevOpen) => !prevOpen);
  // };

  // const handleClose = (e) => {
  //   setAnchorEl(null)
  //   setOpenMenu(false)
  // }

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpenMenu(false);
  //   }
  // }

  // const menuOptions = [
  //   {name: "Elite", link: "/Elite"},
  //   {name: "Predator", link: "/Predator"},
  //   {name: "Titan", link: "/Titan"},
  //   {name: "Apex", link: "/Apex"}
  // ];

  // const routes = [{name: "Home", link:"/"}, {name: "Elite", link:"/Elite"}, 
  //                 {name: "Predator", link:"/Predator"}, {name: "Titan", link:"/Titan"},
  //                 {name: "Apex", link:"/Apex"},]

  // return focus to the button when we transitioned from !open -> open

    useEffect(() => {

      // Trash Code, Don't Want It, Don't Wanna Delete It.

      // [...menuOptions, ...routes].forEach(route => {
      //   switch (window.location.pathname) {
      //     case `${route.link}`:
      //       if (props.value !== route.activeIndex) {
      //         props.setValue(route.activeIndex)
      //         if (
      //           route.selectedIndex &&
      //            route.selectedIndex !== props.selectedIndex) {
      //           props.setSelectedIndex(route.selectedIndex)
      //         }
      //       }
      //       break; 
      //       default:
      //       break;
      //   }
      // })
/*
} else if (window.location.pathname === "/Elite" && value !== 1) {
  setValue(1);
} else if (window.location.pathname === "/Predator" && value !== 2) {
  setValue(2);
} else if (window.location.pathname === "/Titan" && value !== 3) {
  setValue(3);
} else if (window.location.pathname === "/Apex" && value !== 4) {
  setValue(4);
}
    }, [value]); */

    switch (window.location.pathname) {
      case "/Elite":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/Apex":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/Titan":
        if (value !== 3) {
          setValue(3);
        }
        break;
        case "/Predator":
        if (value !== 4) {
          setValue(4);
        }
        break;
        default:
        break;
    }
     }, [props, value]);

    const tabs = (
      <React.Fragment>
        <Grid xs={8} display='block'>
            <StyledTabs value={value} onChange={handleChange} centered>
    
                <StyledTab
                 value={1}
                 className={classes.tab}
                 component={Link} 
                 to="/Elite"
                 label="Elite"
                 onClick={handleClick}
                 />

                <StyledTab 
                value={2}
                className={classes.tab}
                component={Link} 
                to="/Apex"
                label="Apex" 
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
                to="/Predator"
                label="Predator" 
                />

            </StyledTabs>
         </Grid>
        <Grid xs={2} display='block'>
             {/* Account Avatar Icon */}
      {/* <IconButton className={classes.AccountCircleContainer}>
      <AccountCircleOutlined className={classes.AccountCircleOutlined}></AccountCircleOutlined>
      </IconButton> */}

              {/* Dark Mode Toggle */}
               {/* <FormControlLabel
                  value="start"
                  control={
                            <Switch
                  classes={lovelyStyles}
                  checked={!toggled}
                  onClick={handleDarkModeToggle}
                  onChange={e => setToggled(!e.target.checked)}/>
                          }
                  label={<Typography className={classes.FormControlLabel}>Dark Mode</Typography>}
                  labelPlacement="start"/>  */}
        </Grid>
      </React.Fragment>
    )

      const drawer = (
        <React.Fragment>
          <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} 
           open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
           classes={{paper: classes.drawer}}>
           <div classname={classes.toolbarMargin}/>
          <List>
            <ListItem 
            onClick={()=> {setOpenDrawer(false); setValue(1)}}
            selected={value === 1}
            button component={Link} to= "/Elite">
              <ListItemText disableTypography>Elite</ListItemText>
            </ListItem>
            <ListItem 
            onClick={()=> {setOpenDrawer(false); setValue(2)}}
            selected={value === 2}
            button component={Link} to= "/Apex">
              <ListItemText disableTypography>Predator</ListItemText>
            </ListItem>
            <ListItem 
            onClick={()=> {setOpenDrawer(false); setValue(3)}}
            selected={value === 3}  
            button component={Link} to= "/Titan">
              <ListItemText disableTypography>Titan</ListItemText>
            </ListItem>
            <ListItem 
            onClick={()=> {setOpenDrawer(false); setValue(4)}}
            selected={value === 4}
            button component={Link} to= "/Predator">
              <ListItemText disableTypography>Apex</ListItemText>
            </ListItem>
            <ListItem >
            <ListItemText disableTypography>Dark Mode</ListItemText>
               <FormControlLabel
          value="start"
          control={
                    <Switch
        classes={lovelyStyles}
        checked={!toggled}
        onClick={handleDarkModeToggle}
        onChange={e => setToggled(!e.target.checked)}/>
                  }/> 
            </ListItem>
          </List>
          </SwipeableDrawer>
        <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.drawerIcon}/>
        </IconButton>
        </React.Fragment>
      )

return (
  <ThemeProvider theme={theme}> 
    <React.Fragment>

     <CssBaseline>
      <HideOnScroll {...props}>
         <AppBar className={classes.AppBar} color="transparent" elevation={0} position='fixed'>
         <Toolbar disableGutters>
        <Grid xs={2} display='block'>
         <a href="/" value="/" component={Link} to="/"><img 
         alt="Jager" 
         className={classes.smallLogo}
         src={Logo}/></a>
        </Grid>
        
        {matches ? drawer : tabs}
         <br></br>
              
              {/*  <Grid display='block'>
       
             <Popper open={open} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
            <Paper>
            <ClickAwayListener onClickAway={handleClose}>
      <MenuList 
         id="Predator-menu"
        //  anchorEl={anchorEl}
         open={open ? 'menu-list-grow' : undefined}
         aria-haspopup="true"
         onClose={handleClose}
         classes={{paper: classes.menu}}
         onKeyDown={handleListKeyDown}
         MenuListProps={{onMouseLeave: handleClose}}
         elevation={0}>

           <MenuItem button={false}>
              <Accordion  TransitionProps={{ unmountOnExit: true }} square expanded={expanded === 'panel4'} onChange={embraceChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography>Predator Car 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet.
                </Typography>
                </AccordionDetails>
              </Accordion>
           </MenuItem>

           <MenuItem button={false}>
              <Accordion square expanded={expanded === 'panel5'} onChange={embraceChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <Typography>Predator Car 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet.
                </Typography>
                </AccordionDetails>
              </Accordion>          
           </MenuItem>
          
           <MenuItem button={false}>
              <Accordion square expanded={expanded === 'panel6'} onChange={embraceChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                <Typography>Predator Car 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet.
                </Typography>
                </AccordionDetails>
              </Accordion>
           </MenuItem>
         
      </MenuList>
         </ClickAwayListener>
         </Paper>
         </Grow>
          )}
          </Popper> 
  </Grid> */}
         </Toolbar>
         </AppBar>
        </HideOnScroll>
        </CssBaseline>
    </React.Fragment>

  </ThemeProvider>
);

} 