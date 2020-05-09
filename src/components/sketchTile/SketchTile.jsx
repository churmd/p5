import React from "react";
import PropTypes from "prop-types";
import "./SketchTile.scss";

function SketchTile(props) {
	return (
		<div class='sketch-tile'>
			<img src={props.image} alt='Avatar' class='image'></img>
			<div class='overlay'>
				<div class='text'>
					<h3>{props.title}</h3>
					<p>{props.desc}</p>
				</div>
			</div>
		</div>
	);
}

SketchTile.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default SketchTile;
