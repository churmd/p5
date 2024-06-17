import React from "react";
import PropTypes from "prop-types";
import "./SketchTile.scss";
import { useNavigate } from "react-router-dom";

function SketchTile(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.routerPath);
    }

    return (
        <div className='sketch-tile' onClick={handleClick}>
            <div className='text'>
                {props.image}
                <h2>
                    {props.title}
                </h2>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

SketchTile.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired,
    routerPath: PropTypes.string.isRequired,
    isMobileFriendly: PropTypes.bool,
};

SketchTile.defaultProps = {
    isMobileFriendly: false,
};

export default SketchTile;
