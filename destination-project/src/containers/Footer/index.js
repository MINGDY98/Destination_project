import React from 'react';
import footer from '../../assets/images/sand.jpg'
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
/*
const useStyles = makeStyles({
  root:{
    position:'relative',
    display:'flex'
  },
  background:{
    display:'flex',
    width: '100%',
    minHeight:50,
    padding:100,
    height:'800px',
    backgroundImage: 'url(' + footer + ')',
    backgroundSize:'cover',
    
  }
});*/

const Footer = () => {
  //const classes = useStyles();

  return (
    <div 
      style={{    
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width: '100%',
        height:300,
        backgroundImage:'url('+footer +')',
        backgroundSize:'cover'
      }}
    >
    <div style={{position:'relative',display:'flex'}}>
      {/* <img src={footer} style={{ width:'100%'}}alt="foot" /> 
      <div style={{ backgroundImage: `url(${require('../../assets/images/sand.jpg')})` }}>*/}
      
      
      <div style={{ paddingTop:72, position:'absolute',top:30}}>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flexGrow:3,flexBasis:0}}>
            <Typography> </Typography>
          </div>
          <div style={{flexGrow:7,flexBasis:0}}>
            <Typography style={{position:'relative', color:'#281006',fontWeight:600, fontSize:15, top:-6}} >BEST</Typography>
          </div>
        </div> 
      </div>
      
    </div>
    </div>
  )
}
export default Footer;