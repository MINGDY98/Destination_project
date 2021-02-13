import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Attraction from '../components/Attraction';

const CourseProcessContainer = ({ currentPoint, currentCourse }) => {
  return (
    <>
      <div style={{flexGrow:3, flexBasis:0, display:'flex', alignItems:'center', height:'100vh'}}>
        <div style={{position:'absolute', left:50, bottom:100}}>
          <Typography style={{color:"#fff", fontWeight: 400, fontStyle:'oblique'}} variant="h2">
            {currentCourse != null ? currentCourse[currentPoint.attraction].attractionName : null }
          </Typography>
        </div>
      </div>
      <div style={{flexGrow:1, flexBasis:0, display:'flex', alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.6)',overflow:"auto"}}>
        <div style={{marginTop:20}}>
        <Timeline align="right">
          {currentCourse != null && currentCourse.map((item, idx) => {
            if(item.attractionId != null){
              return(
                <TimelineItem key={idx}>
                  <TimelineSeparator >
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{paddingBottom:60}}>
                    <Attraction item={item} />
                  </TimelineContent>
                </TimelineItem>
              )
            }else{
              return(
                <div style={{marginBottom: 20}}>
                  <Typography key={idx} style={{color:"#ffffff"}} variant="subtitle2">이 코스에 대해 궁금하시다면 아무 곳이나 클릭해 주세요.</Typography>
                </div>
              )
            }
          })}
        </Timeline>
        </div>
      </div>
    </>

  )
        
}
export default CourseProcessContainer;