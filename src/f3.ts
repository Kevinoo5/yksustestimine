export function täishäälikute_arv (sõna:string) {
    let count = 0;
    for(let i = 0; i < sõna.length; i++) {
        if(sõna[i].toLowerCase() == "a" || sõna[i].toLowerCase() == "e" || sõna[i].toLowerCase() == "i" || sõna[i].toLowerCase() == "o" || sõna[i].toLowerCase() == "u" || sõna[i].toLowerCase() == "õ" || sõna[i].toLowerCase() == "ä" || sõna[i].toLowerCase() == "ö" || sõna[i].toLowerCase() == "ü"){
            count++;
        }
    }
    return count;
}