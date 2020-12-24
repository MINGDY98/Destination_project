import React, { useEffect } from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import KoreaNightView from '../../assets/images/korea_nightView.jpg'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import white from '../../assets/images/white.jpg'
import { Container, Paper } from '@material-ui/core';

const TravelRouteContainer = ({place}) => {
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
 
  const data = [123,3123,123123,132312123]


  return (
    <div style={{display:'flex',flexDirection:'row',width:width,height:height,backgroundImage:'url('+KoreaNightView+')',backgroundSize:'cover'}}>
      <div style={{flexGrow:4,flexBasis:0,display:'flex',alignItems:'center'}}>
        <div style={{position:'absolute', left:50, bottom:100}}>
          <Typography style={{color:"#ffffff"}} variant="h1">상세 지역 이름 </Typography>
        </div>
      </div>
      <div style={{flexGrow:1,flexBasis:0,display:'flex',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
        
          <Timeline align="right">
            {data.map((item, idx) => {
              return(
                <TimelineItem>
                  <TimelineSeparator >
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{paddingBottom:60}}>
                    <div>
                      <Typography style={{color:"#ffffff"}} variant="subtitle2"><strong>{item}</strong></Typography>
                      <Typography style={{color:"#ffffff"}} variant="subtitle2">평점 : <strong>4.9</strong></Typography>
                      <Typography style={{color:"#ffffff"}} variant="subtitle2">소요 시간 : <strong>20분</strong></Typography>
                      <Typography style={{color:"#ffffff"}} variant="subtitle2">이용 요금 : <strong>100만원</strong></Typography>
                    </div>

                  </TimelineContent>
                </TimelineItem>
              )
            })}
          </Timeline>
      </div>
    </div>

  )
}
export default TravelRouteContainer;