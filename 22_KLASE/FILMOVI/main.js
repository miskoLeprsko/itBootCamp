import Film from "./film.js";

let film1 = new Film("Cuvari formule", "Dragan Bjelogrlic" , 2024, [9,10,8,8,7,10,10,9]);
let film2 = new Film("Klopka", "Srdjan Golubovic", 2007, [8,9,9,7,7,10,10,8,7]);
let film3 = new Film("Maratonci trce pocasni krug", "Slobodan Sijan", 1982, [5,6,6,6,6]);

let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();

console.log(`Stampanje for petljom ===============================================================================================================================================================================`);

for(let i = 0 ; i < filmovi.length ; i++) {
    filmovi[i].stampaj();
}

console.log(`Stampanje forEach petljom ===============================================================================================================================================================================`);

filmovi.forEach ( film => {
    film.stampaj();
})

console.log(filmovi[1]);

console.log(`prosecna ocena filma ${film1.naslov} je: ${film1.prosecna()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

let vekFilmova = (nizFilmova, vek) => {
    nizFilmova.forEach ( film => {
        let vekFilma = Math.ceil(film.godinaIzdanja / 100);
        if(vekFilma == vek) {
            film.stampaj()
        }
    })
}

vekFilmova(filmovi,21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = nizFilmova => {
    let suma = 0 ;
    let brojac = 0;
    nizFilmova.forEach( film => {
        film.ocene.forEach( ocena => {
            suma += ocena;
            // brojac++;
        })
        brojac+=film.ocene.length
    })
    let avg = suma / brojac
    return avg
}

console.log(prosecnaOcena(filmovi));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (nizFilmova, ocena) => {
    let rezultat = [];

    for(let i = 0 ; i < nizFilmova.length ; i++) {
        let film = nizFilmova[i];

        let suma = 0 ;
        for( let j = 0 ; j < film.ocene.length; j++) {
            suma += film.ocene[j];
        }
        let avg = suma / film.ocene.length;

        if(avg > ocena) {
            rezultat.push(film);
        }
    }

    return rezultat;
}

console.log(iznadOcene(filmovi, 8));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu.

let iznadOceneNoviji = (nizFilmova, ocena) => {
    let najnovijiFilm = null;

    for(let i = 0 ; i < nizFilmova.length ; i++) {
        let film = nizFilmova[i]

        if(film.ocene.includes(ocena)) {
            if(!najnovijiFilm || film.godinaIzdanja > najnovijiFilm.godinaIzdanja) {
                najnovijiFilm = film;
            }
        }
    }
    if(najnovijiFilm) {
        console.log(`Naslov ${najnovijiFilm.naslov}`);
        console.log(`Naslov ${najnovijiFilm.reziser}`);
        console.log(`Naslov ${najnovijiFilm.godinaIzdanja}`);
        console.log(`Naslov ${najnovijiFilm.ocene}`);
    } else {
        console.log(`Nema takvog filma`);
    }
}

iznadOceneNoviji(filmovi, 6)

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10). 

let najcescaOcena = nizFilmova => {
    let br5 = 0;
    let br6 = 0;
    let br7 = 0;
    let br8 = 0;
    let br9 = 0;
    let br10 = 0;
    nizFilmova.forEach(film => {
        film.ocene.forEach(ocena => {
            switch (ocena) {
                case 5:
                    br5++;
                    break;
                case 6:
                    br6++;
                    break;
                case 7:
                    br7++;
                    break;
                case 8:
                    br8++;
                    break;
                case 9:
                    br9++;
                    break;
                case 10:
                    br10++;
                    break;
            }
        })
    })
    let nizOcena = [br5,br6,br7,br8,br9,br10];
    let maxElement = nizOcena[0];
    let maxIndex = 0;
    for(let i = 0 ; i < nizOcena.length ; i++) {
        if(maxElement < nizOcena[i]) {
            maxElement = nizOcena[i];
             maxIndex = i;
        }
    }
    return maxIndex + 5;

}
console.log(`Ocena koja se najvise ponavljala je: ${najcescaOcena(filmovi)}`);

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film (film koji ima najveću prosečnu ocenu).

let naboljeOcenjeniFilm = niz => {
    let najboljeOcenjeni = niz[0];
    let najboljaOcena = najboljeOcenjeni.prosecna();
    niz.forEach (film => {
        if(film.prosecna() > najboljaOcena) {
            najboljaOcena = film.prosecna();
            najboljeOcenjeni = film
        }
    })
    return najboljeOcenjeni;
}
console.log(`Najbolje ocenjen je film: ${naboljeOcenjeniFilm(filmovi).naslov}`);

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = niz => {
    let najboljiFilm = naboljeOcenjeniFilm(niz);
    let najmanjaOcena = najboljiFilm.ocene[0];

    najboljiFilm.ocene.forEach(ocena => {
        if (ocena < najmanjaOcena) {
            najmanjaOcena = ocena;
        }
    })
    return najmanjaOcena;
}

console.log(najmanjaOcenaNajboljeg(filmovi)); 

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = niz => {
    let nekiFilm = niz[0]; // nekiFilm = film jer se trazi OBJEKAT vraca film
    let prosecnaOcenaSvihFilmova = prosecnaOcena(niz);
    let najmanjaProsecnaOcena = niz[0].prosecna();
    let najmanjaRazlika = Math.abs(prosecnaOcenaSvihFilmova - najmanjaProsecnaOcena);
    
    niz.forEach(film => {
        if(Math.abs(prosecnaOcenaSvihFilmova - film.prosecna()) < najmanjaRazlika) {
            nekiFilm = film;
            najmanjaRazlika = Math.abs(prosecnaOcenaSvihFilmova - film.prosecna());
        }
    })
    return nekiFilm
}

console.log(osrednjiFilm(filmovi));

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = niz => {
    let najmanjaOcena = niz[0].ocene[0]

    niz.forEach(filmovi => {
        filmovi.ocene.forEach(ocena => {
            if(ocena < najmanjaOcena) {
                najmanjaOcena = ocena;
            }
        })
    })
    return najmanjaOcena;
}

console.log(najmanjaOcena(filmovi));