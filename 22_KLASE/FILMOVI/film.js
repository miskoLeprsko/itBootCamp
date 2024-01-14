class Film {


    constructor(n,r,g) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
    }

    //seteri - set metode postavljaju vrednost polja
    set naslov(n) {
        this._naslov = n;
    }

    set reziser(r) {
        this._reziser = r;
    }

    set godinaIzdanja(gi) {
        if(gi < 1800) {
            this._godinaIzdanja = 1800;
        } else {
            this._godinaIzdanja = gi;
        }

    }
    // GETTERI - vraca vrednost polja

    get naslov() {
        return this._naslov
    }
    get reziser() {
        return this._reziser
    }

    get godinaIzdanja() {
        return this._godinaIzdanja
    }

    stampaj() {
        console.log(`Naslov ${this.naslov}`);
    }
}

let film1 = new Film("Cuvari formule", "Dragan Bjelogrlic" , 2024);
let film2 = new Film("Klopka", "Srdjan Golubovic", 2007);
console.log(film1);
console.log(film2);
film1.stampaj();
film1.godinaIzdanja = -2000
console.log(film1.godinaIzdanja);
film1.godinaIzdanja = 2024;
console.log(film1.godinaIzdanja);
film1.godinaIzdanja = -2024;
console.log(film1);
console.log(`Film ${film2.naslov} , Godina izdanja:${film2.godinaIzdanja} , ${film2.reziser}`);

export default Film;