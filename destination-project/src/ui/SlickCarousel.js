import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pink from '../assets/images/pink.jpg'

export default function SlickCarousel ({place}){
  const NextArrow=({ className, style, onClick })=>{
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "#FF0000",zIndex:3 }}
        onClick={onClick}
      >
      </div>
    );
  }

  const cardSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <NextArrow />,
    variableWidth: true,
    centerMode: true,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...cardSettings} style={{width:550, height: 100}}>
        <div style={{ width: 300 ,height:100}}>
          <h3><img style={{width:300, height:100}} src={pink} alt="pink"/></h3>
        </div>
        <div style={{ width: 300 ,height:100}}>
          <h3>2</h3>
        </div>
      </Slider>
    </div>
  );

}