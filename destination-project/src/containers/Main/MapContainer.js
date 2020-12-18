import React from 'react';
import Map from '../../components/Map'
import SlickCarousel from '../../ui/SlickCarousel'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Hidden } from '@material-ui/core'
import PrimaryModal from '../../ui/PrimaryModal'

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    flexGrow: 1, width:'100%'
  },
  contentsContainer: {
    flexGrow: 1,
    width:'100%',
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  }
}))

const PlaceName = ({ clicked, width, height}) => {
  if(!clicked){
    return(
      <div style={{width:'100%', display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', textAlign:'center'}}>
        지역을 선택해주세요.
      </div>
    )
  }else{
    return(
      <SlickCarousel place={clicked} width={width} />
    )
  }
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
  const classes = useStyles();
  const [clicked, setClicked] = React.useState(null);
  const mapRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const [contentsWidth, setContentsWidth] = React.useState(0);


  React.useEffect(() => {
    if(mapRef.current != null ){
      console.log(mapRef.current.offsetWidth)
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
        <PrimaryModal width={contentsWidth} place={clicked} open={open} onClose={()=>closeModal()} />
      </Hidden>
    </Container>
  )
}
export default MapContainer;

  /**
   * 
   * 
   * <>
    <Box display={{xs: 'block', md:'none',lg:'none'}}>
      <Container>
        <Grid container style={{display:'flex',position:'relative'}}>
          <Grid item xs={12}>
            <Map clicked={clicked} setClicked={setClicked} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box display={{xs: 'none', md:'block', lg:'none'}}>
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
          {clicked !== 'None' ?          
          
          <div >
            <PlaceName clicked={clicked} width={600} height={500}/>
          </div>
         : <></> }
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
   */
