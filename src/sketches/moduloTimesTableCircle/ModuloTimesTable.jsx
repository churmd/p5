import React from "react";
import p5 from "p5";

class ModuloTimesTable extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let base = 100;
		let factor = 0;

		p.setup = () => {
			var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
			cnv.style("display", "block");
		};

		p.draw = () => {
			p.background(51);

			if (factor !== Number.MAX_VALUE) {
				factor = factor + 0.01;
			} else {
				factor = 0;
			}

			const radius = p.min(p.windowWidth / 2, p.windowHeight / 2);
			const outerRadius = radius * 0.95;
			const innerRadius = radius * 0.9;
			const pointSize = 14;
			const halfPointSize = pointSize / 2;

			p.translate(p.windowWidth / 2, p.windowHeight / 2);
			p.textSize(pointSize);

			p.stroke(255);
			p.noFill();
			p.circle(0, 0, innerRadius * 2);

			p.fill(255);
			for (var i = 0; i < base; i++) {
				const timesResult = (i * factor) % base;

				const p1 = getIndexVector(i, base, innerRadius);
				const p2 = getIndexVector(timesResult, base, innerRadius);
				const p3 = getIndexVector(i, base, outerRadius);

				p.circle(p1.x, p1.y, pointSize);
				p.line(p1.x, p1.y, p2.x, p2.y);
				p.text(i, p3.x - halfPointSize, p3.y + halfPointSize);
			}
		};

		// Get a vector point radius distance away from the origin at the angle
		// index/base scaled to 2 pi
		function getIndexVector(index, base, radius) {
			const angle = p.map(index, 0, base, 0, p.TWO_PI);
			let v = p5.Vector.fromAngle(angle - p.PI);
			v.mult(radius);
			return v;
		}

		p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight);
		};
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}></div>;
	}
}
export default ModuloTimesTable;
