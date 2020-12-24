/* eslint-disable no-use-before-define */
import React,{ useEffect } from 'react';
import AriaSelectContainer from '../../containers/Main/AriaSelectContainer'
import MapContainer from '../../containers/Main/MapContainer';
import Footer from '../../containers/Footer'
import WavesContainer from '../../containers/Main/WavesContainer';


const Main = () => {
  const [width,setWidth]= React.useState(window.innerWidth);
  const [height,setHeight]= React.useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize",updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <div>
      <AriaSelectContainer width={width} height={height}/>
      <MapContainer width={width} height={height}/>
    </div>

  )
}
export default Main;