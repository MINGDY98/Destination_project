/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectContainer from '../../containers/Main/AriaSelectContainer'
import MapContainer from '../../containers/Main/MapContainer';
import Footer from '../../containers/Footer'
import WavesContainer from '../../containers/Main/WavesContainer';


const Main = () => {

  return (
    <div>
      <AriaSelectContainer/>
      <MapContainer/>
    </div>

  )
}
export default Main;