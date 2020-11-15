import Tile from "./Tile";

export default class Maze {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [[]];

        for (let y = 0; y < height; y++) {
            this.tiles[y] = [];
            for (let x = 0; x < width; x++) {
                this.tiles[y][x] = new Tile(x, y);
            }
        }

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.__addAdjacentTiles(this.tiles[y][x]);
            }
        }
    }

    __addAdjacentTiles(tile) {
        const x = tile.x;
        const y = tile.y;

        if (this.__isValidCoord(x - 1, y)) {
            tile.addAdjacentTile(this.tiles[y][x - 1]);
        }

        if (this.__isValidCoord(x, y - 1)) {
            tile.addAdjacentTile(this.tiles[y - 1][x]);
        }

        if (this.__isValidCoord(x + 1, y)) {
            tile.addAdjacentTile(this.tiles[y][x + 1]);
        }

        if (this.__isValidCoord(x, y + 1)) {
            tile.addAdjacentTile(this.tiles[y + 1][x]);
        }
    }

    __isValidCoord(x, y) {
        if (x < 0) {
            return false;
        } else if (y < 0) {
            return false;
        } else if (x >= this.width) {
            return false;
        } else if (y >= this.height) {
            return false;
        } else {
            return true;
        }
    }

    show(p, canvasWidth, canvasHeight) {
        const maxTileWidth = canvasWidth / this.width;
        const maxTileHeight = canvasHeight / this.height;
        const tileLength = Math.min(maxTileWidth, maxTileHeight);

        const xOffset = (canvasWidth - tileLength * this.width) / 2;
        const yOffset = (canvasHeight - tileLength * this.height) / 2;

        p.push();

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const topLeftXPix = xOffset + x * tileLength;
                const topLeftYPix = yOffset + y * tileLength;
                this.tiles[y][x].show(p, topLeftXPix, topLeftYPix, tileLength);
            }
        }

        p.pop();
    }
}
