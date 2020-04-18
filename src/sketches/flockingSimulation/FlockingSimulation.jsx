import React from "react";
import p5 from "p5";
import Bird from "./Bird";
import "./FlockingSimulation.scss";

class FlockingSimulation extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let birds = [];
		let sepMult = 50;
		let alignMult = 50;
		let cohMult = 40;
		let neighbourhood = 100;
		let sepMultSlider, alignMultSlider, cohMultSlider, neighbourhoodSlider;
		let neighbourhoodCheckbox;

		p.setup = () => {
			var cnv = p.createCanvas(p.windowWidth, p.windowHeight * 0.9);
			cnv.parent("canvas");
			cnv.style("display", "block");

			for (let i = 0; i < 100; i++) {
				const rndX = p.random(0, p.windowWidth);
				const rndY = p.random(0, p.windowHeight * 0.9);
				birds.push(new Bird(p, rndX, rndY, i));
			}

			createControls();
		};

		p.draw = () => {
			p.background(51);

			sepMult = sepMultSlider.value();
			alignMult = alignMultSlider.value();
			cohMult = cohMultSlider.value();
			neighbourhood = neighbourhoodSlider.value();

			birds.forEach((bird) => {
				bird.update(
					birds,
					sepMult,
					alignMult,
					cohMult,
					neighbourhood,
					p.windowWidth,
					p.windowHeight * 0.9
				);
				bird.show(neighbourhood, neighbourhoodCheckbox.checked());
			});
		};

		p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight * 0.9);
		};

		function createControls() {
			sepMultSlider = p.createSlider(0, 100, sepMult);
			sepMultSlider.parent("sepDiv");

			alignMultSlider = p.createSlider(0, 100, alignMult);
			alignMultSlider.parent("alignDiv");

			cohMultSlider = p.createSlider(0, 100, cohMult);
			cohMultSlider.parent("cohDiv");

			neighbourhoodSlider = p.createSlider(0, 200, neighbourhood);
			neighbourhoodSlider.parent("neighbourhoodDiv");
			neighbourhoodSlider.style("display", "inline-block");

			neighbourhoodCheckbox = p.createCheckbox("Show", false);
			neighbourhoodCheckbox.parent("neighbourhoodDiv");
			neighbourhoodCheckbox.style("display", "inline-block");
		}
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return (
			<div ref={this.myRef}>
				<div id='canvas'></div>
				<div id='controls'>
					<div id='sepDiv' class='slider'>
						<p>Separation</p>
					</div>
					<div id='alignDiv' class='slider'>
						<p>Alignment</p>
					</div>
					<div id='cohDiv' class='slider'>
						<p>Cohesion</p>
					</div>
					<div id='neighbourhoodDiv' class='slider'>
						<p>Neighbourhood</p>
					</div>
				</div>
			</div>
		);
	}
}
export default FlockingSimulation;
