function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")

}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

var center = new naver.maps.LatLng(lat, lon);

var map = new naver.maps.Map('map', {
    center: center,
    zoom: 15
});


naver.maps.Service.reverseGeocode({
    location: new naver.maps.LatLng(lat, lon),
}, function(status, response) {
    if (status !== naver.maps.Service.Status.OK) {
        return alert('Something wrong!');
    }

    var result = response.result, // 검색 결과의 컨테이너
        items = result.items; // 검색 결과의 배열
        alert('검색 위,경도: ' + result.userquery);
        alert('지번 주소: ' + items[0].address);
        alert('도로명 주소: ' + items[1].address);

    // do Something
});


// $.ajax({
// 	url : 'https://dapi.kakao.com/v2/local/geo/coord2address.json?x=' + lan +'&y=' + lat,
//     type : 'GET',
//     headers : {
//       'Authorization' : 'KakaoAK {REST_API_KEY}'
//     },
//     success : function(data) {
//       console.log(data);
//       }
//     },
//     error : function(e) {
//       console.log(e);
//     }
//   );

// onGeoOK({})

/* https://api.openweathermap.org/data/2.5/weather?lat=37.5128064&lon=127.0284288&appid={api_key}&units=metric

https://openweathermap.org/current */


// var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
//     mapOption = {
//         center: new kakao.maps.LatLng(lat, lan), // 지도의 중심좌표
//         level: 1 // 지도의 확대 레벨
//     };  

// // 지도를 생성합니다    
// var map = new kakao.maps.Map(mapContainer, mapOption); 

// // 주소-좌표 변환 객체를 생성합니다
// var geocoder = new kakao.maps.services.Geocoder();

// var marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
//     infowindow = new kakao.maps.InfoWindow({zindex:1}); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

// // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
// searchAddrFromCoords(map.getCenter(), displayCenterInfo);

// // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
// kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
//     searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
//         if (status === kakao.maps.services.Status.OK) {
//             var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
//             detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
            
//             var content = '<div class="bAddr">' +
//                             '<span class="title">법정동 주소정보</span>' + 
//                             detailAddr + 
//                         '</div>';

//             // 마커를 클릭한 위치에 표시합니다 
//             marker.setPosition(mouseEvent.latLng);
//             marker.setMap(map);

//             // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
//             infowindow.setContent(content);
//             infowindow.open(map, marker);
//         }   
//     });
// });

// // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
// kakao.maps.event.addListener(map, 'idle', function() {
//     searchAddrFromCoords(map.getCenter(), displayCenterInfo);
// });

// function searchAddrFromCoords(coords, callback) {
//     // 좌표로 행정동 주소 정보를 요청합니다
//     geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
// }

// function searchDetailAddrFromCoords(coords, callback) {
//     // 좌표로 법정동 상세 주소 정보를 요청합니다
//     geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
// }

// // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
// function displayCenterInfo(result, status) {
//     if (status === kakao.maps.services.Status.OK) {
//         var infoDiv = document.getElementById('centerAddr');

//         for(var i = 0; i < result.length; i++) {
//             // 행정동의 region_type 값은 'H' 이므로
//             if (result[i].region_type === 'H') {
//                 infoDiv.innerHTML = result[i].address_name;
//                 break;
//             }
//         }
//     }    
// }