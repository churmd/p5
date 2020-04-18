import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<div>
			<h1>P5 App</h1>
			<p>
				<Link to={"/flockingSimulation"}>Flocking Simulation</Link>
			</p>
			<p>
				<Link to={"/snowflakeGenerator"}>Snowflake Generator</Link>
			</p>
			<p>
				<Link to={"/moduloTimesTable"}>Modulo Times Table Circle</Link>
			</p>
			<p>
				<Link to={"/lissajousCurveTable"}>Lissajous Curve Table</Link>
			</p>
		</div>
		
	);
}

export default App;
