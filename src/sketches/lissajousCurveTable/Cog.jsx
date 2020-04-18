export default class Cog {
	constructor(p, x, y, d, index, vertical) {
		this.p = p;
		this.x = x;
		this.y = y;
		this.d = d;
		this.index = index;
		this.vertical = vertical;
		this.angle = -(this.p.PI / 2);
		this.updateLine();
	}

	show() {
		this.p.push();
		this.p.strokeWeight(1);
		this.p.stroke(255);
		this.p.noFill();
		this.p.ellipse(this.x, this.y, this.d, this.d);
		this.p.strokeWeight(8);
		this.p.point(this.lineStartX, this.lineStartY);
		this.p.strokeWeight(1);
		this.p.stroke(255, 50);
		this.p.line(
			this.lineStartX,
			this.lineStartY,
			this.lineEndX,
			this.lineEndY
		);
		this.p.pop();
	}

	updateLine() {
		let r = this.d / 2;
		let lineX = r * this.p.cos(this.angle);
		let lineY = r * this.p.sin(this.angle);
		this.lineStartX = this.x + lineX;
		this.lineStartY = this.y + lineY;
		if (this.vertical) {
			this.lineEndX = this.lineStartX;
			this.lineEndY = this.p.height;
		} else {
			this.lineEndX = this.p.width;
			this.lineEndY = this.lineStartY;
		}
	}

	updateAngle() {
		this.angle += 0.01 * this.index;
		this.updateLine();
	}
}
