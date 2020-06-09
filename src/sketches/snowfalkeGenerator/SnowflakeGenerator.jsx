import React from "react";
import p5 from "p5";

class SnowflakeGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		const numBranches = 6;
		const pointRadius = 3;
		const secondsToKeepFinishedSnowflake = 3;
		let snowflakeBranch;
		let newestPoint;
		let sameSnowflakeCounter;

		p.setup = () => {
			var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
			cnv.style("display", "block");
			p.frameRate(10);
			clearSnowflake();
		};

		p.draw = () => {
			const countBeforeClearing =
				p.getFrameRate() * secondsToKeepFinishedSnowflake;
			if (sameSnowflakeCounter > countBeforeClearing) {
				clearSnowflake();
			}

			const pointAdded = addNextPoint();
			if (!pointAdded) {
				sameSnowflakeCounter++;
				return;
			}

			// Center drawing on screen
			// rotate so top and bottom snowflake branches are vertically aligned
			p.translate(p.windowWidth / 2, p.windowHeight / 2);
			p.rotate(p.TWO_PI / (numBranches * 2));

			const rotationAmount = p.TWO_PI / numBranches;
			for (let i = 0; i < numBranches; i++) {
				p.rotate(rotationAmount);

				showPoint(newestPoint);

				p.push();
				p.scale(1, -1);
				showPoint(newestPoint);
				p.pop();
			}
		};

		p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight);
			clearSnowflake();
		};

		// Clears the screen and resets the snowflake branch to be empty.
		function clearSnowflake() {
			p.background(51);
			snowflakeBranch = [];
			newestPoint = null;
			sameSnowflakeCounter = 0;
		}

		function showPoint(point) {
			p.ellipse(point.x, point.y, pointRadius * 2, pointRadius * 2);
		}

		// Add another point to the snowflake branch, if there is space on screen.
		// Returns true if a new point was added the the branch, false if not.
		function addNextPoint() {
			const minWindowSize = Math.min(
				p.windowWidth / 2,
				p.windowHeight / 2
			);
			const point = p.createVector(minWindowSize, 0);
			let counter = 0;

			while (true) {
				randomWalkPoint(point, p.TWO_PI / (numBranches * 2));
				if (point.x < 1 || isIntersecting(point)) {
					break;
				}
				counter++;
			}

			if (counter > 0) {
				snowflakeBranch.push(point);
				newestPoint = point;
				return true;
			} else {
				return false;
			}
		}

		// Check if a point is intersecting with any of the existing points in the snowflake branch
		function isIntersecting(point) {
			for (let i = 0; i < snowflakeBranch.length; i++) {
				const existingPoint = snowflakeBranch[i];
				const distanceBetween = p.dist(
					existingPoint.x,
					existingPoint.y,
					point.x,
					point.y
				);
				if (distanceBetween <= pointRadius * 2) {
					return true;
				}
			}
			return false;
		}

		// Walk the point to the left keeping it within the angle specified from the origin
		function randomWalkPoint(point, angleThreshold) {
			point.x -= 1;
			point.y += p.random(-3, 3);

			let angle = point.heading();
			angle = p.constrain(angle, 0, angleThreshold);

			const magnitude = point.mag();
			const point2 = p5.Vector.fromAngle(angle);
			point2.setMag(magnitude);

			point.x = point2.x;
			point.y = point2.y;
		}
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}></div>;
	}
}
export default SnowflakeGenerator;
