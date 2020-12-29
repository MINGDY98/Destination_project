import React, { useEffect } from 'react';

import KoreaNightView from '../../assets/images/korea_nightView.jpg'
import KoreaPalace from '../../assets/images/korea_palace.jpg'
import KoreaNamsan from '../../assets/images/korea_namsan.jpg'
import KoreaPond from '../../assets/images/korea_pond.jpg'

import TravelRoute from '../../components/TravelRoute';

const TravelRouteContainer = ({place}) => {

  const canvasContainerRef = React.createRef()
  const [width,setWidth]= React.useState(window.innerWidth);
  const [height,setHeight]= React.useState(window.innerHeight);
  const sampleData=[    
    'url('+KoreaNightView+')',
    'url('+KoreaPalace+')',
    'url('+KoreaNamsan+')',
    'url('+KoreaPond+')'
  ]
  const [index, setIndex]=React.useState(0);
  const [backgroundImage,setBackgroundImage] = React.useState(sampleData[index]);
  
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize",updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  },[index]);

  const handleClick=() =>{
    if(sampleData.length===(index+1)){
      setBackgroundImage(sampleData[0]);
      setIndex(0);
    }
    else if(sampleData.length>(index+1)){
      setBackgroundImage(sampleData[index+1]);
      setIndex(1+index);
    }

  }

  return (
    <div onClick={handleClick} style={{display:'flex',flexDirection:'row',width:width,height:height,backgroundImage:backgroundImage,backgroundSize:'cover'}}>
      <TravelRoute place={place}/>
    </div>

  )
}
export default TravelRouteContainer;