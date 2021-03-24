import { CuneiformUnicodes } from "./CuniformStrings";

export default class CuneiformNum {
    /**
     * @param {Integer} val The value to dusplay
     */
    constructor(val) {
        this.number = val;
        this.base60Format = this.__toBase60Array(this.number).reverse();
    }

    add(n) {
        this.number += n;
        this.base60Format = this.__toBase60Array(this.number).reverse();
    }

    /**
     * Returns a list of numbers that represent the given value in base 60,
     * with the first index being the lowest unit (aka 60^0).
     *
     * Think of it like binary but in base 60 not 2 and read left to right.
     *
     * Example for val 601:
     * 60^0 | 60^1
     *  1   |  10
     *
     * @param {Integer} val The value to convert to base 60
     */
    __toBase60Array(val) {
        if (val < 60) {
            return [val];
        } else {
            const quotient = Math.floor(val / 60);
            const remainder = val % 60;

            return [remainder].concat(this.__toBase60Array(quotient));
        }
    }

    toString() {
        return this.base60Format.toString();
    }

    toUnicodeString() {
        const unicodeGroups = this.base60Format.map((val) => {
            return this.__getUnicodeForSection(val);
        });
        return unicodeGroups.join(" ");
    }

    __getUnicodeForSection(val) {
        if (val < 10) {
            return this.__getUnicodeForDigit(val);
        } else if (val < 20) {
            return CuneiformUnicodes.Ten + this.__getUnicodeForDigit(val - 10);
        } else if (val < 30) {
            return (
                CuneiformUnicodes.Twenty + this.__getUnicodeForDigit(val - 20)
            );
        } else if (val < 40) {
            return (
                CuneiformUnicodes.Thirty + this.__getUnicodeForDigit(val - 30)
            );
        } else if (val < 50) {
            return (
                CuneiformUnicodes.Forty + this.__getUnicodeForDigit(val - 40)
            );
        } else if (val < 60) {
            return (
                CuneiformUnicodes.Fifty + this.__getUnicodeForDigit(val - 50)
            );
        } else {
            return "";
        }
    }

    __getUnicodeForDigit(val) {
        switch (val) {
            case 0:
                return CuneiformUnicodes.Zero;
            case 1:
                return CuneiformUnicodes.One;
            case 2:
                return CuneiformUnicodes.Two;
            case 3:
                return CuneiformUnicodes.Three;
            case 4:
                return CuneiformUnicodes.Four;
            case 5:
                return CuneiformUnicodes.Five;
            case 6:
                return CuneiformUnicodes.Six;
            case 7:
                return CuneiformUnicodes.Seven;
            case 8:
                return CuneiformUnicodes.Eight;
            case 9:
                return CuneiformUnicodes.Nine;
            default:
                return "";
        }
    }
}
