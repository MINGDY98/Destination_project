import React from 'react';

import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { getAttraction } from '../api';

const Attraction = ({ attractionId }) => {
  const [data, setData] = React.useState(null)
  React.useEffect(()=> {
    loadAttraction()
  }, [])

  const loadAttraction = async() => {
    const res = await getAttraction( attractionId );
    if(res != null && res.data.code === 200){
      setData(res.data.data[0]);
    }
  }
  if(data === null){
    return(
      <div>
        Loading...
      </div>
    )
  }else{  
    return(
      <div>
        <Typography style={{color:"#ffffff"}} variant="subtitle2"><strong>{data.attractionName}</strong></Typography>
        <Typography style={{color:"#ffffff"}} variant="subtitle2">{data.attractionDescription}</Typography>
      </div>
    )
  }
}


const TravelRoute = ({ place, isClick, nameIdx,attractionName }) => {
  const [data, setData] = React.useState(null)
  const [courseName,setCourseName]=React.useState(null)
  React.useEffect(() => {
    
    if(place != null){
      setCourseName(place.courseName)
      setData([
        place.attraction1,
        place.attraction2,
        place.attraction3,
        place.attraction4,
        place.attraction5,
        place.attraction6,
      ])
    }

  }, [place])
  
  return (
    <>
      <div style={{flexGrow:4,flexBasis:0,display:'flex',alignItems:'center'}}>
        <div style={{position:'absolute', left:50, bottom:100}}>
          <Typography style={{color:"#ffffff"}} variant="h1">{isClick===true ? attractionName[nameIdx] : courseName}</Typography>
        </div>
      </div>
      <div style={{flexGrow:1,flexBasis:0,display:'flex',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
        <Timeline align="right">
          {data != null && data.map((item, idx) => {
            if(item != null){
              return(
                <TimelineItem>
                  <TimelineSeparator >
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{paddingBottom:60}}>
                    <Attraction attractionId={item} />
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