/* eslint-disable no-use-before-define */
import React from 'react';
import CourseProcessContainer from '../containers/CourseProcessContainer';
import { getPlace } from '../api'
import { getAttraction } from '../api';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MouseEventContainer from '../containers/MouseEventContainer';
import { CardActionArea, Typography } from '@material-ui/core';

const RoutePage = ({ match }) => {
  const { place } = match.params
  const [initialData, setInitialData] = React.useState([])//현재 코스에대한 임시저장
  const [currentPoint, setCurrentPoint] = React.useState({course:null, attraction:null});//현재 코스와 관광지.
  const [backgroundImage,setBackgroundImage] = React.useState(null);//배경화면

  /**전달 받은 place에 따른 정보 설정 시작 */
  const loadPlace = async() => {
    const res = await getPlace(place);
    if(res != null && res.data.code === 200){      
      const data = []
      const tempCourseList = res.data.data
      for(let i = 0; i < tempCourseList.length; i++){
        const attractionData = [
          {
            attractionId      : null,
            attractionName    : tempCourseList[i].courseName,
            coursefirstId     : tempCourseList[i].attraction1,
            attractionImage   : tempCourseList[i].courseImage,
            courseName        : tempCourseList[i].areaName,
          }
        ]
        const tempAttractionList = [
          tempCourseList[i].attraction1, tempCourseList[i].attraction2,
          tempCourseList[i].attraction3, tempCourseList[i].attraction4,
          tempCourseList[i].attraction5, tempCourseList[i].attraction6,
        ]
        
        for(let idx = 0; idx < tempAttractionList.length; idx++){
          if(tempAttractionList[idx] !== null){
            const res1 = await getAttraction(tempAttractionList[idx]);
            attractionData[idx+1]=res1.data.data[0];
          }
        }
        data.push(attractionData)
      }
      setInitialData(data)
    }
  }

  React.useEffect(() => loadPlace(), [])

  React.useEffect(() => {
    if(initialData.length > 0){
      setCurrentPoint({course : 0, attraction: 0})
    }
  }, [initialData])

  React.useEffect(() => {
    if(currentPoint.course != null ){
      setBackgroundImage(`url(${initialData[currentPoint.course][currentPoint.attraction].attractionImage})`)
    }
  }, [currentPoint])

  const handleClickCourse = (idx) => {
    setCurrentPoint({course:idx, attraction:0})
  }

  const handleClick=() =>{
    if(initialData[currentPoint.course].length -1 > currentPoint.attraction){
      setCurrentPoint({course: currentPoint.course, attraction: currentPoint.attraction + 1})
    }else(
      setCurrentPoint({course: currentPoint.course, attraction: 0})
    )
  }
  
  if(initialData.length > 0 && currentPoint.course != null){
    return (
      <div style={{display:'flex', backgroundImage:backgroundImage, backgroundSize:'cover'}}>
        <div style={{position:'absolute', left:50, top:50}}>
          <Paper style={{backgroundColor:'rgba(0, 0, 0, 0.6)', padding: 20, textAlign:'center'}}>
            <Typography variant="caption" style={{color:'#FFF', display:'block'}}>여행 테마를 선택해보세요</Typography>
            {initialData.map((item, idx) => {
              if(item != null){
                return(
                  <CardActionArea key={idx} onClick={()=>handleClickCourse(idx)} style={{marginTop: 20, marginBottom: 20, display:'block'}}>
                    <Typography variant="body2" style={{color:'#FFF'}}>{item[0].attractionName}</Typography>
                  </CardActionArea>
                )
              }
            })}    
          </Paper>
        </div>
        <div onClick={handleClick} style={{display:'flex', width:'100%', height:'100%'}}>
          <MouseEventContainer />
          <CourseProcessContainer currentPoint={currentPoint} currentCourse={initialData[currentPoint.course]} />
        </div>
      </div>
    )
  }else{
    return(
      <div>loading...</div>
    )
  }
}
export default RoutePage;