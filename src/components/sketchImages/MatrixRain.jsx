import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import MatrixRain1920 from "../../images/matrixRain/matrixRain-1920w.jpeg";
import MatrixRain1080 from "../../images/matrixRain/matrixRain-1080w.jpeg";
import MatrixRain720 from "../../images/matrixRain/matrixRain-720w.jpeg";
import MatrixRain480 from "../../images/matrixRain/matrixRain-480w.jpeg";

let srcSetString =
    MatrixRain1920 +
    " 1920w, " +
    MatrixRain1080 +
    " 1080w, " +
    MatrixRain720 +
    " 720w, " +
    MatrixRain480 +
    " 480w";

function MatrixRainImg(props) {
    return (
        <SketchImage
            image={MatrixRain1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

MatrixRainImg.propTypes = {
    loading: PropTypes.string,
};

export default MatrixRainImg;
