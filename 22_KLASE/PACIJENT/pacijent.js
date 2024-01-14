class Pacijent {
    constructor(i,v,t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }


    set ime(i) {
        this._ime = i;
    }
    set visina(v) {
        if(v < 0 || v > 250) {
            this._visina = 180;
        } else {
            this._visina = v;
        }
        
    }
    set tezina(t) {
        if(t < 0 || t > 550) {
            this._tezina = 250;
        } else {
            this._tezina = t;
        }
    }
    get ime() {
        return this._ime
    }
    get visina() {
        return this._visina
    }

    get tezina() {
        return this._tezina
    }

    stampaj() {
        console.log(`${this.ime} je visine ${this.visina} i ima ${this.tezina} kilograma`);
    }

    bmi() {
        let bmii = this.tezina / (this.visina / 100)  ** 2
        console.log(`bmi pacijenta je ${bmii}`);
        return bmii
    }

    kritican() {
        if(this.bmi() < 15 || this.bmi() > 40) {
            return true
        } else {
            return false
        }
    }
}

export default Pacijent