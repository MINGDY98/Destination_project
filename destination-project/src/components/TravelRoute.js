import React, { useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { getAttraction } from '../api';

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

const TravelRoute = ({ isClick,currentPoint,initialData }) => {

  const [sortData, setSortData] = React.useState([
    {attractionName:null,attractionDescription:null},
    {attractionName:null,attractionDescription:null},
    {attractionName:null,attractionDescription:null},
    {attractionName:null,attractionDescription:null},
    {attractionName:null,attractionDescription:null},
    {attractionName:null,attractionDescription:null},])//현재 코스에대한 임시저장
  useEffect(() => {

    if(initialData.length>0){
      //if(initialData[currentPoint.course].length>1){
        //var value= initialData[currentPoint.course][0].coursefirstId;
        //console.log(value)
        //console.log(initialData[currentPoint.course].length)
        
       // var sum = value+initialData[currentPoint.course].length-2
        //console.log(sum)
        //for(var i=value;i<=sum;i++){
  
          //const index = initialData[currentPoint.course].findIndex(item => item.attractionId===i)
          //console.log(i)
          
        //}
        //const index = temp.findIndex(item => item.attractionId===parseInt(temp[0].coursefirstId))
      //}
      console.log(initialData)
     
    }

  }, [initialData,currentPoint.course])


  return (
    <>
      <div style={{flexGrow:4,flexBasis:0,display:'flex',alignItems:'center'}}>
        <div style={{position:'absolute', left:50, bottom:100}}>
          <Typography style={{color:"#ffffff"}} variant="h1">{initialData.length > 0 ? initialData[currentPoint.course][currentPoint.attraction].attractionName : null }</Typography>
        </div>
      </div>
      <div style={{flexGrow:1,flexBasis:0,display:'flex',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
        <Timeline align="right">
          {initialData != null && initialData[currentPoint.course].map((item, idx) => {
            if(item.attractionId != null){
              return(
                <TimelineItem>
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
            }
           
          })}
        </Timeline>
      </div>

    </>

  )
}
export default TravelRoute;