import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    display: 'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:24,
    paddingBottom: 24,
  }
});

const Map = () => {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AcUnitIcon/>
    </div>
    
  )
}
export default Map;