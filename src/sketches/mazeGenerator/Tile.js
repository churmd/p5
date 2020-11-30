class Connection {
    constructor(tileA, tileB) {
        this.tileA = tileA;
        this.tileB = tileB;
        this.isWall = true;
    }
}

class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.connectionAbove = null;
        this.connectionRight = null;
        this.connectionLeft = null;
        this.connectionBelow = null;
    }

    setAboveConnection(tile) {
        this.connectionAbove = new Connection(this, tile);
    }

    setRightConnection(tile) {
        this.connectionRight = new Connection(this, tile);
    }

    setBelowConnection(tile) {
        this.connectionBelow = new Connection(this, tile);
    }

    setLeftConnection(tile) {
        this.connectionLeft = new Connection(this, tile);
    }

    getTileConnections() {
        const allConnections = [
            this.connectionAbove,
            this.connectionBelow,
            this.connectionLeft,
            this.connectionRight,
        ];

        return allConnections.filter((connection) => {
            return connection !== null;
        });
    }

    getWallConnections() {
        return this.getTileConnections().filter((connection) => {
            return connection.isWall;
        });
    }

    removeWallBetween(adjacentTile) {
        const connectionToAdjacentTile = this.getTileConnections().find(
            (connection) => {
                return (
                    connection.tileA === adjacentTile ||
                    connection.tileB === adjacentTile
                );
            }
        );

        connectionToAdjacentTile.isWall = false;
    }

    showTile(p, topLeftXPix, topLeftYPix, tileLength) {
        p.push();

        p.fill(255);
        p.strokeWeight(1);
        p.stroke(200);
        p.rect(topLeftXPix, topLeftYPix, tileLength, tileLength);

        p.pop();
    }

    showWalls(p, topLeftXPix, topLeftYPix, tileLength) {
        const wallThickness = tileLength / 8;
        const topRightXPix = topLeftXPix + tileLength;
        const topRightYPix = topLeftYPix;
        const bottomLeftXPix = topLeftXPix;
        const bottomLeftYPix = topLeftYPix + tileLength;
        const bottomRightXPix = topLeftXPix + tileLength;
        const bottomRightYPix = topLeftYPix + tileLength;

        p.push();

        p.strokeWeight(wallThickness);
        p.stroke(0);
        p.fill(0);

        if (!this.connectionAbove || this.connectionAbove.isWall) {
            p.line(topLeftXPix, topLeftYPix, topRightXPix, topRightYPix);
        }

        if (!this.connectionBelow || this.connectionBelow.isWall) {
            p.line(
                bottomLeftXPix,
                bottomLeftYPix,
                bottomRightXPix,
                bottomRightYPix
            );
        }

        if (!this.connectionLeft || this.connectionLeft.isWall) {
            p.line(topLeftXPix, topLeftYPix, bottomLeftXPix, bottomLeftYPix);
        }

        if (!this.connectionRight || this.connectionRight.isWall) {
            p.line(
                topRightXPix,
                topRightYPix,
                bottomRightXPix,
                bottomRightYPix
            );
        }

        p.pop();
    }
}

export { Connection, Tile };
