/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import MapContainer from '../../containers/Main/MapContainer';
import Footer from '../../containers/Footer'
import WavesContainer from '../../containers/Main/WavesContainer';

const Main = () => {

  return (
    <>
      <AriaSelectBox/> 
      <MapContainer/>
      <WavesContainer/>
      <div style={{display:'block'}}>
        <Footer/>
      </div>

    </>

  )
}
export default Main;