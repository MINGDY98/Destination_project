import React from 'react';
import Map from '../../components/Map'
import { makeStyles } from '@material-ui/core/styles';
import PrimaryCard from '../../ui/PrimaryCard'
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    display:'flex',
  },
});

const MapContainer =() =>{
  const classes = useStyles();
  return(
    <>
    <Box display={{xs: 'block', sm:'none'}}>
    </Box>
    <Box display={{xs: 'none', sm: 'block'}}>
      <Container className={classes.root}>
        <div style={{display:'flex',alignItems:"center"}}>
          <PrimaryCard/>
        </div>
        <Map/>
        <div style={{flexDirection:"column"}}>
          <PrimaryCard/>
          <div style={{height: '10vh'}} />
          <PrimaryCard/>
        </div>
      </Container >
    </Box>
    </>


  )

}
export default MapContainer;

  
