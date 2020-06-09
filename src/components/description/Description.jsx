import React from "react";
import MobileFriendly from "@material-ui/icons/MobileFriendly";

function Description(props) {
	return (
		<div className='description'>
			<p>
				A collection of animations made using{" "}
				<a href='https://p5js.org/'>P5.js</a>, source code for this
				website can be found{" "}
				<a href='https://github.com/churmd/p5'>here</a>
			</p>
			<p>
				Some animations are intensive to run, so mobile friendly ones
				are marked with the icon <MobileFriendly />
			</p>
			<p>
				Many of these projects have been inspired by the following
				sources and tutorials:{" "}
				<a href='https://www.youtube.com/user/shiffman'>
					The coding Train
				</a>
				,{" "}
				<a href='https://www.youtube.com/user/numberphile'>
					Numberphile
				</a>
				,{" "}
				<a href='https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw/featured'>
					3Blue1Brown
				</a>
			</p>
		</div>
	);
}

export default Description;
