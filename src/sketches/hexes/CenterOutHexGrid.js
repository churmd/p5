import HexGrid from "./HexGrid";

const timeBetweenColourChange = (60 / 255) * 1000;

export default class CenterOutHexGrid extends HexGrid {
    constructor(p, canvasWidth, canvasHeight, hexSideLength) {
        super(p, canvasWidth, canvasHeight, hexSideLength);
        this.lastHueIncrementTime = Date.now();
        this.setCenterOutPattern();
    }

    setCenterOutPattern() {
        this.p.push();
        this.p.colorMode(this.p.HSL, 255);

        const maxDistFromCenter = this.p.dist(
            this.canvasWidth / 2,
            this.canvasHeight / 2,
            0,
            0
        );

        this.hexes.forEach((hex) => {
            const hexDistFromCenter = this.p.dist(hex.x, hex.y, 0, 0);
            const startingSideLength = this.p.map(
                hexDistFromCenter,
                0,
                maxDistFromCenter,
                this.hexSideLength,
                0
            );
            hex.setSideLength(startingSideLength);
            hex.grow();

            const hue = this.p.map(
                hexDistFromCenter,
                0,
                maxDistFromCenter,
                180,
                50
            );
            const fillColour = this.p.color(0, 150, hue);
            const outlineColour = this.p.color(
                this.p.hue(fillColour),
                this.p.saturation(fillColour),
                this.p.lightness(fillColour) / 2
            );
            hex.setColour(fillColour, outlineColour);
        });

        this.p.pop();
    }

    update() {
        super.update();

        const currentTime = Date.now();
        if (currentTime - this.lastHueIncrementTime < timeBetweenColourChange) {
            return;
        }

        this.lastHueIncrementTime = currentTime;
        this.p.push();
        this.p.colorMode(this.p.HSL, 255);

        this.hexes.forEach((hex) => {
            const fillColour = this.p.color(
                this.p.hue(hex.fillColour) + 1,
                this.p.saturation(hex.fillColour),
                this.p.lightness(hex.fillColour)
            );
            const outlineColour = this.p.color(
                this.p.hue(hex.outlineColour) + 1,
                this.p.saturation(hex.outlineColour),
                this.p.lightness(hex.outlineColour)
            );
            hex.setColour(fillColour, outlineColour);
        });

        this.p.pop();
    }
}
