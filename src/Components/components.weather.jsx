import React from 'react';

export default function Display(props) {
    // Destructuring
    // const {location , temperature,description,region,country,wind_speed,pressure,precip,humidity,img}=props.weatherData;
    return (
        
        <div className="container p-5">
              <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp P-3">
                    <h2>{props.weatherData.temperature}<sup>o</sup>C , {props.weatherData.description}</h2>
                    <h4>{props.weatherData.location}</h4>
                    <p>{props.weatherData.region}, {props.weatherData.country}</p>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={props.weatherData.img} alt="weather-img" />
                </div>
            </div>
                
            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{props.weatherData.wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Preassure</b>(millibar)</p>
                    <h2>{props.weatherData.pressure}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{props.weatherData.precip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{props.weatherData.humidity}</h2>
                </div>

            </div>
        </div>
    



        </div>
    )
    }