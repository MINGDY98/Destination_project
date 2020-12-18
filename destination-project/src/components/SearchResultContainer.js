import { CardActionArea, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  const [data,  setData] = React.useState([]);
  
  useEffect(() => {
    try{
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch( searchPlace, placesSearchCB); 
      
      function placesSearchCB(_data, status, _pagination) {
        
        if (status === kakao.maps.services.Status.OK) {
          setData(_data);
          
        }else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          //alert('검색 결과가 존재하지 않습니다.');
          return;
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
        }else{
          setData([])
        }
      } 
    }catch(e){

    }
  }, [searchPlace]);

  return (
    <div>
      {data.map((item, idx) => {
        return(
          <Link to={`/routes/${item.place_name}`}  style={{ color: '#000000',textDecoration: 'none' }}>
          <div key={idx}>
              <CardActionArea style={{padding: 9, borderBottom: '1px solid #eee'}}>
                <Typography>{item.place_name}</Typography>
                <Typography color="textSecondary" variant="body2">{item.road_address_name}</Typography>
              </CardActionArea>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default MapContainer;