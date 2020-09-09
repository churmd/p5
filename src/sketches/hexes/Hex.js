import p5 from "p5";

export default class Hex {
    constructor(p, x, y, maxSideLength) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.maxSideLength = maxSideLength;
        this.sideLength = p.random(maxSideLength);
        this.growing = p.random([true, false]);
    }

    update() {
        const growRate = 0.1;
        if (this.sideLength >= this.maxSideLength) {
            this.growing = false;
        }

        if (this.sideLength <= 1) {
            this.growing = true;
        }

        if (this.growing) {
            this.sideLength += growRate;
            if (this.sideLength > this.maxSideLength) {
                this.sideLength = this.maxSideLength;
            }
        } else {
            this.sideLength -= growRate;
            if (this.sideLength < 1) {
                this.sideLength = 1;
            }
        }
    }

    show() {
        let pointA = p5.Vector.fromAngle(this.p.radians(-90), this.sideLength);
        pointA.add(this.x, this.y);

        let pointB = p5.Vector.fromAngle(this.p.radians(-30), this.sideLength);
        pointB.add(this.x, this.y);

        let pointC = p5.Vector.fromAngle(this.p.radians(30), this.sideLength);
        pointC.add(this.x, this.y);

        let pointD = p5.Vector.fromAngle(this.p.radians(90), this.sideLength);
        pointD.add(this.x, this.y);

        let pointE = p5.Vector.fromAngle(this.p.radians(150), this.sideLength);
        pointE.add(this.x, this.y);

        let pointF = p5.Vector.fromAngle(this.p.radians(210), this.sideLength);
        pointF.add(this.x, this.y);

        this.p.push();

        this.p.fill(255);
        this.p.strokeWeight(2);
        this.p.stroke(0);

        this.p.beginShape();
        this.p.vertex(pointA.x, pointA.y);
        this.p.vertex(pointB.x, pointB.y);
        this.p.vertex(pointC.x, pointC.y);
        this.p.vertex(pointD.x, pointD.y);
        this.p.vertex(pointE.x, pointE.y);
        this.p.vertex(pointF.x, pointF.y);
        this.p.endShape(this.p.CLOSE);

        this.p.pop();
    }
}
