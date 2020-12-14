import React from 'react';
import Map from '../../components/Map'
import PrimaryCard from '../../ui/PrimaryCard'
import MobileCard from '../../ui/MobileCard'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const MapContainer =() =>{
  return(
    <>
    <Box display={{xs: 'block', sm:'none'}}>
      <Container>
        <Grid container style={{display:'flex',position:'relative'}}>
          <Grid item xs={12}>
            <Map/>
          </Grid>
          <div style={{position:'absolute' ,top:-30}}>
            <MobileCard/>
          </div>
          <div style={{position:'absolute' ,top:150, right:-30}}>
            <MobileCard/>
          </div>
          <div style={{position:'absolute' ,bottom:150, right:40}}>
            <MobileCard/>
          </div>
        </Grid>
      </Container>
    </Box>
    <Box display={{xs: 'none', sm:'block'}}>
    <Container>
        <Grid container style={{display:'flex',position:'relative'}}>
          <Grid item md={3} xs={12}>
          </Grid>
          <Grid item md={6} xs={12}>
            <Map/>
          </Grid>
          <Grid item md={3} xs={12}>
          </Grid>
          <div style={{position:'absolute' ,top:100}}>
            <PrimaryCard/>
          </div>
          <div style={{position:'absolute' ,top:240, right:100}}>
            <PrimaryCard/>
          </div>
          <div style={{position:'absolute' ,bottom:90, right:270}}>
            <PrimaryCard/>
          </div>
        </Grid>
      </Container>
    </Box>
    </>

  )

}
export default MapContainer;

  
