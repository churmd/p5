import React from "react";
import p5 from "p5";
import Cog from "./Cog";
import { intersect } from "mathjs";

class LissajousCurveTable extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let numCogs, gridSize;
		let diameter;
		let cogsTop, cogsSide;
		let patterns;

		p.setup = () => {
			const cnvSize = 800;
			const cnv = p.createCanvas(cnvSize, cnvSize);
			cnv.style("display", "block");
			cnv.style("margin", "auto");

			numCogs = 8;
			gridSize = numCogs + 1;
			diameter = cnvSize / gridSize;
			cogsTop = [];
			cogsSide = [];
			patterns = [[]];

			for (let i = 1; i < gridSize; i++) {
				let xOff = diameter * (i + 0.5);
				let c = new Cog(
					p,
					xOff,
					diameter * 0.5,
					diameter * 0.95,
					i,
					true
				);
				cogsTop.push(c);
			}

			for (let i = 1; i < gridSize; i++) {
				let yOff = diameter * (i + 0.5);
				let c = new Cog(
					p,
					diameter * 0.5,
					yOff,
					diameter * 0.95,
					i,
					false
				);
				cogsSide.push(c);
			}

			for (let i = 1; i < gridSize; i++) {
				patterns[i] = [];
				for (let j = 1; j < gridSize; j++) {
					patterns[i][j] = new Set();
				}
			}
		};

		p.draw = () => {
			p.clear();
			p.background(51);

			cogsTop.forEach((topCog) => {
				cogsSide.forEach((sideCog) => {
					let l1S = [topCog.lineStartX, topCog.lineStartY];
					let l1E = [topCog.lineEndX, topCog.lineEndY];
					let l2S = [sideCog.lineStartX, sideCog.lineStartY];
					let l2E = [sideCog.lineEndX, sideCog.lineEndY];
					let x = intersect(l1S, l1E, l2S, l2E);
					patterns[topCog.index][sideCog.index].add(x);
				});
			});

			cogsTop.forEach((c) => {
				c.show();
				c.updateAngle();
			});

			cogsSide.forEach((c) => {
				c.show();
				c.updateAngle();
			});

			for (let i = 1; i < gridSize; i++) {
				for (let j = 1; j < gridSize; j++) {
					p.push();
					p.stroke(255);
					p.strokeWeight(1);
					p.noFill();
					p.beginShape();
					patterns[i][j].forEach((x) => {
						p.vertex(x[0], x[1]);
					});
					p.endShape();
					p.pop();
				}
			}
		};
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}></div>;
	}
}
export default LissajousCurveTable;
