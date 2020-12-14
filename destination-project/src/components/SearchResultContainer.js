// MapContainer.js

import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  useEffect(() => {
    /*
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
*///map부분
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch( searchPlace, placesSearchCB); 
    /*
    searchPlaces();
    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces() {

      var keyword = document.getElementById('keyword').value;

      if (!keyword.replace(/^\s+|\s+$/g, '')) {
          alert('키워드를 입력해주세요!');
          return false;
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch( keyword, placesSearchCB); 
    }
    */
// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        var listEl = document.getElementById('placesList');
        var menuEl = document.getElementById('menu_wrap');
        var fragment = document.createDocumentFragment(); 
        //let bounds = new kakao.maps.LatLngBounds();//map 부분

        // 검색 결과 목록에 추가된 항목들을 제거합니다
        //if(listEl !==null){
          removeAllChildNods(listEl);
        //}
        

        for (let i = 0; i < data.length; i++) {
          //displayMarker(data[i]);//map 부분
          //bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));//map 부분
          var itemEl = getListItem(i, data[i]); // 검색 결과 항목 Element를 생성합니다
          fragment.appendChild(itemEl);
        }

            // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
        listEl.appendChild(fragment);
        menuEl.scrollTop = 0;

        //map.setBounds(bounds);//map 부분

        // 페이지 번호를 표출합니다
        displayPagination(pagination);

      }else if (status === kakao.maps.services.Status.ZERO_RESULT) {

        //alert('검색 결과가 존재하지 않습니다.');
        //return;

      } else if (status === kakao.maps.services.Status.ERROR) {

          alert('검색 결과 중 오류가 발생했습니다.');
          return;

      }
    }
    // 검색결과 항목을 Element로 반환하는 함수입니다
    function getListItem(index, places) {

      var el = document.createElement('li'),
      itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                  '<div class="info">' +
                  '   <h5>' + places.place_name + '</h5>';

      if (places.road_address_name) {
          itemStr += '    <span>' + places.road_address_name + '</span>' +
                      '   <span class="jibun gray">' +  places.address_name  + '</span>';
      } else {
          itemStr += '    <span>' +  places.address_name  + '</span>'; 
      }
                  
        itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                  '</div>';           

      el.innerHTML = itemStr;
      el.className = 'item';

      return el;
    }

        // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
          fragment = document.createDocumentFragment(),
          i; 

      // 기존에 추가된 페이지번호를 삭제합니다
      while (paginationEl.hasChildNodes()) {
          paginationEl.removeChild (paginationEl.lastChild);
      }

      for (i=1; i<=pagination.last; i++) {
          var el = document.createElement('a');
          el.href = "#";
          el.innerHTML = i;

          if (i===pagination.current) {
              el.className = 'on';
          } else {
              el.onclick = (function(i) {
                  return function() {
                      pagination.gotoPage(i);
                  }
              })(i);
          }

          fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }
     
     /*//map부분
    function displayMarker(place) {//addmarker부분
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }
    */
    
        // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    function removeAllChildNods(el) {   
      while (el.hasChildNodes()) {
          el.removeChild (el.lastChild);
      }
    }
  }, [searchPlace]);

    return (
      <>
      
      <div style={{display:'flex',position:'relative'}} >
        {/**         <div id='myMap' style={{
            width: '500px', 
            height: '500px'
        }}></div>*/}

        <div id='menu_wrap'style={{position:'absolute' ,top:0 }}></div>
        <div id='placesList'style={{position:'absolute' ,top:0 }}></div>
        <div id='pagination'style={{position:'absolute' ,bottom:0 }}></div>
        
      </div>
      </>
    );
}

export default MapContainer;