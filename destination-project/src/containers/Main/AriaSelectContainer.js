import React, { useEffect } from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import KoreaNamsan from '../../assets/images/korea_namsan.jpg'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MapContainer from './MapContainer';
import { Container, Grid } from '@material-ui/core';

const AriaSelectContainer = ({width,height}) => {
{/**


  const [width,setWidth]= React.useState(window.innerWidth);
  const [height,setHeight]= React.useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize",updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
*/}

 

  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',width:width,height:height,backgroundImage:'url('+KoreaNamsan+')',backgroundSize:'cover'}}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <div style={{display:'flex',flexDirection:'column', height:'100%', justifyContent:'center',textAlign:'right'}}>
              <Typography style={{color:'#ffffff', fontSize: 42, fontStyle:"oblique", marginBottom: 10}}><strong>한국 여행</strong></Typography>
              <Typography style={{color:'#ffffff', fontSize: 42}}><strong>길  잡  이</strong></Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div>
              <MapContainer width={width} height={height}/>
            </div>
          </Grid>
        </Grid>      
      </Container>
    </div>
  )
}
export default AriaSelectContainer;