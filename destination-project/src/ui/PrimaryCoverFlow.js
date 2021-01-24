import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import korea_namsan from '../assets/images/korea_namsan.jpg';
import korea_nightView from '../assets/images/korea_nightView.jpg';
import korea_palace from '../assets/images/korea_palace.jpg';
import korea_pond from '../assets/images/korea_pond.jpg';
import PrimaryCard from './PrimaryCard';
export default function PrimaryCoverFlow(){
  const [active, setActive] = React.useState(0);

  const fn = () =>{
    console.log("happy");

  }
  return (
    <div>
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
        active={active}
        style={{backgroundColor:'#FFF'}}
      >
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
        
        </div>
        <PrimaryCard place={"happy"}/>
        <img src={korea_namsan} alt='Album two' data-action="http://passer.cc"/>
        <img src={korea_nightView} alt='Album three' data-action="https://doce.cc/"/>
        <img src={korea_palace} alt='Album four' data-action="http://tw.yahoo.com"/>
        <img src={korea_pond} alt='Album five' data-action="http://www.bbc.co.uk"/>
      </Coverflow>
    </div>
  );
}