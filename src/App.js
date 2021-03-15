import React from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.min.css";
import Weather from "./app_component/weather.component";

//api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const API_key = "1952cc01bff81ba8bf8650114746df46";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`
    );

    const response = await api_call.json();

    console.log(response);
  };

  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
