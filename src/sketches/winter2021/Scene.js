import p5 from "p5";
import PropTypes from "prop-types";
import SnowFall from "./SnowFall";
import SunAndMoon from "./SunAndMoon";
import Tree from "./Tree";

class Scene {
    constructor(p5Instance) {
        this.p = p5Instance;
        this.tree = new Tree(p5Instance);
        this.sunAndMoon = new SunAndMoon(p5Instance);
        this.snowfall = new SnowFall(p5Instance);
    }
    update() {
        this.tree.update();
        this.sunAndMoon.update();
        this.snowfall.update();
    }

    show(width, height) {
        this.tree.show(width, height);
        this.sunAndMoon.show(width, height);
        this.snowfall.show(width, height);
    }
}

Scene.proptypes = {
    p5Instance: PropTypes.instanceOf(p5),
};

export default Scene;
