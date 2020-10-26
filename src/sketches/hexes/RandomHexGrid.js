import HexGrid from "./HexGrid";

export default class RandomHexGrid extends HexGrid {
    constructor(p, canvasWidth, canvasHeight, hexSideLength) {
        super(p, canvasWidth, canvasHeight, hexSideLength);
        this.setRandomPattern();
    }

    setRandomPattern() {
        this.p.push();
        this.p.colorMode(this.p.HSL, 255);

        this.hexes.forEach((hex) => {
            const maxColourVal = 256;
            const hue = this.p.random(0, maxColourVal);
            const sat = this.p.random(maxColourVal * 0.2, maxColourVal * 0.7);
            const light = this.p.random(maxColourVal * 0.2, maxColourVal * 0.7);
            const fillColour = this.p.color(hue, sat, light);
            const outlineColour = this.p.color(
                this.p.hue(fillColour),
                this.p.saturation(fillColour),
                this.p.lightness(fillColour) / 2
            );
            hex.setColour(fillColour, outlineColour);

            const startingSize = this.p.random(0, this.hexSideLength);
            hex.setSideLength(startingSize);

            const isGrowing = this.p.random([true, false]);
            if (isGrowing) {
                hex.grow();
            } else {
                hex.shrink();
            }
        });

        this.p.pop();
    }

    __;
}
