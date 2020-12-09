/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import Map from '../../containers/Main/Map';
import Footer from '../../containers/Footer'
const Main = () => {

  return (
    <>
      <AriaSelectBox/>
      <Map/>
      <div style={{minHeight: '50vh'}} />
      <Footer/>
    </>

  )
}
export default Main;