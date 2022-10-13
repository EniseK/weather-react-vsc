import "./App.css";
import React from "react";
import WeatherSearch from "./WeatherSearch";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Weather Search Engine</h1>
				<WeatherSearch />
				<br />
				<a href="https://github.com/EniseK/weather-react-vsc">
					<small>Project link to GitHub</small>
				</a>
			</header>
		</div>
	);
}

export default App;
