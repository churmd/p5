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

        this.flowField = new FlowField(this.p, 30, 30);

        this.numParticles = 200;
        this.particles = [];

        for (var i = 0; i < this.numParticles; i++) {
            this.createRandomParticle(canvasWidth, canvasHeight);
        }
    }

    /**
     * @param {Number} canvasWidth
     * @param {Number} canvasHeight
     */
    createRandomParticle(canvasWidth, canvasHeight) {
        const x = this.p.random(canvasWidth);
        const y = this.p.random(canvasHeight);
        const particle = new Particle(this.p, x, y);
        this.particles.push(particle);
    }

    createParticleAtMouse() {
        const particle = new Particle(this.p, this.p.mouseX, this.p.mouseY);
        this.particles.push(particle);
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

        this.particles = this.particles.filter((particle) => {
            return !particle.isOutOfBounds(canvasWidth, canvasHeight);
        });

        if (this.particles.length !== this.numParticles) {
            this.createParticleAtMouse(canvasWidth, canvasHeight);
        }

        // If there is still space, create another random particle to keep the animation interesting
        if (this.particles.length !== this.numParticles) {
            this.createRandomParticle(canvasWidth, canvasHeight);
        }
    }
}

ParticlesOnFlowField.prototypes = {
    p5Instance: instanceOf(p5),
};

export default ParticlesOnFlowField;
