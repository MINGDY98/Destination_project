import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import cloud from '.././assets/images/cloud.jpg';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root:{
    maxWidth: 310,
    borderColor:'white'
  },
  actionArea:{
    height:380,
    
  }
});

export default function PrimaryCard({place}){
  const classes = useStyles();

  return(
    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Card className={classes.root} variant="outlined" square >
        <CardActionArea className={classes.actionArea}>
          <img src={cloud} alt="happy" style={{width:310, height:200}}/>
          <div style={{height:165, }}>
            <div style={{paddingTop:10, paddingLeft:20,paddingRight:20}}>
              <Typography variant="h6" ><strong>청계천</strong></Typography>
              <Typography variant="caption" style={{paddingBottom:5}}><strong>{place}</strong></Typography>
              <Divider/>
              <Typography variant="body2" style={{paddingTop:5}}>나는 한승우를 사랑합니다 안녕하세요 안녕하세요 안녕ㅎ안녕안녕안녕안녕~~~</Typography>
            </div>
            
          </div>
          <div style={{height:15,backgroundColor:'rgba(0, 0, 0, 1)'}}/>
        </CardActionArea>
      </Card>
    </div>
  )
}