import React from "react";
import p5 from "p5";
import ProjectedCosLine from "./ProjectedCosLine";

class BeautifulTrig extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let angle = 0;
		let numLines = 16;
		let lines = [];
		let stepSize = 0.01;

		p.setup = () => {
			const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
			cnv.style("display", "block");

			let lineOffset = p.PI / numLines;
			for (let i = 0; i < numLines; i++) {
				let startingAngle = i * lineOffset;
				let line = new ProjectedCosLine(p, startingAngle, stepSize);
				lines.push(line);
			}
		};

		p.draw = () => {
			p.background(200);

			let width = window.innerWidth;
			let height = window.innerHeight;
			let minSize = Math.min(width, height) * 0.9;

			p.translate(width / 2, height / 2);

			// Rotate counter clockwise to match taking a catesian coordinate from the origin along the positve x axis
			let roatationStep = -p.PI / numLines;
			for (let i = 0; i < lines.length; i++) {
				let line = lines[i];

				p.push();
				p.rotate(i * roatationStep);
				line.show(minSize);
				line.update();
				p.pop();
			}

			let xPos = p.cos(angle) * (minSize / 2);
			let yPos = p.sin(angle) * (minSize / 2);

			p.strokeWeight(0);
			p.fill(0, 0, 150);
			p.ellipse(xPos, yPos, 20, 20);

			angle += stepSize;
		};

		p.windowResized = () => {
			p.resizeCanvas(window.innerWidth, window.innerHeight);
		};
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}></div>;
	}
}
export default BeautifulTrig;
