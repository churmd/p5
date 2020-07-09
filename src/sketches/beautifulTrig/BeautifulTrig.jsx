import React from "react";
import p5 from "p5";
import "./BeautifulTrig.scss";

class BeautifulTrig extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let angle = 0;
		let numLines = 1;
		let showTrigEnabled = false;
		const rotationSpeed = 0.01;

		p.setup = () => {
			const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
			cnv.style("display", "block");

			createControls();
		};

		const createControls = () => {
			const showTrigButton = p.createButton("Show Trigonometry");
			showTrigButton.parent("controls");

			showTrigButton.mousePressed(() => {
				showTrigEnabled = !showTrigEnabled;
				if (showTrigEnabled) {
					showTrigButton.html("Hide Trigonometry");
					numLines = 2;
				} else {
					showTrigButton.html("Show Trigonometry");
					p.redraw();
				}
			});
		};

		p.draw = () => {
			p.background(200);

			const width = getCanvasWidth();
			const height = getCanvasHeight();
			const circleDiameter = Math.min(width, height) * 0.9;
			const circleRadius = circleDiameter / 2;

			p.translate(width / 2, height / 2);

			showLines(circleRadius);
			showOuterCircleLine(circleDiameter);
			showTrigLines(circleRadius);
			showPoints(circleRadius);
			showOuterCirclePoint(circleRadius);

			updateState();
		};

		const showLines = (circleRadius) => {
			const roatationStep = p.PI / numLines;
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

		const showTrigLines = (circleRadius) => {
			if (!showTrigEnabled) {
				return;
			}

			const xPosOnCircle = p.cos(angle) * circleRadius;
			const yPosOnCircle = p.sin(angle) * circleRadius;

			const cosPosition = p.cos(angle) * circleRadius;
			const sinePosition = p.sin(angle) * circleRadius;

			p.push();

			p.noFill();
			p.strokeWeight(5);
			p.colorMode(p.HSL, 360);

			const cosColour = p.color(0, 200, 200);
			const cosArcDiameter = circleRadius * 0.9;
			p.stroke(cosColour);
			p.arc(0, 0, cosArcDiameter, cosArcDiameter, angle, 0);

			const sineColour = p.color(180, 200, 200);
			const sineArcDiameter = circleRadius * 1.1;
			p.stroke(sineColour);
			p.arc(0, 0, sineArcDiameter, sineArcDiameter, angle, 0 + p.HALF_PI);

			p.pop();

			p.push();

			p.stroke(0);
			p.strokeWeight(2);
			p.line(xPosOnCircle, yPosOnCircle, cosPosition, 0);
			p.line(xPosOnCircle, yPosOnCircle, 0, sinePosition);
			p.line(xPosOnCircle, yPosOnCircle, 0, 0);

			p.pop();
		};

		const showPoints = (circleRadius) => {
			const roatationStep = p.PI / numLines;
			const pointOffset = -p.PI / numLines;
			const pointSize = 0.05 * circleRadius;
			for (let i = 0; i < numLines; i++) {
				p.push();
				p.rotate(i * roatationStep);

				const pointAngle = angle + i * pointOffset;
				const cosPosition = p.cos(pointAngle) * circleRadius;

				p.colorMode(p.HSL, 360);
				const hue = (360 / numLines) * i;
				const colour = p.color(hue, 250, 200);

				p.fill(colour);
				p.stroke(0);
				p.strokeWeight(2);

				p.ellipse(cosPosition, 0, pointSize, pointSize);

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

		const updateState = () => {
			angle -= rotationSpeed;
			if (angle < -p.TWO_PI) {
				angle += p.TWO_PI;
				if (!showTrigEnabled) {
					numLines += 1;
					if (numLines > 32) {
						numLines = 1;
					}
				}
			}
		};

		p.windowResized = () => {
			p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
		};

		const getCanvasHeight = () => {
			return window.innerHeight * 0.95;
		};

		const getCanvasWidth = () => {
			return window.innerWidth;
		};
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return (
			<div className='beautiful-trig-sketch'>
				<div ref={this.myRef}></div>
				<div id='controls'></div>
			</div>
		);
	}
}

export default BeautifulTrig;
