"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aLoendaja = void 0;
function aLoendaja(sõna) {
    var count = 0;
    for (var i = 0; i < sõna.length; i++) {
        if (sõna[i].toLowerCase() == "a") {
            count++;
        }
    }
    return count;
}
exports.aLoendaja = aLoendaja;
