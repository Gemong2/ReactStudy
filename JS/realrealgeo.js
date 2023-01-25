const[latitude, setLatitude] = React.useState("");
const[longitude, setLongitude] = React.useState("");

window.addEventListener('load', () => { 
  if(window.navigator.geolocation) {  // geolocation 지원할 경우 현재 위치 get
     window.navigator.geolocation.getCurrentPosition(success,error)
  }
});
//위치 정보는 위도와 경도로 표시되며 success 함수에 전달되는 event 객체의 coords 객체에서 가져올 수 있다.
function success(event) {
  setLatitude(event.coords.latitude)   // 위도
  setLongitude(event.coords.longitude)  // 경도
}

const mapApi = async () => {
    try {
      let response = await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${latitude}&y=${longitude}`,
          {
            headers: {
              Authorization: 'KakaoAK 9e23d1236d9f06dcdaa372789922c025',  
            },
          },
        )
        .then(response => {
          const location = response.data.documents[0];
          console.log({
            si: location.address.region_1depth_name,
            gu: location.address.region_2depth_name,
            dong: location.address.region_3depth_name,
            // locationX: location.address.x,
            // locationY: location.address.y,
          });
        });
    } catch (error) {
      console.log(error.message);
    }
  };