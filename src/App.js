import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const KEY_API = '02406ee6b8841b0c1c61400a13435f3b';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        pressure: undefined,
        wind: undefined,
        humidity: undefined,
        clouds: undefined,
        err: undefined,
        check: false
    };

    getWeather =  async (e) => {
        e.preventDefault();
        const city_target = e.target.elements.city.value;
        const inp = document.querySelector('.weather-input');

        if(!this.state.check) {
            inp.classList.toggle('wrong');
        }
        
        if(city_target){
            const url_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_target}&appid=${KEY_API}`);
            const data_response = await url_api.json();
            this.setState({
                temp: data_response.main.temp,
                city: data_response.name,
                pressure: data_response.main.pressure,
                wind: data_response.wind.speed,
                humidity: data_response.main.humidity,
                clouds: data_response.clouds.all,
                err: "",
                check: true
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                pressure: undefined,
                wind: undefined,
                humidity: undefined,
                clouds: undefined,
                err: "ENTER CITY NAME",
                check: false
            });
        }
    }

    render(){
        return(
            <div className="app-bg">
            <div className="faded-bg"></div>
            <div className="container-main">
                <Info />
                <div className="formWeather-flex">
                <Form weatherMethod={this.getWeather} />
                <Weather
                    temperature={this.state.temp}
                    city_name={this.state.city}
                    pressure={this.state.pressure}
                    wind={this.state.wind}
                    humidity={this.state.humidity}
                    clouds={this.state.clouds}
                    err={this.state.err}
                />
                </div>
            </div>
            </div>
        );
    }
}

export default App;