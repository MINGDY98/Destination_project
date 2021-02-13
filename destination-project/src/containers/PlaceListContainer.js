import React from 'react'
import Button from '@material-ui/core/Button';
import { Container, Typography } from '@material-ui/core'
import { getPlaceName } from '../api'

const PlaceListContainer = ({ clicked }) => {
  const [placeName, setPlaceName] = React.useState([]);

  React.useEffect(()=>{
    if(clicked){
      setPlaceName([])
      loadPlaceName();
    }
  },[clicked])

  const loadPlaceName = async() => {//course에대한 데이터정보.
    const res = await getPlaceName(clicked);//여기로 지역을 정함.
    if(res != null && res.data.code === 200){
      for(let i =0; i< res.data.data.length;i++){
        setPlaceName(array=>[...array,res.data.data[i].areaName])
      }
    }
  }

  const handleClickArea = (item) => {
    window.location.href=`/routes/${item}`
  }

  if(!clicked){
    return(
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', height:'100%', borderRadius:6, border:'1px solid #FFF', borderColor:'#FFF'}}>
        <Typography style={{color:'#FFF'}}>
          지역을 선택해주세요.
        </Typography>
      </div>
    )
  }else{
    return(
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', height:'100%', borderRadius:6, border:'1px solid #FFF', borderColor:'#FFF'}}>
        <Container>
            {placeName.map((item, idx) => {
              return(            
                <Button key={idx} style={{color:'#FFF', cursor:'pointer'}} onClick={()=>handleClickArea(item)}>
                  {item}
                </Button>
              )
            })}
        </Container>
      </div>
    )
  }
}

export default PlaceListContainer