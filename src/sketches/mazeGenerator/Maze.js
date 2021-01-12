import { Tile } from "./Tile";

export default class Maze {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [[]];
        this.visistedTiles = new Set();
        this.walls = [];

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

        // init maze path
        const randomX = Math.floor(Math.random() * width);
        const randomY = Math.floor(Math.random() * height);
        const start = this.tiles[randomY][randomX];
        this.visistedTiles.add(start);
        this.walls = this.walls.concat(start.getWallConnections());
    }

    __addAdjacentTiles(tile) {
        const x = tile.x;
        const y = tile.y;

        if (this.__isValidCoord(x - 1, y)) {
            tile.setLeftConnection(this.tiles[y][x - 1]);
        }

        if (this.__isValidCoord(x, y - 1)) {
            tile.setAboveConnection(this.tiles[y - 1][x]);
        }

        if (this.__isValidCoord(x + 1, y)) {
            tile.setRightConnection(this.tiles[y][x + 1]);
        }

        if (this.__isValidCoord(x, y + 1)) {
            tile.setBelowConnection(this.tiles[y + 1][x]);
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

    __removeTileFromArray(array, tile) {
        return array.filter((elem) => {
            const xMatch = elem.x === tile.x;
            const yMatch = elem.y === tile.y;
            return !(xMatch && yMatch);
        });
    }

    __createFullMazePath() {
        let visistedTiles = new Set();
        let walls = [];

        // init
        const start = this.tiles[0][0];
        visistedTiles.add(start);
        walls = walls.concat(start.getWallConnections());

        while (walls.length > 0) {
            const index = Math.floor(Math.random() * walls.length);
            const randomWall = walls[index];

            const tileA = randomWall.tileA;
            const tileB = randomWall.tileB;
            const tileAVisited = visistedTiles.has(tileA);
            const tileBVisited = visistedTiles.has(tileB);

            if (tileAVisited && !tileBVisited) {
                walls = walls.concat(tileB.getWallConnections());
                tileA.removeWallBetween(tileB);
                tileB.removeWallBetween(tileA);
                visistedTiles.add(tileB);
            } else if (!tileAVisited && tileBVisited) {
                walls = walls.concat(tileA.getWallConnections());
                tileA.removeWallBetween(tileB);
                tileB.removeWallBetween(tileA);
                visistedTiles.add(tileA);
            }

            walls.splice(index, 1);
        }
    }

    __createMazeUntilWallRemoved() {
        if (this.walls.length > 0) {
            let wallRemoved = false;

            const index = Math.floor(Math.random() * this.walls.length);
            const randomWall = this.walls[index];

            const tileA = randomWall.tileA;
            const tileB = randomWall.tileB;
            const tileAVisited = this.visistedTiles.has(tileA);
            const tileBVisited = this.visistedTiles.has(tileB);

            if (tileAVisited && !tileBVisited) {
                this.walls = this.walls.concat(tileB.getWallConnections());
                tileA.removeWallBetween(tileB);
                tileB.removeWallBetween(tileA);
                this.visistedTiles.add(tileB);
                wallRemoved = true;
            } else if (!tileAVisited && tileBVisited) {
                this.walls = this.walls.concat(tileA.getWallConnections());
                tileA.removeWallBetween(tileB);
                tileB.removeWallBetween(tileA);
                this.visistedTiles.add(tileA);
                wallRemoved = true;
            }

            this.walls.splice(index, 1);

            if (!wallRemoved) {
                this.__createMazeUntilWallRemoved();
            }
        }
    }

    update() {
        this.__createMazeUntilWallRemoved();
    }

    show(p, canvasWidth, canvasHeight) {
        const maxTileWidth = canvasWidth / this.width;
        const maxTileHeight = canvasHeight / this.height;
        const tileLength = Math.min(maxTileWidth, maxTileHeight);

        const xOffset = (canvasWidth - tileLength * this.width) / 2;
        const yOffset = (canvasHeight - tileLength * this.height) / 2;

        p.push();

        this.__showTiles(p, xOffset, yOffset, tileLength);
        this.__showWalls(p, xOffset, yOffset, tileLength);

        p.pop();
    }

    __showTiles(p, xOffset, yOffset, tileLength) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const topLeftXPix = xOffset + x * tileLength;
                const topLeftYPix = yOffset + y * tileLength;
                this.tiles[y][x].showTile(
                    p,
                    topLeftXPix,
                    topLeftYPix,
                    tileLength
                );
            }
        }
    }

    __showWalls(p, xOffset, yOffset, tileLength) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const topLeftXPix = xOffset + x * tileLength;
                const topLeftYPix = yOffset + y * tileLength;
                this.tiles[y][x].showWalls(
                    p,
                    topLeftXPix,
                    topLeftYPix,
                    tileLength
                );
            }
        }
    }
}
