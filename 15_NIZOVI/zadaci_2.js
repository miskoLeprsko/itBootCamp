let imena = ['Stefan' , 'Jelena', 'Marko', 'Milos' , 'Bratislav', 'Ljiljana'];

let duzinaSvakogElementa = niz => {
    for (let i = 0 ; i < niz.length ; i++) {
        let s = niz[i];
        console.log(s.length);
    }
}

duzinaSvakogElementa(imena);
// ZADATAK 2-ELEMENTA SA MAX DUZINOM
let najduziElement = niz => {
    let najduzi = niz[0];

    for( let i = 1; i < niz.length ; i++) {
        let trenutniElement = niz[i];

        if( najduzi.length < trenutniElement.length) {
            najduzi = trenutniElement;
        }
    }
    return najduzi;
}
console.log(najduziElement(imena));

// ZADATAK 2-ELEMENTA SA MAX DUZINOM

let stringMaxDuzina = niz => {
    let maxString = niz[0];
    let maxDuzina = maxString.length;
    for (let i = 1; i < niz.length ; i++) {
        let s = niz[i];
        if (s.length > maxDuzina) {
            maxString = s;
            maxDuzina = s.length;
        }
    }
    return maxString;
}

console.log(stringMaxDuzina(imena));
// ZADATAK 2-ELEMENTA SA MAX DUZINOM kompaktno

let stringMaxDuzinaKompaktno = niz => {
    let maxString = niz[0];
    let maxDuzina = maxString.length;
    for (let i = 1; i < niz.length ; i++) {
        let s = niz[i];
        if (s.length > maxDuzina) {
            maxString = s;
            maxDuzina = s.length;
        }
    }
    return maxString;
}

console.log(stringMaxDuzinaKompaktno(imena));

// ZADATAK 2- INDEX ELEMENTA SA MAX DUZINOM

let indexMaxDuzina = niz => {
    let maxString = niz[0];
    let maxDuzina = maxString.length;
    let maxIndex = 0;
    for (let i = 1; i < niz.length ; i++) {
        let s = niz[i];
        if (s.length > maxDuzina) {
            maxString = s;
            maxDuzina = s.length;
            maxIndex = i;
        }
    }
    return maxString;
}

console.log(stringMaxDuzina(imena));
console.log(indexMaxDuzina(imena));

let veciOdSr = niz => {
    let brojac = 0;
    let suma = 0;
    for (let i = 0 ; i <niz.length ; i++) {
        suma += niz[i].length;
    }
    let sr = suma / niz.length;
    console.log(sr)

    for (let j = 0 ; j < niz.length ; j++) {
        if (niz[j].length > sr) {
            brojac++;
        }
    }
    return brojac;
}

console.log(veciOdSr(imena));

function brojElemenataSaSlovomA(niz) {


    var brojElemenataSaA = 0;

    for (var i = 0; i < niz.length; i++) {
        var trenutniElement = niz[i];

        for (var j = 0; j < trenutniElement.length; j++) {
            if (trenutniElement[j] === 'a' || trenutniElement[j] === 'A') {
                brojElemenataSaA++;
                break; 
            }
        }
    }

    console.log("Broj elemenata sa slovom 'a' je: " + brojElemenataSaA);
}

let sadrziA = niz => {
    let brojac = 0 ;
    for ( let i = 0; i < niz.length ; i++) {
        let trenutniElement = niz[i];

        for (let j = 0 ; j < trenutniElement.length ; j++) {
            if(trenutniElement[j]==="a" || trenutniElement[j]==="A" ) {
                brojac++
            }
        }
    }
    return brojac;
}
console.log(sadrziA(imena));

let sadrziANaPrvomMestu = niz => {
    let brojac = 0 ;
    for ( let i = 0; i < niz.length ; i++) {
        let trenutniElement = niz[i];
        if (trenutniElement[0]==="a" || trenutniElement[0]==="A" ) {
            brojac++
        }
    }
    return brojac;
}
console.log(sadrziANaPrvomMestu(imena));

