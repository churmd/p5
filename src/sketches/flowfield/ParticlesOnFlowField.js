import p5 from "p5";
import { instanceOf } from "prop-types";
import FlowField from "./FlowField";
import Particle from "./Particle";

class ParticlesOnFlowField {
    /**
     * @param {p5} p5Instance
     * @param {Number} canvasWidth
     * @param {Number} canvasHeight
     */
    constructor(p5Instance, canvasWidth, canvasHeight) {
        this.p = p5Instance;

        this.flowField = new FlowField(this.p, 20, 20);

        this.particles = [];

        this.particles.push(
            new Particle(this.p, canvasWidth / 2, canvasHeight / 2)
        );
    }

    /**
     * @param {Number} canvasWidth
     * @param {Number} canvasHeight
     */
    show(canvasWidth, canvasHeight) {
        this.p.push();

        this.flowField.show(canvasWidth, canvasHeight);

        this.particles.forEach((particle) => {
            particle.show();
        });

        this.p.pop();
    }

    /**
     * @param {Number} canvasWidth
     * @param {Number} canvasHeight
     */
    update(canvasWidth, canvasHeight) {
        this.flowField.update();

        this.particles.forEach((particle) => {
            const flowFieldVelocity =
                this.flowField.flowVelocityFromPixelPosition(
                    particle.position,
                    canvasWidth,
                    canvasHeight
                );

            particle.addVelocityAndMove(flowFieldVelocity);
        });
    }
}

ParticlesOnFlowField.prototypes = {
    p5Instance: instanceOf(p5),
};

export default ParticlesOnFlowField;
