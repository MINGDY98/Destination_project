/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import MapContainer from '../../containers/Main/MapContainer';
import Footer from '../../containers/Footer'
//import PrimarySelectBox from '../../ui/PrimarySelectBox'
const Main = () => {

  return (
    <>{/**<PrimarySelectBox/>
     * */}
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