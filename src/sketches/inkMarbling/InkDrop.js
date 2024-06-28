import p5 from "p5";
import { instanceOf, number } from "prop-types";

class InkDrop {
    /**
     * @param {p5} p5Instance
     * @param {Number} centerX
     * @param {Number} centerY
     * @param {Number} radius
     * @param {p5.Color} colour 
     */
    constructor(p5Instance, centerX, centerY, radius, colour) {
        this.p = p5Instance;
        this.center = this.p.createVector(centerX, centerY);
        this.radius = radius;
        this.colour = colour;

        this.vertices = [];
        let numVertices = 100;
        for (let index = 0; index < numVertices; index++) {
            let angle = this.p.map(index, 0, numVertices, 0, this.p.TWO_PI);
            let vertex = this.p.createVector(this.p.cos(angle), this.p.sin(angle));
            vertex.mult(this.radius);
            vertex.add(this.center);
            this.vertices.push(vertex);
        }
    }

    show() {
        this.p.push();
        this.p.noStroke();
        this.p.fill(this.colour);
       
        this.p.beginShape();
        this.vertices.forEach((vertex) => {
            this.p.vertex(vertex.x, vertex.y)
        })
        this.p.endShape(this.p.CLOSE)

        this.p.pop();
    }

    /**
     * Morphs this InkDrop's shape according to the new InkDrop added.
     * Maths for this calculation can be found at https://people.csail.mit.edu/jaffer/Marbling/Dropping-Paint
     * @param {InkDrop} newInkDrop The new ink drop added.
     */
    displaceByInDrop(newInkDrop) {
        const c = newInkDrop.center;
        const r = newInkDrop.radius;
        this.vertices.forEach((v) => {
            // c + ( (p - c) . sqrt(1 + (r^2 / (||p - c||^2) )) )

            const pMinusC = p5.Vector.sub(v, c);
            const pMinusCMagnitude = pMinusC.mag();
            const root = this.p.sqrt(1 + this.p.sq(r) / this.p.sq(pMinusCMagnitude));
            const result = p5.Vector.add(c, p5.Vector.mult(pMinusC, root));
            v.set(result);
        })
    }

    /**
     * Returns true if any part of the InkDrop is on screen.
     * @param {Number} screenWidth 
     * @param {Number} screenHeight 
     * @returns {Boolean}
     */
    isOnScreen(screenWidth, screenHeight) {
        const vertexOnScreen = (vertex) => {
            const xOnScreen = vertex.x >= 0 && vertex.x <= screenWidth
            const yOnScreen = vertex.y >= 0 && vertex.y <= screenHeight
            return xOnScreen && yOnScreen
        }

        for (let index = 0; index < this.vertices.length; index++) {
            const vertex = this.vertices[index];
            if (vertexOnScreen(vertex)) {
                return true;
            }
        }

        return false;
    }

}

InkDrop.prototypes = {
    p5Instance: instanceOf(p5),
    centerX: number,
    centerY: number,
    radius: number,
};

export default InkDrop;
