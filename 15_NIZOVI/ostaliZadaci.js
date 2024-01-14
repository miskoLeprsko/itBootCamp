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

//  24 zadatak da ti su nizovi
function interleaveArrays(a, b) {
    const n = a.length;
    const c = [];

    for (let i = 0; i < n; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }

    return c;
}

// Example usage:
// const c = [1, 2, 3];
const b = ['a', 'b', 'c'];

// const result = interleaveArrays(a, b);
console.log(result);

//zadata k 26
function calculateBFromArrayA(a) {
    const n = a.length / 2; // Assuming a.length is always even
    const b = [];

    for (let i = 0; i < n; i++) {
        b.push((a[i] + a[2 * n - 1 - i]) / 2);
    }

    return b;
}

// Example usage:
const a = [1, 2, 3, 4, 5, 6];
const resultB = calculateBFromArrayA(a);
console.log(resultB);

function calculateFourthLegLength(firstLeg, secondLeg, thirdLeg) {
    let fourthLeg;

    // Check if the lengths are valid (non-negative)
    if (firstLeg >= 0 && secondLeg >= 0 && thirdLeg >= 0) {
        // Determine the length of the fourth leg
        if (firstLeg > secondLeg && secondLeg > thirdLeg) {
            fourthLeg = firstLeg - secondLeg;
        } else if (secondLeg > thirdLeg) {
            fourthLeg = secondLeg - thirdLeg;
        } else {
            fourthLeg = thirdLeg - secondLeg;
        }
    } else {
        console.log("Invalid leg lengths. Please provide non-negative values.");
    }

    return fourthLeg;
}

// Example usage:
const firstLegLength = 10;
const secondLegLength = 8;
const thirdLegLength = 6;

const resultFourthLegLength = calculateFourthLegLength(firstLegLength, secondLegLength, thirdLegLength);
console.log("Length of the fourth leg:", resultFourthLegLength);

