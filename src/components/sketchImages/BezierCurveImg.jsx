import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import BezierCurveFile1920 from "../../images/bezierCurve/bezierCurve-1920w.jpeg";
import BezierCurveFile1080 from "../../images/bezierCurve/bezierCurve-1080w.jpeg";
import BezierCurveFile720 from "../../images/bezierCurve/bezierCurve-720w.jpeg";
import BezierCurveFile480 from "../../images/bezierCurve/bezierCurve-480w.jpeg";

let srcSetString =
    BezierCurveFile1920 +
    " 1920w, " +
    BezierCurveFile1080 +
    " 1080w, " +
    BezierCurveFile720 +
    " 720w, " +
    BezierCurveFile480 +
    " 480w";

function BezierCurveImg(props) {
    return (
        <SketchImage
            image={BezierCurveFile1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

BezierCurveImg.propTypes = {
    loading: PropTypes.string,
};

export default BezierCurveImg;
