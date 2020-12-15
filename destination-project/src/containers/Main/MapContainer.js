import React from 'react';
import Map from '../../components/Map'
import PrimaryImageButton from '../../ui/PrimaryImageButton'
import MobileImageButton from '../../ui/MobileImageButton'
import TabletImageButton from '../../ui/TabletImageButton'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const PlaceName = ({hovered, clicked}) => {
  return(
    <div>
      {hovered==='None'&&clicked!=='None'? 
      <PrimaryImageButton place={clicked}/>
      : <PrimaryImageButton place={hovered}/>}
    </div>
  )
}

const TabletPlaceName = ({hovered, clicked}) => {
  return(
    <div>
      {hovered==='None'&&clicked!=='None'? 
      <TabletImageButton place={clicked}/>
      : <TabletImageButton place={hovered}/>}
    </div>
  )
}

const MobilePlaceName = ({hovered, clicked}) => {
  return(
    <div>
      {hovered==='None'&&clicked!=='None'? 
      <MobileImageButton place={clicked}/>
      : <MobileImageButton place={hovered}/>}
    </div>
  )
}


const MapContainer =() =>{

const [hovered, setHovered] = React.useState('None');
const [clicked, setClicked] = React.useState('None');

  return(
    <>
    <Box display={{xs: 'block', md:'none',lg:'none'}}>
      <Container>
        <Grid container style={{display:'flex',position:'relative'}}>
          <Grid item xs={12}>
            <Map hovered={hovered} setHovered={setHovered} clicked={clicked} setClicked={setClicked} />
          </Grid>
          {hovered !== 'None'||clicked!== 'None' ?          
          <div>
            <div style={{position:'absolute' ,top:100}}>
              <MobilePlaceName hovered={hovered} clicked={clicked}/>
            </div>
            <div style={{position:'absolute' ,top:240, right:70}}>
              <MobilePlaceName hovered={hovered} clicked={clicked}/>
            </div>
            <div style={{position:'absolute' ,bottom:90, right:270}}>
              <MobilePlaceName hovered={hovered} clicked={clicked}/>
            </div>
          </div> : <></> }
        </Grid>
      </Container>
    </Box>
    <Box display={{xs: 'none', md:'block',lg:'none'}}>
      <Container>
        <Grid container style={{display:'flex',position:'relative'}}>
          <Grid item md={3} xs={12}>
          </Grid>
          <Grid item md={6} xs={12}>
            <Map hovered={hovered} setHovered={setHovered} clicked={clicked} setClicked={setClicked} />
          </Grid>
          <Grid item md={3} xs={12}>
          </Grid>
          {hovered !== 'None'||clicked!== 'None' ?          
          <div>
            <div style={{position:'absolute' ,top:100}}>
              <TabletPlaceName hovered={hovered} clicked={clicked}/>
            </div>
            <div style={{position:'absolute' ,top:240, right:70}}>
              <TabletPlaceName hovered={hovered} clicked={clicked}/>
            </div>
            <div style={{position:'absolute' ,bottom:90, right:270}}>
              <TabletPlaceName hovered={hovered} clicked={clicked}/>
            </div>
          </div> : <></> }

        </Grid>
      </Container>
    </Box>
    <Box display={{xs: 'none', md:'none',lg:'block'}}>
      <Container>
        <Grid container style={{display:'flex',position:'relative'}}>
          <Grid item md={3} xs={12}>
          </Grid>
          <Grid item md={6} xs={12}>
            <Map hovered={hovered} setHovered={setHovered} clicked={clicked} setClicked={setClicked} />
          </Grid>
          <Grid item md={3} xs={12}>
          </Grid>
          {hovered !== 'None'||clicked!== 'None' ?          
          <div>
            <div style={{position:'absolute' ,top:100}}>
              <PlaceName hovered={hovered} clicked={clicked}/>
            </div>
            <div style={{position:'absolute' ,top:240, right:70}}>
              <PlaceName hovered={hovered} clicked={clicked}/>
            </div>
            <div style={{position:'absolute' ,bottom:90, right:270}}>
              <PlaceName hovered={hovered} clicked={clicked}/>
            </div>
          </div> : <></> }

        </Grid>
      </Container>
    </Box>
    </>

  )

}
export default MapContainer;

  
