import p5 from "p5";
import PropTypes from "prop-types";
import SceneElement from "./SceneElement";

class Light {
    constructor(p5Instance, r1, r2) {
        this.p = p5Instance;
        this.r1 = r1;
        this.r2 = r2;
        this.maxTtl = this.p.getFrameRate();
        this.ttl = this.maxTtl;
        this.colour = this.p.random(["RED", "BLUE", "GREEN"]);
    }

    update() {
        this.ttl--;
    }

    show(bx, by, cx, cy) {
        // https://stackoverflow.com/questions/4778147/sample-random-point-in-triangle
        // P = (1 - sqrt(r1)) * A + (sqrt(r1) * (1 - r2)) * B + (sqrt(r1) * r2) * C
        const px =
            (1 - this.p.sqrt(this.r1)) * 0 +
            this.p.sqrt(this.r1) * (1 - this.r2) * bx +
            this.p.sqrt(this.r1) * this.r2 * cx;

        const py =
            (1 - this.p.sqrt(this.r1)) * 0 +
            this.p.sqrt(this.r1) * (1 - this.r2) * by +
            this.p.sqrt(this.r1) * this.r2 * cy;

        this.p.push();
        const alpha = (this.ttl / this.maxTtl) * 255;

        if (this.colour === "RED") {
            this.p.fill(255, 0, 0, alpha);
        } else if (this.colour === "BLUE") {
            this.p.fill(0, 0, 255, alpha);
        } else {
            this.p.fill(0, 255, 0, alpha);
        }

        this.p.circle(px, py, 10);
        this.p.pop();
    }
}

class Tree extends SceneElement {
    constructor(p5Instance) {
        super(p5Instance);
        this.numLayers = 4;
        this.lights = [];
        for (let i = 0; i < this.numLayers; i++) {
            this.lights[i] = [];
        }
    }

    update() {
        for (let i = 0; i < this.lights.length; i++) {
            const layer = this.lights[i];

            layer.forEach((light) => {
                light.update();
            });

            const r1 = this.p.random();
            const r2 = this.p.random();
            const light = new Light(this.p, r1, r2);
            layer.push(light);

            this.lights[i] = layer.filter((light) => {
                return light.ttl > 0;
            });
        }
    }

    show(width, height) {
        const minDim = this.p.min(width, height);

        this.p.push();
        this.p.translate(width / 2, height / 2);

        this.p.noStroke();

        // trunk
        this.p.fill(153, 102, 51);
        this.p.rect(-minDim / 32, minDim / 4, minDim / 16, minDim / 16);

        // leave layers
        const startingPerc = 4;
        for (let i = 0; i < this.numLayers; i++) {
            const perc = i + startingPerc;
            const triSize = minDim / perc;

            this.p.fill(0, 153, 51);
            this.p.triangle(0, 0, triSize, triSize, -triSize, triSize);

            // show lights
            this.lights[i].forEach((light) => {
                light.show(triSize, triSize, -triSize, triSize);
            });

            this.p.translate(0, -minDim / (perc * 2));
        }

        this.p.pop();
    }
}

Tree.proptypes = {
    p5Instance: PropTypes.instanceOf(p5),
};

export default Tree;
