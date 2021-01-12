import React from "react";

/**
 * A div that when clicked will toggle between fullscreen mode.
 */
class FullscreenElem extends React.Component {
    toggleCavasFullScreen = () => {
        const canvasElem = document.getElementById("canvas");
        const currentFullScreenElem = document.fullscreenElement;
        if (canvasElem === currentFullScreenElem) {
            this.exitFullScreen(canvasElem);
        } else {
            this.openFullScreen(canvasElem);
        }
    };

    openFullScreen = (elem) => {
        if (elem.requestFullscreen) {
            console.log(elem);
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE11 */
            elem.msRequestFullscreen();
        }
    };

    exitFullScreen = (elem) => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE11 */
            document.msExitFullscreen();
        }
    };

    render() {
        return <div {...this.props} onClick={this.toggleCavasFullScreen}></div>;
    }
}

export default FullscreenElem;
