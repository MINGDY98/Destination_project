/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import MapContainer from '../../containers/Main/MapContainer';
import Footer from '../../containers/Footer'
//import TextTitle from '../../ui/TextTitle'
//import PrimaryButton from '../../ui/PrimaryButton'
//import PrimaryPaper from '../../ui/PrimaryPaper'
//import TextDivider from '../../ui/TextDivider'
//import PrimaryCard from '../../ui/PrimaryCard'
const Main = () => {

  return (
    <>
      <AriaSelectBox/>
      <div style={{minHeight: '30vh'}} />
      <MapContainer/>
      <div style={{minHeight: '80vh'}} />
      <div style={{display:'block'}}>
        <Footer/>
      </div>

    </>

  )
}
export default Main;