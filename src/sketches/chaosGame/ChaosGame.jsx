import React from "react";
import p5 from "p5";

class ChaosGame extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.points = [];
		this.numPoints = 3;
		this.prevMarker = new p5.Vector(0, 0);
	}

	sketch = (p) => {
		p.setup = () => {
			const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
			cnv.style("display", "block");
			this.createNewGame();
		};

		this.createNewGame = () => {
			this.points = [];
			this.numPoints = 3;
			const smallestDim = p.min(window.innerWidth, window.innerHeight);
			const radius = (smallestDim * 0.9) / 2;

			p.angleMode(p.RADIANS);
			const angleStep = p.TWO_PI / this.numPoints;
			for (let i = 0; i < this.numPoints; i++) {
				let angle = i * angleStep;
				// minus half pi so the first point is centered at the top
				angle -= p.PI / 2;
				const point = p5.Vector.fromAngle(angle);
				point.mult(radius);
				point.add(window.innerWidth / 2, window.innerHeight / 2);
				this.points.push(point);
			}

			this.prevMarker = p.createVector(
				p.random(window.innerWidth),
				p.random(window.innerHeight)
			);

			this.drawNewGame();
		};

		this.drawNewGame = () => {
			p.background(51);

			this.points.forEach((point) => {
				p.stroke(255);
				p.fill(255);
				p.circle(point.x, point.y, 10);
			});

			p.noStroke();
			p.fill(255, 0, 255, 100);
			p.circle(this.prevMarker.x, this.prevMarker.y, 5);
		};

		p.draw = () => {
			const randomPoint = p.random(this.points);
			const newMarker = p5.Vector.lerp(this.prevMarker, randomPoint, 0.5);
			p.noStroke();
			p.fill(255, 0, 255, 100);
			p.circle(newMarker.x, newMarker.y, 5);

			this.prevMarker = newMarker;
		};

		p.windowResized = () => {
			p.resizeCanvas(window.innerWidth, window.innerHeight);
			this.createNewGame();
		};
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}></div>;
	}
}
export default ChaosGame;
