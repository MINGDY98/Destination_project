import React from 'react';
import Map from '../../components/Map'
import PrimaryCard from '../../ui/PrimaryCard'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const MapContainer =() =>{
  return(
    <Container>
      <Grid container>
        <Grid item md={3}xs={12} style={{display:'flex'}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <PrimaryCard />
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <Map/>
        </Grid>
        <Grid item md={3}xs={12} style={{display:'flex'}}>
          <div style={{display:'flex',flexWrap:'wrap',alignContent:'space-between'}}>
            <PrimaryCard />
            <PrimaryCard />
          </div>
        </Grid>
        
      </Grid>
    </Container>


  )

}
export default MapContainer;

  
