import React from "react";
import PropTypes from "prop-types";

function SketchImage(props) {
    return (
        <img
            loading={props.loading}
            src={props.image}
            srcSet={props.srcset}
            sizes={props.sizes}
            alt='Avatar'
            className='image'
        ></img>
    );
}

SketchImage.propTypes = {
    image: PropTypes.string.isRequired,
    srcset: PropTypes.string,
    sizes: PropTypes.string,
    loading: PropTypes.string,
};

SketchImage.defaultProps = {
    loading: "lazy",
};

export default SketchImage;
