/* eslint-disable no-use-before-define */
import { Card, CardActionArea, CardContent, CardMedia, Container, Paper } from '@material-ui/core';
import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CachedIcon from '@material-ui/icons/Cached';
import ErrorIcon from '@material-ui/icons/Error';
import white from '../assets/images/white.jpg'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


const RouteContainer = ({match}) => {

  const {place} = match.params
  const data = [123,3123,123123,132312123]


  return (
    <Container>
      <Timeline align="alternate">
        {data.map((item, idx) => {
          return(
            <TimelineItem>
              <TimelineOppositeContent>
                <div style={{margin: 21}}>
                  <Typography variant="h6"><strong>{item}</strong></Typography>
                  <Typography>평점 : <strong>4.9</strong></Typography>
                  <Typography>소요 시간 : <strong>20분</strong></Typography>
                  <Typography>이용 요금 : <strong>100만원</strong></Typography>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <CheckCircleOutlineIcon style={{fill: 'rgba(0,199,235, 1)', width: 36, height: 36}} />
                <TimelineConnector style={{backgroundColor:'rgba(0,199,235, 0.5)'}} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper style={{overflow:'hidden', margin: 21}}>
                  <img style={{display:'block', width: '100%'}} src={white} />
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Container>
  )
}
export default RouteContainer;