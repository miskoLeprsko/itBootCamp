//  ZADATAK 19 Ispisati dužinu svakog elementa u nizu stringova. 

function ispisiDuzinuElemenata(niz) {
    for (var i = 0; i < niz.length; i++) {
        var trenutniElement = niz[i];
        var duzinaElementa = 0;

        for (var j = 0; j < trenutniElement.length; j++) {
            duzinaElementa++;
        }

        console.log("Duzina elementa na poziciji " + i + " je: " + duzinaElementa);
    }
}

// Primer poziva funkcije sa nizom stringova
var nizStringova = ["Hello", "World", "JavaScript"];
ispisiDuzinuElemenata(nizStringova);

// ZADATAK 20 Odrediti element u nizu stringova sa najvećom dužinom.

function najduziElement(niz) {
    if (niz.length === 0) {
        console.log("Niz je prazan.");
        return;
    }

    var najduzi = niz[0];

    for (var i = 1; i < niz.length; i++) {
        var trenutniElement = niz[i];

        if (trenutniElement.length > najduzi.length) {
            najduzi = trenutniElement;
        }
    }

    console.log("Element sa najvecom duzinom je: " + najduzi);
}

// Primer poziva funkcije sa nizom stringova
var nizStringova = ["Hello", "World", "JavaScript", "OpenAI"];
najduziElement(nizStringova);

//  ZADATAK 21 Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

function brojElemenataDuzihOdProseka(niz) {
    if (niz.length === 0) {
        console.log("Niz je prazan.");
        return;
    }

    var sumaDuzina = 0;

    for (var i = 0; i < niz.length; i++) {
        sumaDuzina += niz[i].length;
    }

    var prosecnaDuzina = sumaDuzina / niz.length;
    var brojElemenataDuzihOdProseka = 0;

    for (var j = 0; j < niz.length; j++) {
        if (niz[j].length > prosecnaDuzina) {
            brojElemenataDuzihOdProseka++;
        }
    }

    console.log("Broj elemenata dužih od proseka je: " + brojElemenataDuzihOdProseka);
}

// Primer poziva funkcije sa nizom stringova
var nizStringova = ["Hello", "World", "JavaScript", "OpenAI"];
brojElemenataDuzihOdProseka(nizStringova);

// ZADATAK 22 Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

function brojElemenataSaSlovomA(niz) {
    if (niz.length === 0) {
        console.log("Niz je prazan.");
        return;
    }

    var brojElemenataSaA = 0;

    for (var i = 0; i < niz.length; i++) {
        var trenutniElement = niz[i];

        for (var j = 0; j < trenutniElement.length; j++) {
            if (trenutniElement[j] === 'a' || trenutniElement[j] === 'A') {
                brojElemenataSaA++;
                break; // Prekida unutarnju petlju nakon pronalaska slova 'a'
            }
        }
    }

    console.log("Broj elemenata sa slovom 'a' je: " + brojElemenataSaA);
}

// Primer poziva funkcije sa nizom stringova
var nizStringova = ["Hello", "World", "JavaScript", "OpenAI"];
brojElemenataSaSlovomA(nizStringova);

// ZADATAK 23 
function brojElemenataSaPocetnimSlovomA(niz) {
    if (niz.length === 0) {
        console.log("Niz je prazan.");
        return;
    }

    var brojElemenataSaA = 0;

    for (var i = 0; i < niz.length; i++) {
        var trenutniElement = niz[i];

        if (trenutniElement.length > 0 && (trenutniElement[0] === 'a' || trenutniElement[0] === 'A')) {
            brojElemenataSaA++;
        }
    }

    console.log("Broj elemenata sa početnim slovom 'a' ili 'A' je: " + brojElemenataSaA);
}

// Primer poziva funkcije sa nizom stringova
var nizStringova = ["Aello", "World", "JavaScript", "OpenAI"];
brojElemenataSaPocetnimSlovomA(nizStringova);

// 