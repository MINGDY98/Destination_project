import React from 'react';
import Map from '../../components/Map'
import SlickCarousel from '../../ui/SlickCarousel'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Hidden, Typography } from '@material-ui/core'
import PrimaryModal from '../../ui/PrimaryModal'

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    flexGrow: 1, width:'100%'
  },
  contentsContainer: {
    flexGrow: 1,
    width:'100%',
    alignSelf:'center',
    margin: 12,
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
      <SlickCarousel place={clicked} width={width} />
    )
  }
}

const MapContainer =() =>{
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
    <Container>
      <div style={{display:'flex'}}>
        <div ref={mapRef} className={classes.mapContainer} onClick={()=>setOpen(true)}>
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
  )
}
export default MapContainer;