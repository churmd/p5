import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import RayCastFps1920 from "../../images/rayCastFps/rayCastFps-1920w.jpeg";
import RayCastFps1080 from "../../images/rayCastFps/rayCastFps-1080w.jpeg";
import RayCastFps720 from "../../images/rayCastFps/rayCastFps-720w.jpeg";
import RayCastFps480 from "../../images/rayCastFps/rayCastFps-480w.jpeg";

let srcSetString =
    RayCastFps1920 +
    " 1920w, " +
    RayCastFps1080 +
    " 1080w, " +
    RayCastFps720 +
    " 720w, " +
    RayCastFps480 +
    " 480w";

function RayCastFpsImg(props) {
    return (
        <SketchImage
            image={RayCastFps1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

RayCastFpsImg.propTypes = {
    loading: PropTypes.string,
};

export default RayCastFpsImg;
