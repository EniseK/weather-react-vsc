import "./App.css";
import React from "react";
import WeatherSearch from "./WeatherSearch";
function App() {
	return (
		<div className="Weather App">
			<header className="App-header">
				<h1>Weather Search Engine</h1>
				<WeatherSearch />
				<br />
				<footer>
					This project was coded by Enise Kizilaslan and is {""}
					<a
						href="https://github.com/EniseK/weather-react-vsc"
						target="_blank"
						rel="noreferrer"
					>
						open-sourced on GitHub
					</a>
				</footer>
			</header>
		</div>
	);
}

export default App;
