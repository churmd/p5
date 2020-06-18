import React from "react";
import p5 from "p5";

class BeautifulTrig extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let angle = 0;
		let numLines = 1;
		let stepSize = 0.01;

		p.setup = () => {
			const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
			cnv.style("display", "block");
		};

		p.draw = () => {
			p.background(200);

			let width = window.innerWidth;
			let height = window.innerHeight;
			let lineLength = Math.min(width, height) * 0.9;
			let halfLineLength = lineLength / 2;

			p.translate(width / 2, height / 2);

			showLines(halfLineLength);
			showOuterCircleLine(lineLength);
			showPoints(halfLineLength);
			showOuterCirclePoint(halfLineLength);

			angle += stepSize;
			if (angle > p.TWO_PI) {
				angle -= p.TWO_PI;
				numLines += 1;
				if (numLines > 32) {
					numLines = 1;
				}
			}
		};

		let showLines = (halfLineLength) => {
			// Rotate counter clockwise to match taking a catesian coordinate from the origin along the positve x axis
			let roatationStep = -p.PI / numLines;
			for (let i = 0; i < numLines; i++) {
				p.push();

				p.rotate(i * roatationStep);
				p.stroke(0);
				p.strokeWeight(1);
				p.line(-halfLineLength, 0, halfLineLength, 0);

				p.pop();
			}
		};

		let showOuterCircleLine = (diameter) => {
			p.push();

			p.stroke(0);
			p.strokeWeight(5);
			p.noFill();
			p.ellipse(0, 0, diameter, diameter);

			p.pop();
		};

		let showPoints = (halfLineLength) => {
			// Rotate counter clockwise to match taking a catesian coordinate from the origin along the positve x axis
			let roatationStep = -p.PI / numLines;
			let pointOffset = p.PI / numLines;
			for (let i = 0; i < numLines; i++) {
				p.push();
				p.rotate(i * roatationStep);

				let pointAngle = angle + i * pointOffset;
				let sinePosition = p.cos(pointAngle) * halfLineLength;

				p.stroke(0);
				p.strokeWeight(2);
				p.fill(255);
				p.ellipse(sinePosition, 0, 20, 20);

				p.pop();
			}
		};

		let showOuterCirclePoint = (halfLineLength) => {
			let xPos = p.cos(angle) * halfLineLength;
			let yPos = p.sin(angle) * halfLineLength;

			p.push();

			p.stroke(0);
			p.strokeWeight(2);
			p.fill(0, 0, 150);
			p.ellipse(xPos, yPos, 20, 20);

			p.pop();
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
