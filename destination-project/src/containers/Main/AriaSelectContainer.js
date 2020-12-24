import React, { useEffect } from 'react';
import AriaSelectBox from '../../components/AriaSelectBox';
import KoreaNamsan from '../../assets/images/korea_namsan.jpg'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const AriaSelectContainer = ({width,height}) => {
{/**


  const [width,setWidth]= React.useState(window.innerWidth);
  const [height,setHeight]= React.useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize",updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
*/}

 

  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',width:width,height:height,backgroundImage:'url('+KoreaNamsan+')',backgroundSize:'cover'}}>
       <div style={{flexGrow:2,flexBasis:0,display:'flex',alignItems:'center'}}>
          <div style={{display:'flex',flexDirection:'column',paddingLeft:100}}>
            <Typography variant="h1" style={{color:'#ffffff',fontStyle:'oblique'}}>한국 여행</Typography>
            <Typography variant="h1" style={{color:'#ffffff',fontStyle:'oblique'}}> 길잡이</Typography>
          </div>
        </div>
        <div style={{flexGrow:4,flexBasis:0,display:'flex',alignItems:'center'}}>
          < AriaSelectBox/>
        </div>
    </div>

  )
}
export default AriaSelectContainer;