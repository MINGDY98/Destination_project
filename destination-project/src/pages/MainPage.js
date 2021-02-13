import React from 'react';
import KoreaNamsan from '../assets/images/korea_namsan.jpg'
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import PlaceListContainer from '../containers/PlaceListContainer';
import MapContainer from '../containers/MapContainer';

const Main = () => {
  const [contentsWidth, setContentsWidth] = React.useState(0);
  const [clicked, setClicked] = React.useState(null);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if(mapRef.current != null ){
      setContentsWidth(mapRef.current.offsetWidth)
    }
  },[ mapRef ])

  return (
    <div style={{backgroundImage:'url('+KoreaNamsan+')',backgroundSize:'cover', height:'100vh'}}>
      <Container style={{display:'flex',flexDirection:'column',justifyContent:'center', height:'100%'}}>
        <Grid container >
          <Grid item xs={12} md={3}>
            <div style={{display:'flex',flexDirection:'column', height:'100%', justifyContent:'center',textAlign:'right', color:'#FFF'}}>
              <Typography style={{fontSize: 48, fontStyle:"oblique"}}><strong>한국 여행</strong></Typography>
              <Typography style={{fontSize: 48, fontStyle:"oblique"}}><strong>길  잡  이</strong></Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{width:'100%'}}>
              <MapContainer setClicked={setClicked} />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{width:'100%', height:'100%'}}>
              <PlaceListContainer width={contentsWidth} clicked={clicked} />
            </div>
          </Grid>
        </Grid>      
      </Container>
    </div>
  )
}
export default Main;