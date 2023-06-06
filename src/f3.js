"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.täishäälikute_arv = void 0;
function täishäälikute_arv(sõna) {
    var count = 0;
    for (var i = 0; i < sõna.length; i++) {
        if (sõna[i].toLowerCase() == "a" || sõna[i].toLowerCase() == "e" || sõna[i].toLowerCase() == "i" || sõna[i].toLowerCase() == "o" || sõna[i].toLowerCase() == "u" || sõna[i].toLowerCase() == "õ" || sõna[i].toLowerCase() == "ä" || sõna[i].toLowerCase() == "ö" || sõna[i].toLowerCase() == "ü") {
            count++;
        }
    }
    return count;
}
exports.täishäälikute_arv = täishäälikute_arv;
