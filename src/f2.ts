export function aLoendaja(sõna:string) {
    let count = 0;
    for(let i = 0; i < sõna.length; i++) {
        if(sõna[i].toLowerCase() == "a"){
            count++;
        }
    }
    return count;
}