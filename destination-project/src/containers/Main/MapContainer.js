import React from 'react';
import Map from '../../components/Map'
import { makeStyles } from '@material-ui/core/styles';
import PrimaryCard from '../../ui/PrimaryCard'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    display:'flex',
  },
});

const MapContainer =() =>{
  const classes = useStyles();
  return(
    <Container>
    <Grid container>
      <Grid item md={3}>
        <PrimaryCard />
      </Grid>
      <Grid item md={6}>
        <Map/>
      </Grid>
      <Grid item md={3}>
        <PrimaryCard />
      </Grid>
      
    </Grid>
    </Container>


  )

}
export default MapContainer;

  
