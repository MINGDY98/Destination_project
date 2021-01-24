import React from 'react';

import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';


const TravelRoute = ({place}) => {

  const data = [123,3123,123123,132312123]

  return (
    < >
      <div style={{flexGrow:4,flexBasis:0,display:'flex',alignItems:'center'}}>
        <div style={{position:'absolute', left:50, bottom:100}}>
          <Typography style={{color:"#ffffff"}} variant="h1">상세 지역 이름 </Typography>
          <Typography style={{color:"#ffffff"}} variant="subtitle2">{place} </Typography>
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
    </>

  )
}
export default TravelRoute;