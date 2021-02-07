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

  const [sampleData, setSampleData] = React.useState([])//현재 코스에대한 임시저장
  const [currentRoute, setCurrentRoute] = React.useState(null);//현재 코스
  const [backgroundImage,setBackgroundImage] = React.useState(123);//배경화면
  const [attractionImageIdx,setAttractionImageIdx]=React.useState([//현재 코스의 attraction들 번호 임시저장
    {attraction:null},
    {attraction:null},
    {attraction:null},
    {attraction:null},
    {attraction:null},
    {attraction:null},
  ]);
  const [clickIdx,setClickIdx]=React.useState(0);//click시 배경화면관리
  const [clickNum,setClickNum]=React.useState();//click시 배경화면관리를 위한 진짜 id
  const [isClick,setIsClick]=React.useState(false);//배경화면 클릭 유무
  const [attractionImage,setAttractionImage]=React.useState([]) //attraction이미지
  const [attractionName, setAttractionName]=React.useState([]) //attraction이름.
  const [course,setCourse]=React.useState();//코스 선택.
  useEffect(() => {
    loadPlace();
  }, [])

  const loadPlace = async() => {//course에대한 데이터정보.
    const res = await getPlace(place);//여기로 지역을 정함.ex 경주
    console.log("한번본다")
    //console.log(place)
    
    if(res != null && res.data.code === 200){
      //console.log(res.data.data)0: {courseId: 0, courseName: "차분히 유적지 감상이 하고 싶다면", courseImage: "https://ifh.cc/g/7ftWYB.jpg", area: "2", attraction1: "4", …}
      //1: {courseId: 1, courseName: "테마파크와 유적지
      setSampleData(res.data.data);//
    }
  }

  useEffect(() => {//course에대한 이미지 배경화면으로 지정. + 현재 코스에대한 정보 저장.
    if(sampleData.length > 0){
      setBackgroundImage(`url(${sampleData[0].courseImage})`)//course가 여러개 일경우 0번 코스먼저 보이게끔
      setCurrentRoute(sampleData[0])//course가 여러개 일경우 0번 코스먼저 보이게끔
    }
  }, [sampleData])


  useEffect(()=>{
    //if(attractionImage[0]!=null){
    //  setBackgroundImage(`url(${attractionImage[0].image})`)//코스바꿀때만 동작하게끔.
    //  console.log("허거걱")
    //}
    loadAttractionImg();
  },[currentRoute])

  const loadAttractionImg = async() => {
/**현재 코스의 attraction번호들을 저장 */
    setAttractionImageIdx([//일단 초기화.
      {attraction:null},
      {attraction:null},
      {attraction:null},
      {attraction:null},
      {attraction:null},
      {attraction:null},
    ]);
    if(currentRoute!=null){
      setAttractionImageIdx(
        produce(attractionImageIdx, draft => {
          draft[0].attraction=currentRoute.attraction1
          draft[1].attraction=currentRoute.attraction2
          draft[2].attraction=currentRoute.attraction3
          draft[3].attraction=currentRoute.attraction4
          draft[4].attraction=currentRoute.attraction5
          draft[5].attraction=currentRoute.attraction6
        }
      ))
    }
  }
  
  useEffect(()=>{
    if(currentRoute!=null){
      //console.log("attraction어케되냐 제발ㄹ중간점검")
      //console.log(attractionImageIdx)
      setAttractionImage([])
      setAttractionName([])
      setAttractionImage(array => [...array,{id:0,image:currentRoute.courseImage}])//새 코스가 선택되었을시 초기화(코스 이미지 맨 처음추가.)
      setAttractionName(array => [...array,{id:0,name:currentRoute.courseName}])//새 코스가 선택되었을시 초기화(코스 이름 맨 처음추가.)

      attractionImageIdx.forEach((item,idx) =>{
        if (item.attraction!=null){
        /**attraction번호에 따른 attraction image와 attraction name 저장. */
          loadAttraction(item,idx)
        }
      })
    }
  },[attractionImageIdx])

  useEffect(()=>{

    //console.log("이름은")
    //console.log(attractionName)

  },[attractionName])
  const loadAttraction = async(item,idx) => { 
    const res = await getAttraction( item.attraction  );
    if(res != null && res.data.code === 200){
      setAttractionImage(array => [...array,{id:idx+1,image:res.data.data[0].attractionImage} ])
      setAttractionName(array => [...array,{id:idx+1,name:res.data.data[0].attractionName} ])
    }
  }
/**화면 resize */

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    //if(sampleData.length > 0){
      //setCurrentRoute(sampleData[0])
    //}
    window.addEventListener("resize",updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  },[]);

  useEffect(() => {
    if(attractionImage[clickIdx]!=null){
      console.log("동기화를위해2")//그럼 그 인덱스로 이미지를 찾아내서 배경화면 바꿈.
      setBackgroundImage(`url(${attractionImage[clickIdx].image})`)
    }
    
  },[clickIdx]);

  useEffect(() => {
    console.log("동기화를위해1")
    if(clickNum!=null){
      const index = attractionImage.findIndex(item => item.id===clickNum);//원하는 id가 바뀔경우 원하는 id를 찾아 그 인덱스를 가져오게함
      setClickIdx(index)
    }
  },[clickNum]);
  const handleClick=() =>{
    //배경화면 클릭시 배경화면 순서대로 전환
    //console.log("handleClick")
    if(isClick===false){
      setIsClick(true)
      //console.log("오잉")
      setClickNum(1)
    }
    else{
      if(attractionImage.length===(clickNum+1)){
        //console.log("같다")
        setClickNum(0)
      }
      else if(attractionImage.length>(clickNum+1)){
        //console.log("작다")
        setClickNum(1+clickNum)
      }
    }

  }
  
  useEffect(() => {
    //if(course!=null){
    //  setClickNum(0)
    //  setCurrentRoute(course)
    //}
  },[backgroundImage]);
  
  useEffect(() => {
    if(course!=null){
      console.log("anlkaldnladskldanlkdasnkldsalnk")
      console.log(course.courseImage)
      setBackgroundImage(`url(${course.courseImage})`) //바보 이렇게 해줘야지
      
      setClickNum(0)
      setCurrentRoute(course)
    }

  },[course]);

  const handleClickCourse = (item) => {
    console.log("시작")
    setCourse(item)
  }

  if(sampleData.length > 0){
    return (
      <div style={{display:'flex'}}>
      <div style={{position:'absolute', left:50, top:50}}>
        <Paper style={{minWidth:200,minHeight:100,opacity: 0.5}}>
          {sampleData.map((item, idx) => {
            if(item != null){
              return(
                <Button fullWidth onClick={()=>handleClickCourse(item)}>
                {item.courseName}
                </Button>
              )
            }
          })}    
        </Paper>
      </div>
      <div onClick={handleClick} style={{display:'flex',flexDirection:'row',width:width,height:height,backgroundImage:backgroundImage,backgroundSize:'cover'}}>
        <MouseEventContainer/>
        <TravelRoute place={currentRoute} isClick={isClick} clickNum={clickNum} attractionName={attractionName} />
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