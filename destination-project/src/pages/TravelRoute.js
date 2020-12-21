/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectBox from '../components/AriaSelectBox';
import Footer from '../containers/Footer'
import WavesContainer from '../containers/Main/WavesContainer'
const TravelRoute = ({match}) => {

  const {place} = match.params
  return (
    <>
      <AriaSelectBox/> 
      {place}
      <WavesContainer/>
      <div style={{display:'block'}}>
        <Footer/>
      </div>

    </>

  )
}
export default TravelRoute;