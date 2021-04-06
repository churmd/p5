import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import CuneiformClock1920 from "../../images/cuneiformClock/cuneiformClock-1920w.jpeg";
import CuneiformClock1080 from "../../images/cuneiformClock/cuneiformClock-1080w.jpeg";
import CuneiformClock720 from "../../images/cuneiformClock/cuneiformClock-720w.jpeg";
import CuneiformClock480 from "../../images/cuneiformClock/cuneiformClock-480w.jpeg";

const srcSetString =
    CuneiformClock1920 +
    " 1920w, " +
    CuneiformClock1080 +
    " 1080w, " +
    CuneiformClock720 +
    " 720w, " +
    CuneiformClock480 +
    " 480w";

function CuneiformClockImg(props) {
    return (
        <SketchImage
            image={CuneiformClock1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

CuneiformClockImg.propTypes = {
    loading: PropTypes.string,
};

export default CuneiformClockImg;
