import p5 from "p5";
import { number } from "prop-types";

class ProjectionPlane {
    constructor(p5Instance, width, height, fov) {
        this.p = p5Instance;
        this.width = width;
        this.height = height;
        this.fov = fov;
        this.angleBetweenRays = this.p.radians(fov / width);
    }

    show() {
        this.p.push();
        this.p.noStroke();

        this.p.fill(0, 0, 230);
        this.p.rect(0, 0, this.width, this.height / 2);

        this.p.fill(150);
        this.p.rect(0, this.height / 2, this.width, this.height / 2);

        this.p.pop();
    }
}

ProjectionPlane.propTypes = {
    p5Instance: p5,
    width: number,
    height: number,
    fov: number,
};

export default ProjectionPlane;
