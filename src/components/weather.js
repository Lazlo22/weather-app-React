import React from 'react'; 

function Weather (props) {
    return(
        <div>
         {props.city_name &&
           <div className="all-weather">
             <div className="less-weather">
              <p className="weather-info first">{props.city_name}</p>
              <p className="weather-info  second">{Math.round(props.temperature) - 273}<sup> °</sup>C</p>
              </div>
              <p className="weather-info">pressure {props.pressure} p</p>
              <p className="weather-info">{props.humidity > 60 ? "high humidity" : "not high humidity"}</p>
              <p className="weather-info">{props.clouds > 40 ? "cloudy" : "not cloudy"}</p>
              <p className="weather-info">{props.wind > 5 ? "windy" : "not windy"}</p>
              </div>
         }
              <p className="err">{props.err}</p>
        </div>
    );
}

export default Weather;