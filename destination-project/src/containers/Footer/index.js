import React from 'react';
import footer from '../../assets/images/sand.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root:{
    paddingLeft:100,
    paddingRight:72,
    display:'flex',
    position:'relative'
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div 
      style={{    
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width: '100%',
        height:240,
        backgroundImage:'url('+footer +')',
        backgroundSize:'cover'
      }}
    >
    <div className={classes.root}>
      <div style={{position:'absolute',top:-90}}>
        <Typography style={{color:'#281006',fontWeight:600, fontSize:15}} >BEST</Typography>
        <Typography style={{color:'#281006',fontWeight:600, fontSize:15}} >BEST</Typography>
      </div>

    </div>
    </div>
  )
}
export default Footer;