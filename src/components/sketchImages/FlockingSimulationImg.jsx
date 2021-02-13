import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import FlockingSimulation1920 from "../../images/flockingSimulation/flockingSimulation-1920w.jpeg";
import FlockingSimulation1080 from "../../images/flockingSimulation/flockingSimulation-1080w.jpeg";
import FlockingSimulation720 from "../../images/flockingSimulation/flockingSimulation-720w.jpeg";
import FlockingSimulation480 from "../../images/flockingSimulation/flockingSimulation-480w.jpeg";

let srcSetString =
    FlockingSimulation1920 +
    " 1920w, " +
    FlockingSimulation1080 +
    " 1080w, " +
    FlockingSimulation720 +
    " 720w, " +
    FlockingSimulation480 +
    " 480w";

function FlockingSimulationImg(props) {
    return (
        <SketchImage
            image={FlockingSimulation1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

FlockingSimulationImg.propTypes = {
    loading: PropTypes.string,
};

export default FlockingSimulationImg;
