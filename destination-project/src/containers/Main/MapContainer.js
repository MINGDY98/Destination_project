import React ,{ useEffect }from 'react';
import Map from '../../components/Map'
//import SlickCarousel from '../../ui/SlickCarousel'
import { makeStyles } from '@material-ui/core/styles'
import { CardActionArea, Container, Grid, Hidden, Typography } from '@material-ui/core'
//import PrimaryModal from '../../ui/PrimaryModal'
//import cloud from '../../assets/images/cloud.jpg'
//import PrimaryCard from '../../ui/PrimaryCard'
//import PrimaryCoverFlow from '../../ui/PrimaryCoverFlow'
const useStyles = makeStyles((theme) => ({
  mapContainer: {
    flexGrow: 1, width:'100%'
  },
  contentsContainer: {
    //flexGrow: 4,
    //width:'100%',
    //alignSelf:'center',
    //margin: 12,
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  }
}))

const PlaceName = ({ width,clicked}) => {
  if(!clicked){
    return(
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', height:'100%', borderRadius:6, border:'1px solid #FFF', borderColor:'#FFF'}}>
        <Typography style={{color:'#FFF'}}>
          지역을 선택해주세요.
        </Typography>
      </div>
    )
  }else{

    const handleClickArea = (clicked) => {
      window.location.href=`/routes/${clicked}`
    }

    return(
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', height:'100%', borderRadius:6, border:'1px solid #FFF', borderColor:'#FFF'}}>
        <Container>
          <CardActionArea onClick={()=>handleClickArea(clicked)}>
            <Typography style={{color:'#FFF', cursor:'pointer'}}>
              {clicked}
            </Typography>
          </CardActionArea>
        </Container>
      </div>

    )
  }
}

const MapContainer =() =>{
  const [clicked, setClicked] = React.useState(null);
  const mapRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const [contentsWidth, setContentsWidth] = React.useState(0);


  React.useEffect(() => {
    if(mapRef.current != null ){
      setContentsWidth(mapRef.current.offsetWidth)
    }
  },[ mapRef ])

  const closeModal=()=>{
    setOpen(false)
    setClicked(null);
    
  }
  return(
    <>
      <Grid item xs={12} md={4}>
        <div style={{width:'100%'}}>
          <Map setClicked={setClicked} />
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={{width:'100%', height:'100%'}}>
          <PlaceName width={contentsWidth} clicked={clicked} />
        </div>
      </Grid>
    </>
  )
}
export default MapContainer;