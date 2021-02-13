import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root:{
    display:'flex',
    position:'relative',
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
      }}
    >
      <div className={classes.root}>
        <Container style={{paddingTop: 100, paddingBottom: 100}}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <div>
                <Typography style={{color:'#565656', fontSize:18}}><strong>한국여행길잡이</strong></Typography>
              </div>
              <div style={{marginTop: 20}}>
                <Typography style={{color:'#565656',fontWeight:600, fontSize:15}}>create by minji kim</Typography>
                <Typography onClick={()=>window.open("https://github.com/MINGDY98")} style={{color:'#565656',fontWeight:600, fontSize:15, cursor:'pointer'}}>Github</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div>
                <Typography style={{color:'#565656', fontSize:18}}><strong>사이트맵</strong></Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
export default Footer;