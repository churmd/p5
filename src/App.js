import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import SketchTile from "./components/sketchTile/SketchTile";
import matrixRainImag from "./images/matrixRain.png";

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
				<Link to={"/matrixRain"}>Matrix Rain</Link>
			</p>
			<p>
				<Link to={"/lissajousCurveTable"}>Lissajous Curve Table</Link>
			</p>
			<p>
				<Link to={"/maurerRose"}>Maurer Rose</Link>
			</p>
			<p>
				<Link to={"/chaosGame"}>Chaos Game</Link>
			</p>
			<SketchTile title='Test' desc='test desc' image={matrixRainImag} />
		</div>
	);
}

export default App;
