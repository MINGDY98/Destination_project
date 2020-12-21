import React from 'react';
import footer from '../../assets/images/sand.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root:{
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
        backgroundImage:'url('+footer +')',
        backgroundSize:'cover'
      }}
    >
      <div className={classes.root}>
        <Container style={{paddingTop: 100, paddingBottom: 100}}>
          <Typography style={{color:'#281006',fontWeight:600, fontSize:15}} >BEST</Typography>
          <Typography style={{color:'#281006',fontWeight:600, fontSize:15}} >BEST</Typography>
        </Container>
      </div>
    </div>
  )
}
export default Footer;