import { Typography } from '@material-ui/core'
import React, { useEffect } from 'react';
import produce from 'immer';
import TravelRoute from '../../components/TravelRoute';
import { getPlace } from '../../api'
import { getAttraction } from '../../api';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MouseEventContainer from '../MouseEventContainer';

const TravelRouteContainer = ({place}) => {
  const [width,setWidth]= React.useState(window.innerWidth);
  const [height,setHeight]= React.useState(window.innerHeight);

  const [initialData, setInitialData] = React.useState([])//현재 코스에대한 임시저장
  const [currentPoint, setCurrentPoint] = React.useState({course:0,attraction:0});//현재 코스와 관광지.
  const [backgroundImage,setBackgroundImage] = React.useState(123);//배경화면
  const [isClick,setIsClick]=React.useState(false);//배경화면 클릭 유무

  /**화면 resize */
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize",updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  },[]);
/**전달 받은 place에 따른 정보 설정 시작 */
  useEffect(() => {
    loadPlace();
  }, [])

  const loadPlace = async() => {
    const res = await getPlace(place);
    if(res != null && res.data.code === 200){      
      const data = []
      const tempCourseList = res.data.data
      tempCourseList.forEach(async course => {
        const attractionData = [
          {
            attractionId:null,
            attractionName : course.courseName,
            coursefirstId : course.attraction1,
            attractionImage : course.courseImage,
            courseName : course.areaName
          }
        ]
        const tempAttractionList = [
          course.attraction1,
          course.attraction2,
          course.attraction3,
          course.attraction4,
          course.attraction5,
          course.attraction6,
        ]
        tempAttractionList.forEach(async (item, idx) => {
          if(item !== null){
            const res1 = await getAttraction(item);
            attractionData.push(res1.data.data[0])
          }
        })
        data.push(attractionData)
      })
      console.log(data)
      setInitialData(data)
    }
  }

  useEffect(() => {//course에대한 이미지 배경화면으로 지정. + 현재 코스에대한 정보 저장.
    if(initialData.length > 0){ 
      setBackgroundImage(`url(${initialData[0][0].attractionImage})`)//course가 여러개 일경우 0번 코스먼저 보이게끔
      setCurrentPoint({...currentPoint,course:0})
    }
  }, [initialData])

  useEffect(() => {//course에대한 이미지 배경화면으로 지정. + 현재 코스에대한 정보 저장.
    console.log(currentPoint)
  }, [currentPoint])

  const handleClick=() =>{
    /**배경화면 클릭시 배경화면 순서대로 전환*/
    const temp=initialData[currentPoint.course]
    if(isClick===false){
      /**처음 클릭시 코스가 첫 화면이니 손수 1번 관광지로 옮겨줌. */
      setIsClick(true)
      const index = temp.findIndex(item => item.attractionId===parseInt(temp[0].coursefirstId))//4의 index
      setBackgroundImage(`url(${temp[index].attractionImage})`)
      setCurrentPoint({...currentPoint,attraction:index})//index는 1이 됨.. 첫번째 배열일경우.
    }
    else{
      //console.log(temp[parseInt(currentPoint.attraction)].attractionId)
      //console.log(temp[0].coursefirstId)
      //console.log(temp[parseInt(currentPoint.attraction)].attractionId-temp[0].coursefirstId)
      if((temp.length-2)===(temp[parseInt(currentPoint.attraction)].attractionId-temp[0].coursefirstId)){
        /**번호가 끝번호일경우 0번으로 돌려줌 */
        console.log("왔다.")
        setBackgroundImage(`url(${temp[0].attractionImage})`)
        setCurrentPoint({...currentPoint,attraction:0})
  
      }
      else if((temp.length-2)>temp[parseInt(currentPoint.attraction)].attractionId-temp[0].coursefirstId){
        /**번호가 끝이 아닐경우 다음 관광지로 옮겨주되, 0번일경우는 코스이니, 1번 관광지로 손수 옮겨줌 */
        if(parseInt(currentPoint.attraction)===0){
          const index = temp.findIndex(item => item.attractionId===parseInt(temp[0].coursefirstId))
          setBackgroundImage(`url(${temp[index].attractionImage})`)
          setCurrentPoint({...currentPoint,attraction:index})
        }
        else{
          const index = temp.findIndex(item => item.attractionId===(temp[parseInt(currentPoint.attraction)].attractionId+1))

          setBackgroundImage(`url(${temp[index].attractionImage})`)
          setCurrentPoint({...currentPoint,attraction:index})
        }
      }
      
    }
  }
  
  const handleClickCourse = (item) => {
    const index = initialData.findIndex(init => init[0]===item[0])//4의 index
    console.log(index)
    setBackgroundImage(`url(${initialData[index][0].attractionImage})`)
    setCurrentPoint({...currentPoint,course:index,attraction:0})
  }

  if(initialData.length > 0){
    return (
      <div style={{display:'flex'}}>
        <div style={{position:'absolute', left:50, top:50}}>
          <Paper style={{minWidth:200,minHeight:100,opacity: 0.5}}>
            {initialData.map((item, idx) => {
              if(item != null){
                return(
                  <Button fullWidth onClick={()=>handleClickCourse(item)}>
                  {item[0].attractionName}
                  </Button>
                )
              }
            })}    
          </Paper>
        </div>
        <div onClick={handleClick} style={{display:'flex',flexDirection:'row',width:width,height:height,backgroundImage:backgroundImage,backgroundSize:'cover'}}>
          <MouseEventContainer/>
          <TravelRoute isClick={isClick}currentPoint={currentPoint} initialData={initialData}/>
        </div>
      </div>
    )
  }else{
    return(
      <div>loading...</div>
    )
  }
}
export default TravelRouteContainer;