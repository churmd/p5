import p5 from "p5";
import { instanceOf, number } from "prop-types";

class InkDrop {
    /**
     * @param {p5} p5Instance
     * @param {Number} centerX
     * @param {Number} centerY
     * @param {Number} radius
     */
    constructor(p5Instance, centerX, centerY, radius) {
        this.p = p5Instance;
        this.center = this.p.createVector(centerX, centerY);
        this.r = radius;

        this.vertices = [];
        let numVertices = 100;
        for (let index = 0; index < numVertices; index++) {
            let angle = this.p.map(index, 0, numVertices, 0, this.p.TWO_PI);
            let vertex = this.p.createVector(this.p.cos(angle), this.p.sin(angle));
            vertex.mult(this.r);
            vertex.add(this.center);
            this.vertices.push(vertex);
        }
    }

    show() {
        this.p.push();
        this.p.noStroke();
        this.p.fill(255);
       
        this.p.beginShape();
        this.vertices.forEach((vertex) => {
            this.p.vertex(vertex.x, vertex.y)
        })
        this.p.endShape(this.p.CLOSE)

        this.p.pop();

    }


}

InkDrop.prototypes = {
    p5Instance: instanceOf(p5),
    centerX: number,
    centerY: number,
    radius: number,
};

export default InkDrop;
