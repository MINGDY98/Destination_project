import React from 'react';
import Map from '../../components/Map'
import SlickCarousel from '../../ui/SlickCarousel'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Hidden, Typography } from '@material-ui/core'
import PrimaryModal from '../../ui/PrimaryModal'
import cloud from '../../assets/images/cloud.jpg'
import PrimaryCard from '../../ui/PrimaryCard'
import PrimaryCoverFlow from '../../ui/PrimaryCoverFlow'
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

const PlaceName = ({ clicked, width}) => {
  if(!clicked){
    return(
      <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', alignSelf:'center'}}>
        <Typography style={{paddingTop: 200, paddingBottom: 200}}>
          지역을 선택해주세요.
        </Typography>
      </div>
    )
  }else{
    return(
      <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{paddingRight:50}}/>
        <PrimaryCoverFlow/>
      </div>

    )
  }
}

const MapContainer =({width,height}) =>{
  const classes = useStyles();
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
    <div style={{display:'flex',flexDirection:'row',width:width,height:height,backgroundcolor:'white',backgroundSize:'cover',justifyContent:'center',alignItems:'center'}}>
      <Container maxWidth="100">
        <div style={{display:'flex',alignItems:'center',position:'relative'}}>
          <div style={{paddingLeft:50, width:500}}>
            <Map clicked={clicked} setClicked={setClicked} />
          </div>
          <div className={classes.contentsContainer}>
            <PlaceName width={contentsWidth} clicked={clicked} />
          </div>
        </div>
        <Hidden smUp>
          <PrimaryModal place={clicked} open={open} onClose={()=>closeModal()} />
        </Hidden>
      </Container>
    </div>
    
  )
}
export default MapContainer;