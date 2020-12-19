/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import MapContainer from '../../containers/Main/MapContainer';
import Footer from '../../containers/Footer'
import WaveContainer from '../../containers/Main/WaveContainer';

const Main = () => {

  return (
    <>
      <AriaSelectBox/> 
      <MapContainer/>
      <WaveContainer/>
      <div style={{display:'block'}}>
        <Footer/>
      </div>

    </>

  )
}
export default Main;