export default class ProjectedCosLine {
	constructor(p, startingAngle, stepSize) {
		this.p = p;
		this.angle = startingAngle;
		this.stepSize = stepSize;
	}

	update() {
		this.angle += this.stepSize;
		if (this.angle >= this.p.TWO_PI) {
			this.angle = 0;
		}
	}

	show(lineLength) {
		let halfLength = lineLength / 2;

		this.p.stroke(0);
		this.p.strokeWeight(5);
		this.p.line(-halfLength, 0, halfLength, 0);

		let sinePosition = this.p.cos(this.angle) * halfLength;

		this.p.strokeWeight(3);
		this.p.fill(255);
		this.p.ellipse(sinePosition, 0, 20, 20);
	}
}
