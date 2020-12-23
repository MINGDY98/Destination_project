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
import { Button, IconButton, Paper, Typography } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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

  const getKorNameByPlace = () => {
    if(place === "Seoul") return "서울"
    if(place === "Busan") return "부산"
    if(place === "Daegu") return "대구"
    if(place === "Incheon") return "인천"
    if(place === "Gwangju") return "광주"
    if(place === "Daejeon") return "대전"
    if(place === "Ulsan") return "울산"
    if(place === "Gyeonggi") return "경기"
    if(place === "Gangwon") return "강원"
    if(place === "North Chungcheong") return "충청북도"
    if(place === "South Chungcheong") return "충청남도"
    if(place === "North Jeolla") return "전라북도"
    if(place === "South Jeolla") return "전라남도"
    if(place === "North Gyeongsang") return "경상북도"
    if(place === "South Gyeongsang") return "경상남도"
    if(place === "Jeju") return "제주도"
    if(place === "Sejong") return "세종"
    return null
  }

  const sliderRef = React.useRef();
  const [currentData, setCurrentData] = React.useState(getImgByPlace(place))

  React.useEffect(() => {
    setCurrentData(getImgByPlace(place));
  }, [place])

  const NextArrow=({ className, style, onClick })=>{
    return (
      <IconButton onClick={onClick}>
        <ArrowForwardIosIcon />
      </IconButton>
    );
  }
  const PrevArrow=({ className, style, onClick })=>{
    return (
      <IconButton onClick={onClick} style={{display:'inline-block'}}>
        <ArrowBackIosIcon />
      </IconButton>
    );
  }

  const cardSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const handleNext = () => {
    if(sliderRef != null){
      //console.log(sliderRef.current.slickNext());
      sliderRef.current.slickNext()
    }
  }

  const handlePrev = () => {
    if(sliderRef != null){
      //console.log(sliderRef.current.slickPrev());
      sliderRef.current.slickPrev()
    }

  }

  return (
    <div style={{width: width, margin: 24}}>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <PrevArrow  onClick={handlePrev}/>
        <NextArrow onClick={handleNext}/>
      </div>
      <Slider ref={sliderRef} {...cardSettings}>
        {currentData != null && currentData.map((item, idx) => {
          return(
            <div style={{width: width}} key={idx}>
              <div style={{width: width, height:'300', overflow:'auto'}}>
                <Paper style={{overflow:'hidden', marginBottom: 24}}>
                  <img width={width} height="300" src={item} alt={123}/>
                </Paper>
                <Typography variant="caption" style={{display:'block'}} color="textSecondary">{getKorNameByPlace()}</Typography>
                <Typography variant="h6"><strong>코스 이름</strong></Typography>
                <Typography variant="body2" color="textSecondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  Why do we use it?
                </Typography>
                <Button fullWidth style={{backgroundColor:'rgba(0,199,235, 0.5)', color:'#565656', marginTop: 24}}>여행 루트 보기</Button>          
              </div>
            </div>
          )
        })}
      </Slider>
     </div>
  );
}
