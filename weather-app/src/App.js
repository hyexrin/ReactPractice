import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재 위치 날씨 출력
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태 
// 3. 5개의 버튼 (1개는 현재 위치, 4개는 설정 위치)
// 4. 도시 버튼을 클릭할 때 마다 도시별 날씨 정보 출력
// 5. 현재 위치 기반 날씨 버튼을 클릭하면 다시 현재 위치 기반 날씨 정보 출력
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.

function App() {

  const [ weather, setWeather] = useState(null);
  const [ city, setCity ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const cities = ['paris', 'new york', 'tokyo', 'seoul'];
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95117d9d89e7ecd1bb907b487347da6f&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95117d9d89e7ecd1bb907b487347da6f&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(()=>{
    if(city==''){
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);
  
  return (
    <div>
      {loading?
      (
        <div className='container' ><ClipLoader color='#f88c6b' loading={loading} size={150} /></div>
      ):(
      <div className='container' >
        <WeatherBox weather = {weather} />
        <WeatherButton cities = {cities} setCity = {setCity}/>
      </div>)}
      
    </div>
  );
}

export default App;
