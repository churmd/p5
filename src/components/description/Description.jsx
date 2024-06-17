import React from "react";

function Description(props) {
    return (
        <div className='description'>
            <p>
                A collection of animations made using{" "}
                <a href='https://p5js.org/'>P5.js</a>, source code for this
                website can be found on{" "}
                <a href='https://github.com/churmd/p5'>github</a>
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
