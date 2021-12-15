/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: 'center',
    color:
      palette.type === 'dark'
        ? 'rgba(255,255,255,0.57)'
        : palette.text.secondary,
    position: 'relative',
    [breakpoints.up('sm')]: {
      '&:not(:first-of-type)': {
        '&:before': {
          content: '"|"',
          display: 'block',
          position: 'absolute',
          left: 0,
        },
      },
    },
  },

  Link: {
    fontSize: '16px',
    color: 'grey',
    textDecoration: 'none',
        "&:hover": {
      color: "whitesmoke"
    },
  },

  Footer: {
    paddingBottom: '10px',
    backgroundColor: 'transparent',
    marginTop: '-40px'
  },

}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.Footer} width={'100%'} elevation={0}>
      <Grid container direction='row' justifyContent='center'>
        <Grid container item xs={1}>
        <a underline="none" href="/" value="/" component={Link} to="/">
         <Typography className={classes.Link} >
         JAGER ©
        </Typography></a>
        </Grid>
        <Grid container item xs={1}>
          <a underline="none" href="#"  >
        <Typography className={classes.Link}>
          Careers
        </Typography></a>
        </Grid>
        <Grid container item xs={1}>
          <a underline="none" href="#">
        <Typography className={classes.Link}>
          Contact
        </Typography></a>
        </Grid>
        <Grid container item xs={1}>
          <a underline="none" href="#">
        <Typography className={classes.Link}>
          About
        </Typography></a>
        </Grid>
        <Grid container item xs={1}>
          <a underline="none" href="/Elite" value="/Elite" component={Link} to="/Elite">
        <Typography className={classes.Link}>
          Elite
        </Typography></a>
        </Grid>
        <Grid container item xs={1}>
          <a underline="none" href="/Apex" value="/Apex" component={Link} to="/Apex">
        <Typography className={classes.Link}>
          Titan
        </Typography></a>
        </Grid>
        <Grid container item xs={1}>
          <a underline="none" href="/Apex" value="/Apex" component={Link} to="/Apex">
        <Typography className={classes.Link}>
          Apex
        </Typography></a>
        </Grid>
        <Grid container item xs={1}>
          <a underline="none" href="/Predator" value="/Predator" component={Link} to="/Predator">
        <Typography className={classes.Link}>
          Predator
        </Typography></a>
        </Grid>
      </Grid>
    </div>
  );
};