import { Typography } from '@material-ui/core'
import React, { useEffect } from 'react';

import KoreaNightView from '../../assets/images/korea_nightView.jpg'
import KoreaPalace from '../../assets/images/korea_palace.jpg'
import KoreaNamsan from '../../assets/images/korea_namsan.jpg'
import KoreaPond from '../../assets/images/korea_pond.jpg'
import produce from 'immer';
import TravelRoute from '../../components/TravelRoute';

import { getPlace } from '../../api'
import { getAttraction } from '../../api';
function useEventListener(eventName, handler, element = document) {
  const savedHandler = React.useRef()

  React.useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  React.useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

const TravelRouteContainer = ({place}) => {
  const [width,setWidth]= React.useState(window.innerWidth);
  const [height,setHeight]= React.useState(window.innerHeight);
  const [sampleData, setSampleData] = React.useState([])
  const [currentRoute, setCurrentRoute] = React.useState(null);
  //const [backgroundImage,setBackgroundImage] = React.useState(sampleData[index]);
  const [backgroundImage,setBackgroundImage] = React.useState();
  const [attractionImageIdx,setAttractionImageIdx]=React.useState([
    {attraction:null},
    {attraction:null},
    {attraction:null},
    {attraction:null},
    {attraction:null},
    {attraction:null},
  ]);
  //const [countIdx,setCountIdx]=React.useState(0);//배경화면 setting시 배경화면 관리
  const [clickIdx,setClickIdx]=React.useState(0);//click시 배경화면관리
  const [isClick,setIsClick]=React.useState(false);//배경화면 클릭 유무
  const [nameIdx,setNameIdx]=React.useState(0);//관광지 이름을 위한 state
  const [attractionImage,setAttractionImage]=React.useState([])
  const [attractionName, setAttractionName]=React.useState([])
  useEffect(() => {
    loadPlace();
  }, [])

  const loadPlace = async() => {
    const res = await getPlace(1);
    if(res != null && res.data.code === 200){
      setSampleData(res.data.data);
    }
  }

  useEffect(() => {//여기서 이미지 설정하는듯,...
    if(sampleData.length > 0){
      setBackgroundImage(`url(${sampleData[0].courseImage})`)
      console.log(sampleData[0].courseImage)
      setCurrentRoute(sampleData[0])
    }
  }, [sampleData])


  useEffect(()=>{
    loadAttractionImg();
  },[currentRoute])


  
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const loadAttractionImg = async() => {

    if(currentRoute!=null){
      console.log(currentRoute)
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

    attractionImageIdx.forEach((item,idx) =>{
      if (item.attraction!=null){
        loadAttraction(item,idx)
      }
    })

  },[attractionImageIdx])

  const loadAttraction = async(item,idx) => {
    const res = await getAttraction( item.attraction  );

    if(res != null && res.data.code === 200){
      setAttractionImage(array => [...array,res.data.data[0].attractionImage ])
      setAttractionName(array => [...array,res.data.data[0].attractionName ])
    }
    
  }
  useEffect(() => {
    //if(sampleData.length > 0){
    //  setCurrentRoute(sampleData[0])
    //}
    
    window.addEventListener("resize",updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  },[]);

  const handleClick=() =>{
    console.log("들어옴")

    console.log(currentRoute)
    setIsClick(true)
    if(attractionImage.length===(clickIdx+1)){
      setBackgroundImage(`url(${attractionImage[clickIdx]})`);
      console.log("눌르거다")
      console.log(attractionImage[clickIdx])
      setClickIdx(0);

    }
    else if(attractionImage.length>(clickIdx+1)){
      setBackgroundImage(`url(${attractionImage[clickIdx]})`);
      console.log("눌르")
      console.log(attractionImage[clickIdx])
      setClickIdx(1+clickIdx);
    }
  }

  useEffect(()=>{
    if(clickIdx===1){
      setNameIdx(0)
    }
    else if(clickIdx===2){
      setNameIdx(1)
    }
    else if(clickIdx===0){
      setNameIdx(2)
    }
  },[clickIdx])
//여기까지 화면 사이즈 쟤기
  var color = '255, 255, 255';
  var outerAlpha = 0.4;
  var innerAlpha = 0.4;
  var innerSize = 8;
  var outerSize = 8;
  var outerScale = 1;
  var innerScale = 1;

  const cursorOuterRef = React.useRef()
  const cursorInnerRef = React.useRef()
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()
  const [coords, setCoords] = React.useState({ x: 0, y: 0 })
  const [isValidArea,setIsValidArea] =React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true)
  const [isActive, setIsActive] = React.useState(false)
  const [isActiveClickable, setIsActiveClickable] = React.useState(false)
  let endX = React.useRef(0)
  let endY = React.useRef(0)

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    if(cursorInnerRef != null){
      setCoords({ x: clientX, y: clientY })
      if(cursorInnerRef.current != null && cursorOuterRef.current != null){
        cursorInnerRef.current.style.top = clientY + 'px'
        cursorInnerRef.current.style.left = clientX + 'px'
        endX.current = clientX
        endY.current = clientY
      }
    }
    
    //console.log("ClientX: "+clientX+"clientY:"+clientY);
    //console.log("width:"+width+"height:"+height);
  }, [])

  const animateOuterCursor = React.useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8
        coords.y += (endY.current - coords.y) / 8
        if(cursorInnerRef.current != null && cursorOuterRef.current != null){
          cursorOuterRef.current.style.top = coords.y + 'px'
          cursorOuterRef.current.style.left = coords.x + 'px'
        }
        
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animateOuterCursor)
    },
    [requestRef] // eslint-disable-line
  )

  React.useEffect(() => requestRef.current = requestAnimationFrame(animateOuterCursor), [animateOuterCursor])
 
  const onMouseDown  = React.useCallback(() => setIsActive(true), [])
  const onMouseUp    = React.useCallback(() => setIsActive(false), [])
  const onMouseEnter = React.useCallback(() => setIsVisible(true), [])
  const onMouseLeave = React.useCallback(() => setIsVisible(false), [])

  useEventListener('mousemove', onMouseMove, document)
  useEventListener('mousedown', onMouseDown, document)
  useEventListener('mouseup', onMouseUp, document)
  useEventListener('mouseenter', onMouseEnter, document)
  useEventListener('mouseleave', onMouseLeave, document)

  React.useEffect(() => {
    if (isActive) {
      if(cursorInnerRef.current != null && cursorOuterRef.current != null){
        cursorInnerRef.current.style.transform = `scale(${innerScale})`
        cursorOuterRef.current.style.transform = `scale(${outerScale})`
        cursorOuterRef.current.style.opacity = 0
      }
    } else {
      if(cursorInnerRef.current != null && cursorOuterRef.current != null){
        cursorInnerRef.current.style.transform = 'scale(6)'
        cursorOuterRef.current.style.transform = 'scale(2)'
        cursorOuterRef.current.style.opacity = 1
      }
    }
  }, [innerScale, outerScale, isActive])

  React.useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`
    }
  }, [innerScale, outerScale, isActiveClickable])

  React.useEffect(() => {
    if (isVisible) {
      if((0<=endX.current)&&(endX.current<=width)&&(0<=endY.current)&&(endY.current<=height)){
        console.log("endX.current: "+endX.current+"width:"+width);
        if(cursorInnerRef.current != null && cursorOuterRef.current != null){
          cursorInnerRef.current.style.opacity = 1
          cursorOuterRef.current.style.opacity = 1
        }
        
      }

    } else {
      if(cursorInnerRef.current != null && cursorOuterRef.current != null){
        cursorInnerRef.current.style.opacity = 0
        cursorOuterRef.current.style.opacity = 0
      }
      
    }
  }, [isVisible])

  React.useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    )
    clickables.forEach((el) => {
      el.style.cursor = 'none'

      el.addEventListener('mouseover', () => {
        setIsActive(true)
      })
      el.addEventListener('click', () => {
        setIsActive(true)
        setIsActiveClickable(false)
      })
      el.addEventListener('mousedown', () => {
        setIsActiveClickable(true)
      })
      el.addEventListener('mouseup', () => {
        setIsActive(true)
      })
      el.addEventListener('mouseout', () => {
        setIsActive(false)
        setIsActiveClickable(false)
      })
    })

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener('mouseover', () => {
          setIsActive(true)
        })
        el.removeEventListener('click', () => {
          setIsActive(true)
          setIsActiveClickable(false)
        })
        el.removeEventListener('mousedown', () => {
          setIsActiveClickable(true)
        })
        el.removeEventListener('mouseup', () => {
          setIsActive(true)
        })
        el.removeEventListener('mouseout', () => {
          setIsActive(false)
          setIsActiveClickable(false)
        })
      })
    }
  }, [isActive])
  const styles = {
    cursor: {
      zIndex: 999,
      position: 'fixed',
      opacity: 1,
      pointerEvents: 'none',
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
    },
    cursorInner: {
      position: 'fixed',
      borderRadius: '50%',
      width: innerSize,
      height: innerSize,
      pointerEvents: 'none',
      backgroundColor: `rgba(${color},${innerAlpha})`,
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out'
    },
    cursorOuter: {
      position: 'fixed',
      //borderRadius: '100%',
      pointerEvents: 'none',
      width: 0,
      height: 0,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',

    }
  }

  if(sampleData.length > 0){
    return (
      <div onClick={handleClick} style={{display:'flex',flexDirection:'row',width:width,height:height,backgroundImage:backgroundImage,backgroundSize:'cover'}}>
        <div ref={cursorOuterRef} style={styles.cursorOuter} >
          <Typography style={{color:'#ffffff'}} variant="caption">click</Typography> 
        </div>
        <div ref={cursorInnerRef} style={styles.cursorInner} />
        <TravelRoute place={currentRoute} isClick={isClick} nameIdx={nameIdx} attractionName={attractionName} />
      </div>
    )
  }else{
    return(
      <div>loading...</div>
    )
  }
}
export default TravelRouteContainer;