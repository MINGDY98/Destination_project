import React from 'react';
import Map from '../../components/Map'
import SlickCarousel from '../../ui/SlickCarousel'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PrimaryModal from '../../ui/PrimaryModal'

const PlaceName = ({ clicked, width, height}) => {
  return(
    <div>
      {clicked!=='None'? 
      <SlickCarousel place={clicked} height={height} width={width} />
      : <></>}
    </div>
  )
}
/** const MobilePlaceName = ({ clicked, width, height}) => {
  return(
    <div>
      {clicked!=='None'? 
      <PrimaryModal place={clicked} height={height} width={width} />
      : <></>}
    </div>
  )
}*/




const MapContainer =() =>{

const [clicked, setClicked] = React.useState('None');

  return(
    <>
    <Box display={{xs: 'block', md:'none',lg:'none'}}>
      <Container>
        <Grid container style={{display:'flex',position:'relative'}}>
          <Grid item xs={12}>
            <Map clicked={clicked} setClicked={setClicked} />
            {clicked!== 'None' ?          
              <PrimaryModal place={clicked} setClicked={setClicked} height={150} width={200} />     
           : <></>}
          </Grid>

        </Grid>
      </Container>
    </Box>
    <Box display={{xs: 'none', md:'block',lg:'none'}}>
      <Container>
        <Grid container style={{display:'flex',position:'relative'}}>
          <Grid item md={6} xs={12}>
            <Map clicked={clicked} setClicked={setClicked} />
          </Grid>
          <Grid item md={1} xs={12}></Grid>
          <Grid item md={5} xs={12}>
          {clicked!== 'None' ?          
          
          <div >
            <PlaceName clicked={clicked} width={400} height={350}/>
          </div>
         : <></> }
          </Grid>

        </Grid>
      </Container>
    </Box>
    <Box display={{xs: 'none', md:'none',lg:'block'}}>
      <Container>
        <Grid container style={{display:'flex'}}>
          <Grid item md={6} xs={12}>
            <Map clicked={clicked} setClicked={setClicked} />
          </Grid>
          <Grid item md={1} xs={12}></Grid>
          <Grid item md={5} xs={12}>
          {clicked!== 'None' ?          
          
          <div >
            <PlaceName clicked={clicked} width={600} height={500}/>
          </div>
         : <></> }
          </Grid>
          


        </Grid>
      </Container>
    </Box>
    </>

  )

}
export default MapContainer;

  
