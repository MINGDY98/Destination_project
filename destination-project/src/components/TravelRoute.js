import React, { useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Attraction = ({ item }) => {
  if(item === null){
    return(
      <div>
        Loading...
      </div>
    )
  }else{  
    return(
      <div>
        <Typography style={{color:"#ffffff"}} variant="subtitle2"><strong>{item.attractionName}</strong></Typography>
        <Typography style={{color:"#ffffff"}} variant="subtitle2">{item.attractionDescription}</Typography>
      </div>
    )
  }
}

const TravelRoute = ({height,currentPoint,initialData }) => {
  return (

    <>
      <div style={{flexGrow:4,flexBasis:0,display:'flex',alignItems:'center'}}>
        <div style={{position:'absolute', left:50, bottom:100}}>
          <Typography style={{color:"#ffffff"}} variant="h2">{initialData.length > 0 ? initialData[currentPoint.course][currentPoint.attraction].attractionName : null }</Typography>
        </div>
      </div>
      <div style={{flexGrow:1,flexBasis:0,display:'flex',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.5)',height:height,overflow:"auto"}}>
        <div style={{marginTop:200}}>
        <Timeline align="right">
          {initialData != null && initialData[currentPoint.course].map((item, idx) => {
            if(item.attractionId != null){
              console.log(initialData)
              console.log(item)
              return(
                <TimelineItem >
                  <TimelineSeparator >
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{paddingBottom:60}}>
                    {/**attraction을 하나씩 보냄. */}
                    <Attraction item={item} />
                  </TimelineContent>
                </TimelineItem>
              )
            }else{
              /** 
              return(
              <Typography style={{color:"#ffffff"}} variant="subtitle2">이 코스에 대해 궁금하시다면 아무 곳이나 클릭해 주세요.</Typography>
              //도저히 해결이 안됩니다............
              )
              */
            }
           
          })}
        </Timeline>
        </div>
      </div>

    </>

  )
        
}
export default TravelRoute;