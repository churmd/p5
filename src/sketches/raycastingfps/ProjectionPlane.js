import p5 from "p5";
import { number } from "prop-types";

class ProjectionPlane {
    constructor(p5Instance, width, height, fov) {
        this.p = p5Instance;
        this.width = width;
        this.height = height;
        this.distanceToPlan = width / 2 / this.p.tan(fov / 2);
        this.fov = fov;
        this.angleBetweenRays = this.p.radians(fov / width);
    }

    show(player) {
        this.p.push();
        this.p.noStroke();

        this.p.fill(0, 0, 230);
        this.p.rect(0, 0, this.width, this.height / 2);

        this.p.fill(150);
        this.p.rect(0, this.height / 2, this.width, this.height / 2);

        this.p.push();
        this.p.fill(0, 0, 100);
        // if there is no stroke the walls look tranparent as they are only 1 pixel wide
        this.p.stroke(0, 0, 100);
        this.p.rectMode(this.p.CENTER);
        const distToWalls = this.distancesToWalls(player);
        for (let i = 0; i < distToWalls.length; i++) {
            const wallDist = distToWalls[i];

            this.p.rect(i, this.height / 2, 1, wallDist);
        }

        this.p.pop();
        this.p.pop();
    }

    distancesToWalls(player) {
        let angle = player.heading - this.fov / 2;
        const distances = [];
        for (let i = 0; i < this.width; i++) {
            const d = this.distanceToWall(player.position, angle);
            distances.push(d);

            angle += this.angleBetweenRays;
        }

        return distances;
    }

    distanceToWall(origin, angle) {
        // Add DDA algorithm
        return 100;
    }
}

ProjectionPlane.propTypes = {
    p5Instance: p5,
    width: number,
    height: number,
    fov: number,
};

export default ProjectionPlane;
