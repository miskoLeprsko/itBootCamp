// TEST PRIMERI

let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, 13];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8 , 5];

// ZADATAK 2 ODREDITI ZBIR BROJEVA CELOBROJNOG NIZA

let sumaElem = niz => {
    let suma = 0 ;
    for ( let i = 0 ; i < niz.length ; i++) {
        suma = suma + niz[i];
    }
    return suma;
}

console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));

// ZADATAK # odrediti proizvod elemenata celobrojnog niza

let proizvodElem = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}

console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

// Zadatak 4 ODREDITI SREDNJU VREDNOST ELEMENATA U NIZU

let srednjaVrednost = niz => {
    let suma = 0;
    let duzinaNiza = niz.length;
    for(let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    let arsr = suma / duzinaNiza;
    return arsr;
}

let srVrednost2 = niz =>sumaElem(niz) / niz.length;


console.log(srednjaVrednost(brojevi1));
console.log(srednjaVrednost(brojevi2));
console.log(srednjaVrednost(brojevi3));
console.log(srVrednost2(brojevi1));
console.log(srVrednost2(brojevi2));
console.log(srVrednost2(brojevi3));



// ZADATAK 4.1 ODREDITI SREDNJU VREDNOST PARNIH ELEMENATA CELOBROJNOG NIZA

let srVrednostParnih = niz => {
    let suma = 0;
    let br = 0;
    for(let i = 1 ; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += niz[i];
            br++;
        }
    }
    return suma / br;
}

console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));



// ZADATAK 5 Odrediti maksimalnu vrednost u celobrojnom nizu.
// Koraci :
// 1. Proglasiti prvi element ya najveci element niya
// 2. proci kroz ostale elemente niza i utvrditi nema li veceg elementa od do sada njenog maximuma 
// 3. Ako ima azurirati ovu vrednost
// 
// 

let maxNiz = niz => {
    let max = niz[0];
    for ( let i = 1 ; i < niz.length; i++) {
        if ( niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}
console.log(maxNiz(brojevi1));
console.log(maxNiz(brojevi2));
console.log(maxNiz(brojevi3));

//ZADATAK 7 ODREDITI INDEKS MAX ELEMENTA CELOBROJNOG NIZA
let  indMaxNiza = niz => {
    let max = niz[0];
    let index = 0;

    for (let i  = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}

console.log(indMaxNiza(brojevi5));

// ZADATAK 6 ODREDITI MINIMALNU VREDNOST U CELOBROJNOM NIZU

let minNiz = niz => {
    let min = niz[0];
    for ( let i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i]
        }
    }
    return min;
}

console.log(minNiz(brojevi1));
console.log(minNiz(brojevi2));
console.log(minNiz(brojevi3));
console.log(minNiz(brojevi4));
console.log(minNiz(brojevi5));

// ZADATAK  8 Odrediti indeks minimalnog elementa celobrojnog niza.
let  indMinNiza = niz => {
    let min = niz[0];
    let index = 0;

    for (let i  = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
            index = i;
        }
    }
    return index;
}

console.log(indMinNiza(brojevi5));

// zadatak 9 Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brojElemenataSr = niz => {
    let counter = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > srednjaVrednost(niz)){
            counter++
        }
    }
    return counter;
}

console.log(brojElemenataSr(brojevi1));
console.log(brojElemenataSr(brojevi2));
console.log(brojElemenataSr(brojevi3));
console.log(brojElemenataSr(brojevi4));

// zadatak 10 Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPozElemenata = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > 0){
            suma += niz[i];
        }
    }
    return suma;
}

console.log(zbirPozElemenata(brojevi1));
console.log(zbirPozElemenata(brojevi2));
console.log(zbirPozElemenata(brojevi3));
console.log(zbirPozElemenata(brojevi4));

// zadatak 11 Odrediti broj parnih elemenata u celobrojnom nizu.

let parniNiz = niz => {
    let counter = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0 && niz[i] != 0){
            counter++
        }
    }
    return counter;    
}
console.log(parniNiz(brojevi1));
console.log(parniNiz(brojevi2));
console.log(parniNiz(brojevi3));
console.log(parniNiz(brojevi4));

// ZADATAK 12 Odrediti broj parnih elemenata sa neparnim indeksom.

let brojParnihElemenata = (niz) => {
    let counter = 0;
    for(let i = 1 ; i < niz.length ; i += 2) {
        if  (niz[i] % 2 === 0) {
            counter++
        }
    }
    return counter;
}

console.log(brojParnihElemenata(brojevi1));
console.log(brojParnihElemenata(brojevi2));
console.log(brojParnihElemenata(brojevi3));
console.log(brojParnihElemenata(brojevi4));

// ZADATAK 13 Izračunati sumu elemenata niza sa parnim indeksom.

let sumaParnihElemenata = (niz) => {
    let suma = 0;
    for(let i = 0 ; i < niz.length ; i += 2) {
        suma += niz[i];
    }
    return suma;
}

console.log(sumaParnihElemenata(brojevi1));
console.log(sumaParnihElemenata(brojevi2));
console.log(sumaParnihElemenata(brojevi3));

// zadatak 14 Promeniti znak svakom elementu celobrojnog niza.
console.log("neki tekst");

let promenaZnaka = (niz) => {

    for(let i = 0 ; i < niz.length ; i++) {
        
        if(niz[i] > 0){
            niz[i] = -niz[i]
        } else if (niz[i] < 0){
            niz[i] = -niz[i]
        }
    }
    return niz

}

console.log(promenaZnaka(brojevi1))
console.log(promenaZnaka(brojevi2))
console.log(promenaZnaka(brojevi3))
console.log(promenaZnaka(brojevi4))

// zadatak 15 Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promenaZnakaNepar = (niz) => {

    for(let i = 0 ; i < niz.length ; i+=2) {
        if(niz[i] % 2 != 0) {
            niz[i] = niz[i]*(-1);
        }
        
    }
    return niz;

}

console.log(promenaZnakaNepar(brojevi1))
console.log(promenaZnakaNepar(brojevi2))
console.log(promenaZnakaNepar(brojevi3))
console.log(promenaZnakaNepar(brojevi4))

// let brojevi1 = [8, 4, -2, 0, 1, 0];
// let brojevi2 = [10, -5, 0, 13];
// let brojevi3 = [1, 2, 3, 4, 5, 6];
// let brojevi4 = [1, 5, 9, 3];
// let brojevi5 = [8, 6, 7, 8 , 5];
