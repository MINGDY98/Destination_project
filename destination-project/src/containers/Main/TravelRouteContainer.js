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
    <div style={{width:width,height:height,backgroundImage:'url('+KoreaNightView+')',backgroundSize:'cover'}}>
      <div>
        <Timeline align="alternate">
            <TimelineItem>
            <TimelineSeparator>
              <CheckCircleOutlineIcon style={{fill: 'rgba(0,199,235, 1)', width: 36, height: 36}}/>
              <TimelineConnector  style={{backgroundColor:'rgba(0,199,235, 0.5)'}}/>
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <CheckCircleOutlineIcon style={{fill: 'rgba(0,199,235, 1)', width: 36, height: 36}}/>
              <TimelineConnector  style={{backgroundColor:'rgba(0,199,235, 0.5)'}}/>
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <CheckCircleOutlineIcon style={{fill: 'rgba(0,199,235, 1)', width: 36, height: 36}}/>
              <TimelineConnector  style={{backgroundColor:'rgba(0,199,235, 0.5)'}}/>
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <CheckCircleOutlineIcon style={{fill: 'rgba(0,199,235, 1)', width: 36, height: 36}}/>
              <TimelineConnector  style={{backgroundColor:'rgba(0,199,235, 0.5)'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Typography variant="h6" component="h1">
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </div>
    </div>

  )
}
export default TravelRouteContainer;