import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
	const [city, setCity] = useState("");
	const [loaded, setLoaded] = useState(false);
	let [weather, setWeather] = useState({});

	function showTemperature(response) {
		setLoaded(true);
		setWeather({
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description,
		});
	}
	function handleSubmit(event) {
		event.preventDefault();
		let units = "metric";
		let apiKey = "055aa66e068d66b797d53ba8e4aaef23";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

		axios.get(apiUrl).then(showTemperature);
	}

	function changeCity(event) {
		setCity(event.target.value);
	}

	let form = (
		<form onSubmit={handleSubmit}>
			<input type="search" placeholder="Type city name" onChange={changeCity} />
			<input type="submit" value="Search" />
		</form>
	);
	if (loaded) {
		return (
			<div className="WeatherSearch">
				{form}
				<ul>
					<li>Temperature: {Math.round(weather.temperature)}°C</li>
					<li>Description: {weather.description}</li>
					<li>Humidity: {weather.humidity}%</li>
					<li>Wind: {weather.wind}km/h</li>
					<li>
						<img src={weather.icon} alt={weather.description} />
					</li>
				</ul>
			</div>
		);
	} else {
		return form;
	}
}
