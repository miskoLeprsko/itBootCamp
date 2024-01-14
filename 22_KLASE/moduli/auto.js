class Auto  {
    constructor(m, b, k) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = k;
    }
    // KONSTRUKTOR BI TREBALO DA RADI DVE STVARI:
    // 1) DA KAZE KOJA POLJA CE IMATI SVAKI OBJEKAT TE KLASE
    //(POLJA NAZIVAJTE SA POCETNOM DONJOM CRTOM)
    // 2) da postavi vrednosti za ta POLJA
    sviraj() {
        console.log(`Auto marke ${this._marka} svira: Beep! Beep!`);
    }

    //GETERI I SETERI
    // SVAKO POLJE MOZE (NE MORA) DA IMA JEDANGETER I PO JEDAN SETER
    // GETER: DOHVATA VREDNOPST POLJA
    // SETER: POSTAVLJA VREDNOST POLJA

    // SETERI 
    set marka(m) {
        if(m.length > 0) {
            this._marka = m;
        } else {
            this._marka = "Skoda";
        }
        console.log(this.marka);
        console.log("Pozvan je seter za polje _marka");
    } 

    set boja(b) {
        if(b.length > 0) {
            this._boja = b;
        } else {
            this._boja = "crna";
        }
    }

    set imaKrov(k) {
        if (k === true || k === false) {
            this._imaKrov = k;
        } else {
            this._imaKrov = false;
        }
    }

    // GETERI
    get marka() {
        return this._marka
    }

    get boja() {
        return this._boja;
    }

    get imaKrov() {
        return this._imaKrov
    }
}

export default Auto;