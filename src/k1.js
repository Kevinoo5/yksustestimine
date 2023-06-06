"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Isikukood = void 0;
var Isikukood = /** @class */ (function () {
    function Isikukood(kood) {
        this.kood = kood;
    }
    Isikukood.prototype.sugu = function () {
        return parseInt(this.kood[0]) % 2 == 0 ? "N" : "M";
    };
    Isikukood.prototype.synniaasta = function () {
        var aasta = parseInt(this.kood.substring(1, 3));
        var sajand = parseInt(this.kood[0]);
        if (sajand == 3 || sajand == 4) {
            return 1900 + aasta;
        }
        if (sajand == 5 || sajand == 6) {
            return 2000 + aasta;
        }
        return 0;
    };
    return Isikukood;
}());
exports.Isikukood = Isikukood;
