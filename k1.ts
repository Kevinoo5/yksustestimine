export class Isikukood{
    constructor(protected kood:string){}
    sugu(){
        return parseInt(this.kood[0]) % 2 == 0 ? "N" : "M";
    }
    synniaasta(){
        let aasta = parseInt(this.kood.substring(1,3));
        let sajand = parseInt(this.kood[0]);
        if(sajand == 3 || sajand == 4){
            return 1900 + aasta;
        }

        if(sajand == 5 || sajand == 6){
            return 2000 + aasta;
        }
        return 0;
    }
}