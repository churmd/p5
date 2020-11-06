import Hex from "./Hex";

/**
 * Creates a tiled hex grid with a hex placed in the center of the screen.
 */
export default class HexGrid {
    constructor(p, canvasWidth, canvasHeight, hexSideLength) {
        this.p = p;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.hexSideLength = hexSideLength;

        const horizontalHexSpacing = p.sin(60) * hexSideLength * 2;
        const verticleHexSpacing = 2 * hexSideLength * 0.75;

        const midWidth = canvasWidth / 2;
        const midHeight = canvasHeight / 2;

        const maxHexXPos = midWidth + horizontalHexSpacing / 2;
        const maxHexYPos = midHeight + verticleHexSpacing / 2;

        this.hexes = this.__createHexes(
            horizontalHexSpacing,
            verticleHexSpacing,
            maxHexXPos,
            maxHexYPos
        );
    }

    __createHexes(
        horizontalHexSpacing,
        verticleHexSpacing,
        maxHexXPos,
        maxHexYPos
    ) {
        let hexes = [];
        let visited = [];
        let explore = [];

        explore.push({ x: 0, y: 0 });

        while (explore.length > 0) {
            let coord = explore.pop();

            // Coordinates are floating points, so checking for equality is difficult
            // and converting to int leads to rounding issues.
            // So just check there is not a very close coordinate already visited.
            const matchesThisCoord = (element) => {
                let xDiff = Math.abs(element.x - coord.x);
                let yDiff = Math.abs(element.y - coord.y);
                return xDiff < 2 && yDiff < 2;
            };

            if (visited.some(matchesThisCoord)) {
                continue;
            }

            if (
                coord.x > maxHexXPos ||
                coord.x < -maxHexXPos ||
                coord.y > maxHexYPos ||
                coord.y < -maxHexYPos
            ) {
                continue;
            }

            visited.push(coord);

            let surroundingHexes = this.__getSurroundingHexes(
                coord,
                horizontalHexSpacing,
                verticleHexSpacing
            );
            explore = explore.concat(surroundingHexes);
        }

        visited.forEach((coord) => {
            let h = new Hex(this.p, coord.x, coord.y, this.hexSideLength);
            hexes.push(h);
        });

        return hexes;
    }

    __getSurroundingHexes(coord, horizontalHexSpacing, verticleHexSpacing) {
        let surroundingHexes = [];

        surroundingHexes.push({
            x: coord.x - horizontalHexSpacing,
            y: coord.y,
        });
        surroundingHexes.push({
            x: coord.x + horizontalHexSpacing,
            y: coord.y,
        });
        surroundingHexes.push({
            x: coord.x - horizontalHexSpacing / 2,
            y: coord.y + verticleHexSpacing,
        });
        surroundingHexes.push({
            x: coord.x + horizontalHexSpacing / 2,
            y: coord.y + verticleHexSpacing,
        });
        surroundingHexes.push({
            x: coord.x - horizontalHexSpacing / 2,
            y: coord.y - verticleHexSpacing,
        });
        surroundingHexes.push({
            x: coord.x + horizontalHexSpacing / 2,
            y: coord.y - verticleHexSpacing,
        });

        return surroundingHexes;
    }

    update() {
        this.hexes.forEach((hex) => {
            hex.update();
        });
    }

    show() {
        this.p.push();
        this.p.translate(this.canvasWidth / 2, this.canvasHeight / 2);

        this.hexes.forEach((hex) => {
            hex.show();
        });

        this.p.pop();
    }
}
