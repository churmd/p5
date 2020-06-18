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
		const rotationSpeed = 0.01;

		p.setup = () => {
			const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
			cnv.style("display", "block");
		};

		p.draw = () => {
			p.background(200);

			const width = window.innerWidth;
			const height = window.innerHeight;
			const circleDiameter = Math.min(width, height) * 0.9;
			const circleRadius = circleDiameter / 2;

			p.translate(width / 2, height / 2);

			showLines(circleRadius);
			showOuterCircleLine(circleDiameter);
			showPoints(circleRadius);
			showOuterCirclePoint(circleRadius);

			angle += rotationSpeed;
			if (angle > p.TWO_PI) {
				angle -= p.TWO_PI;
				numLines += 1;
				if (numLines > 32) {
					numLines = 1;
				}
			}
		};

		const showLines = (circleRadius) => {
			// Rotate counter clockwise to match taking a catesian coordinate from the origin along the positve x axis
			const roatationStep = -p.PI / numLines;
			for (let i = 0; i < numLines; i++) {
				p.push();

				p.rotate(i * roatationStep);
				p.stroke(0);
				p.strokeWeight(1);
				p.line(-circleRadius, 0, circleRadius, 0);

				p.pop();
			}
		};

		const showOuterCircleLine = (circleDiameter) => {
			p.push();

			p.stroke(0);
			p.strokeWeight(5);
			p.noFill();
			p.ellipse(0, 0, circleDiameter, circleDiameter);

			p.pop();
		};

		const showPoints = (circleRadius) => {
			// Rotate counter clockwise to match taking a catesian coordinate from the origin along the positve x axis
			const roatationStep = -p.PI / numLines;
			const pointOffset = p.PI / numLines;
			const pointSize = 0.05 * circleRadius;
			for (let i = 0; i < numLines; i++) {
				p.push();
				p.rotate(i * roatationStep);

				const pointAngle = angle + i * pointOffset;
				const sinePosition = p.cos(pointAngle) * circleRadius;

				p.colorMode(p.HSL, 360);
				const hue = (360 / numLines) * i;
				const sat = 250;
				const colour = p.color(hue, sat, 200);
				p.fill(colour);
				p.stroke(0);
				p.strokeWeight(2);

				p.ellipse(sinePosition, 0, pointSize, pointSize);

				p.pop();
			}
		};

		const showOuterCirclePoint = (circleRadius) => {
			const xPos = p.cos(angle) * circleRadius;
			const yPos = p.sin(angle) * circleRadius;
			const pointSize = 0.05 * circleRadius;

			p.push();

			p.stroke(0);
			p.strokeWeight(2);
			p.colorMode(p.HSL, 360);
			const colour = p.color(0, 0, 360);
			p.fill(colour);
			p.ellipse(xPos, yPos, pointSize, pointSize);

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
