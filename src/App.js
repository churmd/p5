import React from "react";
import "./App.scss";
import SketchList from "./components/sketchList/SketchList";
import Description from "./components/description/Description";

function App() {
	return (
		<div className='app'>
			<h1>P5 Animations</h1>
			<Description />
			<SketchList />
		</div>
	);
}

export default App;
