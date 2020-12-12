/* eslint-disable no-use-before-define */
import React from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
//import Map from '../../containers/Main/Map';
import Footer from '../../containers/Footer'
import TextTitle from '../../ui/TextTitle'
import PrimaryButton from '../../ui/PrimaryButton'
import PrimaryPaper from '../../ui/PrimaryPaper'
import TextDivider from '../../ui/TextDivider'
import PrimaryCard from '../../ui/PrimaryCard'
const Main = () => {

  return (
    <>
      <AriaSelectBox/>
      <TextTitle title ={'안녕하세요'} />
      <PrimaryButton name={'기본'} onClick={null}/>
      <PrimaryPaper />
      <TextDivider/>
      <PrimaryCard/>
      <div style={{minHeight: '80vh'}} />
      <div style={{display:'block'}}>
        <Footer/>
      </div>

    </>

  )
}
export default Main;