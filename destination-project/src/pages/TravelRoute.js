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
import TravelRouteContainer from '../containers/Main/TravelRouteContainer.js'

const TravelRoute = ({match}) => {

  const {place} = match.params


  return (
    <TravelRouteContainer place={place}/>
  )
}
export default TravelRoute;