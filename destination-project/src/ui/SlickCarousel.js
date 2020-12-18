import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import red from '../assets/images/red.jpg'
import orange from '../assets/images/orange.jpg'
import yellow from '../assets/images/yellow.jpg'
import green from '../assets/images/green.jpg'
import sky from '../assets/images/sky.jpg'
import blue from '../assets/images/blue.jpg'
import pink from '../assets/images/pink.jpg'
import purple from '../assets/images/purple.jpg'
import black from '../assets/images/black.jpg'
import white from '../assets/images/white.jpg'

const SeoulImage = [red,orange];
const BusanImage = [orange,yellow];
const DaeguImage = [yellow,green];
const IncheonImage = [green,sky];
const GwangjuImage = [sky,blue];
const DaejeonImage = [blue,pink];
const UlsanImage = [pink,purple];
const GyeonggiImage = [purple,black];
const GangwonImage = [black,white];
const NorthChungcheongImage = [white,red];
const SouthChungcheongImage = [pink,white];
const NorthJeollaImage = [pink,purple,black];
const SouthJeollaImage = [purple,black,white];
const NorthGyeongsangImage = [red,orange,white];
const SouthGyeongsangImage = [pink,orange,yellow];
const JejuImage = [black,green,sky];
const SejongImage = [white,sky,black];

export default function SlickCarousel ({place, height, width}){
  const getImgByPlace = () => {
    if(place === "Seoul") return SeoulImage
    if(place === "Busan") return BusanImage
    if(place === "Daegu") return DaeguImage
    if(place === "Incheon") return IncheonImage
    if(place === "Gwangju") return GwangjuImage
    if(place === "Daejeon") return DaejeonImage
    if(place === "Ulsan") return UlsanImage
    if(place === "Gyeonggi") return GyeonggiImage
    if(place === "Gangwon") return GangwonImage
    if(place === "North Chungcheong") return NorthChungcheongImage
    if(place === "South Chungcheong") return SouthChungcheongImage
    if(place === "North Jeolla") return NorthJeollaImage
    if(place === "South Jeolla") return SouthJeollaImage
    if(place === "North Gyeongsang") return NorthGyeongsangImage
    if(place === "South Gyeongsang") return SouthGyeongsangImage
    if(place === "Jeju") return JejuImage
    if(place === "Sejong") return SejongImage
    return null
  }


  const [currentData, setCurrentData] = React.useState(getImgByPlace(place))

  React.useEffect(() => {
    setCurrentData(getImgByPlace(place));
  }, [place])

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

    return (
      <div style={{width: width, margin: 24}}>
        <h2>{place}</h2>
        <Slider {...cardSettings}>
          {currentData != null && currentData.map((item, idx) => {
            return(
              <div style={{width: width}} key={idx}>
                <div style={{width: width, height:'300', overflow:'auto'}}>
                  <img width={width} height="300" src={item} alt={123}/>
                </div>
              </div>
            )
          })}
        </Slider>
        
      </div>
    );
  }
