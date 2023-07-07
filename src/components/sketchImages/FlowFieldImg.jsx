import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import FlowFieldFile1920 from "../../images/flowField/flowField-1920w.jpeg";
import FlowFieldFile1080 from "../../images/flowField/flowField-1080w.jpeg";
import FlowFieldFile720 from "../../images/flowField/flowField-720w.jpeg";
import FlowFieldFile480 from "../../images/flowField/flowField-480w.jpeg";

let srcSetString =
    FlowFieldFile1920 +
    " 1920w, " +
    FlowFieldFile1080 +
    " 1080w, " +
    FlowFieldFile720 +
    " 720w, " +
    FlowFieldFile480 +
    " 480w";

function Descent(props) {
    return (
        <SketchImage
            image={FlowFieldFile1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

Descent.propTypes = {
    loading: PropTypes.string,
};

export default Descent;
