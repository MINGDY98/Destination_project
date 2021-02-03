import React from 'react';
//import AriaSelectBox from '../../components/AriaSelectBox';
import KoreaNamsan from '../../assets/images/korea_namsan.jpg'
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import MapContainer from './MapContainer';
const AriaSelectContainer = () => {

  return (
    <div style={{backgroundImage:'url('+KoreaNamsan+')',backgroundSize:'cover', height:'100vh'}}>
      <Container style={{display:'flex',flexDirection:'column',justifyContent:'center', height:'100%'}}>
        <Grid container >
          <Grid item xs={12} md={3}>
            <div style={{display:'flex',flexDirection:'column', height:'100%', justifyContent:'center',textAlign:'right'}}>
              <Typography style={{color:'#ffffff', fontSize: 42, fontStyle:"oblique", marginBottom: 10}}><strong>한국 여행</strong></Typography>
              <Typography style={{color:'#ffffff', fontSize: 42}}><strong>길  잡  이</strong></Typography>
            </div>
          </Grid>
          <MapContainer />
        </Grid>      
      </Container>
    </div>
  )
}
export default AriaSelectContainer;