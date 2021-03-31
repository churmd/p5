import CuneiformNum from "./CuneiformNum";
import CuneiformFont from "./CuneiformOB.ttf";

const getCanvasHeight = () => {
    return window.innerHeight;
};

const getCanvasWidth = () => {
    return window.innerWidth;
};

const getTextSize = (textLen) => {
    const minDim = Math.min(getCanvasWidth(), getCanvasHeight());
    return minDim / textLen;
};

export const CounterSketch = (p) => {
    let cuneiformFont;
    let cuneiformCounter;

    p.preload = () => {
        cuneiformFont = p.loadFont(CuneiformFont);
    };

    p.setup = () => {
        const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
        cnv.parent("canvas");
        cnv.style("display", "block");

        p.frameRate(1);

        cuneiformCounter = new CuneiformNum(0);
    };

    p.draw = () => {
        p.background(51);

        const cuniformText = cuneiformCounter.toUnicodeString();
        const textSize = getTextSize(cuniformText.length);

        p.textSize(textSize);
        p.textAlign(p.CENTER, p.CENTER);
        p.fill(255);
        p.textFont(cuneiformFont);

        p.text(cuniformText, getCanvasWidth() / 2, getCanvasHeight() / 2);

        cuneiformCounter.add(1);
    };

    p.windowResized = () => {
        p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
    };
};

export const ClockSketch = (p) => {
    let cuneiformFont;

    p.preload = () => {
        cuneiformFont = p.loadFont(CuneiformFont);
    };

    p.setup = () => {
        const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
        cnv.parent("canvas");
        cnv.style("display", "block");

        p.frameRate(1);
    };

    p.draw = () => {
        p.background(51);

        const now = new Date();
        const hours = new CuneiformNum(now.getHours()).toUnicodeString();
        const minutes = new CuneiformNum(now.getMinutes()).toUnicodeString();
        const seconds = new CuneiformNum(now.getSeconds()).toUnicodeString();

        const cuneiformTime = hours + " : " + minutes + " : " + seconds;
        const textSize = getTextSize(cuneiformTime.length);

        p.textSize(textSize);
        p.textAlign(p.CENTER, p.CENTER);
        p.fill(255);
        p.textFont(cuneiformFont);

        p.text(cuneiformTime, getCanvasWidth() / 2, getCanvasHeight() / 2);
    };

    p.windowResized = () => {
        p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
    };
};
