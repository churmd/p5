import React from "react";
import "./Home.scss";
import SketchList from "../sketchList/SketchList";
import Description from "../description/Description";

function Home(props) {
	return (
		<div className='home'>
			<h1>P5 Animations</h1>
			<Description />
			<SketchList />
		</div>
	);
}

export default Home;
