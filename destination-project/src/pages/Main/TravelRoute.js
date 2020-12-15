/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import Footer from '../../containers/Footer'

const TravelRoute = ({match}) => {

  const {place} = match.params
  return (
    <>
      <AriaSelectBox/> 
      <div style={{minHeight: '30vh'}} />
      {place}
      <div style={{minHeight: '80vh'}} />
      <div style={{display:'block'}}>
        <Footer/>
      </div>

    </>

  )
}
export default TravelRoute;