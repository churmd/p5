import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import CuneiformCounter1920 from "../../images/cuneiformCounter/cuneiformCounter-1920w.jpeg";
import CuneiformCounter1080 from "../../images/cuneiformCounter/cuneiformCounter-1080w.jpeg";
import CuneiformCounter720 from "../../images/cuneiformCounter/cuneiformCounter-720w.jpeg";
import CuneiformCounter480 from "../../images/cuneiformCounter/cuneiformCounter-480w.jpeg";

const srcSetString =
    CuneiformCounter1920 +
    " 1920w, " +
    CuneiformCounter1080 +
    " 1080w, " +
    CuneiformCounter720 +
    " 720w, " +
    CuneiformCounter480 +
    " 480w";

function CuneiformCounterImg(props) {
    return (
        <SketchImage
            image={CuneiformCounter1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

CuneiformCounterImg.propTypes = {
    loading: PropTypes.string,
};

export default CuneiformCounterImg;
