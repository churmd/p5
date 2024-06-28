import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import InkMarblingFile1920 from "../../images/inkMarbling/inkMarbling-1920w.jpeg";
import InkMarblingFile1080 from "../../images/inkMarbling/inkMarbling-1080w.jpeg";
import InkMarblingFile720 from "../../images/inkMarbling/inkMarbling-720w.jpeg";
import InkMarblingFile480 from "../../images/inkMarbling/inkMarbling-480w.jpeg";

let srcSetString =
    InkMarblingFile1920 +
    " 1920w, " +
    InkMarblingFile1080 +
    " 1080w, " +
    InkMarblingFile720 +
    " 720w, " +
    InkMarblingFile480 +
    " 480w";

function InkMarbling(props) {
    return (
        <SketchImage
            image={InkMarblingFile1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

InkMarbling.propTypes = {
    loading: PropTypes.string,
};

export default InkMarbling;
