import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import ChaosGame1920 from "../../images/chaosGame/chaosGame-1920w.jpeg";
import ChaosGame1080 from "../../images/chaosGame/chaosGame-1080w.jpeg";
import ChaosGame720 from "../../images/chaosGame/chaosGame-720w.jpeg";
import ChaosGame480 from "../../images/chaosGame/chaosGame-480w.jpeg";

let srcSetString =
    ChaosGame1920 +
    " 1920w, " +
    ChaosGame1080 +
    " 1080w, " +
    ChaosGame720 +
    " 720w, " +
    ChaosGame480 +
    " 480w";

function ChaosGameImg(props) {
    return (
        <SketchImage
            image={ChaosGame1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

ChaosGameImg.propTypes = {
    loading: PropTypes.string,
};

export default ChaosGameImg;
