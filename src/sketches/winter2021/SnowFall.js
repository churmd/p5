import p5 from "p5";
import PropTypes from "prop-types";
import SceneElement from "./SceneElement";

class Snowflake extends SceneElement {
    constructor(p5Instance, x, y, velocity, drift) {
        super(p5Instance);
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.drift = drift;
    }

    update() {
        if (this.p.random() > 0.99) {
            this.drift *= -1;
        }

        this.y += this.velocity;
        this.x += this.drift;
    }

    show(width, height) {
        this.p.push();

        this.p.noStroke();
        this.p.fill(255);
        this.p.circle(width * this.x, height * this.y, 10);

        this.p.pop();
    }
}

class SnowFall extends SceneElement {
    constructor(p5Instance) {
        super(p5Instance);
        this.numSnowflakes = 200;
        this.snowflakes = [];
        for (let i = 0; i < this.numSnowflakes; i++) {
            const snowflake = this.createSnowflake();
            this.snowflakes.push(snowflake);
        }
    }

    createSnowflake() {
        const x = this.p.random();
        const y = this.p.random();
        const velocity = this.p.random(0.005, 0.01);
        const drift = this.p.random(0.0001, 0.001);
        const snowflake = new Snowflake(this.p, x, y, velocity, drift);
        return snowflake;
    }

    update() {
        const removedSnowflakes = [];
        this.snowflakes.forEach((snowflake, index) => {
            snowflake.update();

            if (
                snowflake.x > 1 ||
                snowflake.x < 0 ||
                snowflake.y > 1 ||
                snowflake.y < 0
            ) {
                removedSnowflakes.push(index);
            }
        });

        removedSnowflakes.forEach((snowflakeIndex) => {
            const snowflake = this.createSnowflake();
            this.snowflakes[snowflakeIndex] = snowflake;
        });
    }

    show(width, height) {
        this.snowflakes.forEach((snowflake) => {
            snowflake.show(width, height);
        });
    }
}

SnowFall.proptypes = {
    p5Instance: PropTypes.instanceOf(p5),
};

export default SnowFall;
