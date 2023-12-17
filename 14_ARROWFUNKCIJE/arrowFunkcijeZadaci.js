// ZADATAK 3 
// Varijanta 1: Preko klasicnih funkcija

if(true) {
    let x = 6;
}


function neparan(n) {
    let x; // x = vazi u bloku u kojem je definisan
    if(n % 2 == 1) {
        x = true;
    } else {
        x = false;
    } 
    return x;
}

function neparan2(n) {
    if (n % 2 == 1) {
        var x = true; // var - dostupna unutar funkcije u kojoj je deklarisana
    } else {
        var x = false;
    }
    return x
}


let p = 5;
console.log(neparan(p));
console.log(neparan2(p));

let neparan3 = (n) => {
    let x = false;
    if(n % 2 == 1) {
        x = true;
    }
    return x;
}

console.log(neparan3(3));

// let neparan4 = (n) => {
//     if(n % 2 == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

let neparan4 = (n) => {
    return (n % 2 == 1) ? true : false; // ?: TERNARNI OPERATOR
}

console.log(neparan4(6));

let radniDan = () => {
    let dan = new Date();
    let day = dan.getDay();
    if (day == 0 || day == 6) {
        console.log("Vikend je");
    } else {
        console.log("Radni dan");
    }
}

radniDan();

let neparan5 = (n) => {
    return (n % 2 == 1);
}

console.log(neparan5(6));

let neparan6 = (n) => (n % 2 == 1);
console.log(neparan6(6));

let uvecajZaDva = (n) => ( n += 2);
console.log(uvecajZaDva(5));

// let max2 = (a, b) => {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(max2(2, 5));

// let max4 = (a, b, c, d) => {
//     let max44=max2(max2(a, b),max2(c, d));
//     return max44;
// }

// console.log(max4(4,6,7,9));

// let slika = (adresa) => document.write(`<img src='${adresa}'>`);

// document.getElementById("d1").innerHTML = slika("1.jpg");

let maks2 = (a, b) => (a > b) ? a : b;
let max4 = (a, b, c, d) => maks2(maks2(a,b), maks2(c,d));
console.log(max4(22, 55 ,6 ,12));

let slika = (adresa) => `<img src = ${adresa}>`;
document.getElementById("d1").innerHTML += slika('1.jpg');