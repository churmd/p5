import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import BeautifulTrigFile1920 from "../../images/beautifulTrig/beautifulTrigDisabled-1920w.jpeg";
import BeautifulTrigFile1080 from "../../images/beautifulTrig/beautifulTrigDisabled-1080w.jpeg";
import BeautifulTrigFile720 from "../../images/beautifulTrig/beautifulTrigDisabled-720w.jpeg";
import BeautifulTrigFile480 from "../../images/beautifulTrig/beautifulTrigDisabled-480w.jpeg";

let srcSetString =
    BeautifulTrigFile1920 +
    " 1920w, " +
    BeautifulTrigFile1080 +
    " 1080w, " +
    BeautifulTrigFile720 +
    " 720w, " +
    BeautifulTrigFile480 +
    " 480w";

function BeautifulTrigImg(props) {
    return (
        <SketchImage
            image={BeautifulTrigFile1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

BeautifulTrigImg.propTypes = {
    loading: PropTypes.string,
};

export default BeautifulTrigImg;
