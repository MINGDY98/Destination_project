import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles({
  root: {
    display:'flex',
    flexDirection:'row'
  },
});


export default function PrimaryGuideContent({text}){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Typography style={{color:'#ffffff'}}><strong>{text}</strong></Typography>
      <ExpandMoreIcon style={{color:'#ffffff',fontWeight:'bold'}}/>
    </div>
  )
}