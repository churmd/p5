import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import DescentFile1920 from "../../images/descent/descent-1920w.jpeg";
import DescentFile1080 from "../../images/descent/descent-1080w.jpeg";
import DescentFile720 from "../../images/descent/descent-720w.jpeg";
import DescentFile480 from "../../images/descent/descent-480w.jpeg";

let srcSetString =
    DescentFile1920 +
    " 1920w, " +
    DescentFile1080 +
    " 1080w, " +
    DescentFile720 +
    " 720w, " +
    DescentFile480 +
    " 480w";

function Descent(props) {
    return (
        <SketchImage
            image={DescentFile1920}
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
