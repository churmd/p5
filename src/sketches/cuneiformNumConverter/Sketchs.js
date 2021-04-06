import CuneiformNum from "./CuneiformNum";
import CuneiformFont from "./CuneiformOB.ttf";

const getCanvasHeight = () => {
    return window.innerHeight;
};

const getCanvasWidth = () => {
    return window.innerWidth;
};

const getTextSize = (textLen, horizontalSpace, verticalSpace) => {
    const minDim = Math.min(horizontalSpace, verticalSpace);
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
        const textSize = getTextSize(
            cuniformText.length,
            getCanvasWidth(),
            getCanvasHeight()
        );

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

        const colonPadding = (getCanvasWidth() * 0.1) / 4;

        const sectionWidth = (getCanvasWidth() * 0.9) / 3;

        const textSize = Math.min(
            getTextSize(hours.length, sectionWidth, getCanvasHeight()),
            getTextSize(minutes.length, sectionWidth, getCanvasHeight()),
            getTextSize(seconds.length, sectionWidth, getCanvasHeight())
        );

        p.fill(255);
        p.textSize(textSize);
        p.textAlign(p.CENTER, p.CENTER);

        p.textFont("sans-serif");
        p.text(":", sectionWidth + colonPadding, getCanvasHeight() / 2);
        p.text(":", sectionWidth * 2 + colonPadding * 3, getCanvasHeight() / 2);

        p.textFont(cuneiformFont);
        p.text(hours, sectionWidth * 0.5, getCanvasHeight() / 2);
        p.text(
            minutes,
            sectionWidth * 1.5 + colonPadding * 2,
            getCanvasHeight() / 2
        );
        p.text(
            seconds,
            sectionWidth * 2.5 + colonPadding * 4,
            getCanvasHeight() / 2
        );
    };

    p.windowResized = () => {
        p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
    };
};
