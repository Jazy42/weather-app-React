import React from 'react';
import Axios from 'axios';
import Display from "./Components/components.weather.jsx"
import Navbar from "./Components/navbar.jsx"
import "bootstrap/dist/css/bootstrap.min.css"


class App extends React.Component {
    //state
    state={

      coords:{
        latitude:45,
        longitude:60
      },
      data:{
        location:"",
        temperature: "",
        description: "",
        region: "",
        country: "",
        wind_speed: "",
        pressure: "",
        precip: "",
        humidity: "",
        img: ""
      },
      inputData: ""


    }


  componentDidMount() {     // Method to mount to elements to the DOM
    // this will get the device location
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position)=>{
        let newcoordinates= {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({coordinates:newcoordinates});
        // Calling the API
        Axios.get(`http://api.weatherstack.com/current?access_key=065a6db729af52ce22afad7c9a1ba178&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
            let weatherData= {
              location:res.data.location.class,
              temperature: res.data.current.temperature,
              description: res.data.current.weather_descriptions[0],
              region: res.data.location.region,
              country: res.data.location.country,
              wind_speed: res.data.current.wind_speed,
              pressure: res.data.current.pressure,
              precip: res.data.current.precip,
              humidity: res.data.current.humidity,
              img: res.data.current.weather_icons
            }
            this.setState({data:weatherData });

        })

        })
   } else {
    }
  }
  ///Track the change in the input field
change = (value) =>{
  this.setState({inputData:value})
}
  
changeWeather = (event)=>{
  event.preventDefault();
//api call
Axios.get(`http://api.weatherstack.com/current?access_key=065a6db729af52ce22afad7c9a1ba178&query=${this.state.inputData}`).then(res => {
  let weatherData={
    location:res.data.location.class,
    temperature: res.data.current.temperature,
    description: res.data.current.weather_descriptions[0],
    region: res.data.location.region,
    country: res.data.location.country,
    wind_speed: res.data.current.wind_speed,
    pressure: res.data.current.pressure,
    precip: res.data.current.precip,
    humidity: res.data.current.humidity,
    img: res.data.current.weather_icons
  }
  this.setState({data:weatherData });


})


}


  render(){
    return (
      <div className="App">
        <div className="container">
          <Navbar changeWeather={this.changeWeather} changeRegion={this.change}/>
         < Display weatherData={this.state.data} /> 
      
      </div>
      </div>
      
    );
    
  }
  
}
export default App;
