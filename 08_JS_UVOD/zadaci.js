// // // Zadatak 1

// // let sati = 23;
// // let minuti = 0;

// // let poslePonoci = sati * 60 + minuti;

// // console.log("Minuta od ponoci: " + poslePonoci);

// // //Zadatak 1.1

// // let doPonoci = 24 * 60 - poslePonoci;

// // console.log("Minuta do ponoci: " + doPonoci);

// // // Zadatak 2

// let minuti = 750;

// let minutiOstatak = minuti % 60;
// let sati = Math.trunc(minuti/60);

// console.log(sati)
// console.log(minutiOstatak)
// console.log("Sati: " + sati + " Minuti " + preostaliMinuti)

// //Zadatak 3


// let roba1 = 300;
// let roba2 = 200;
// let novcanica = 1000;

// let kusur = novcanica - (roba1 + roba2);

// console.log("Kusur je: " + kusur);

// console.log(950%60);
// console.log(Math.trunc(950/60));

// Zadatak 6
//Prva konverzija

// let ukupnoEur = 70;
// let kursEur = 117.29;

// let ukupnoDin = ukupnoEur * kursEur;
// console.log(ukupnoDin);

// //druga konverzija
// let novacDin = 5000;
// let novacEur = novacDin / kursEur;
// console.log(novacEur);

//Zadatak7

let eur = 100;
let kursEvro = 117.29;
let kursDolar = 106.79;

let Dinari = eur * kursEvro;
let Dolari = Dinari / 106.79;

let dolariEvro = kursDolar / kursEvro;

let din = 10000;
let dol = din / kursDolar;
let evr = din / kursEvro;
let dolToEvr = evr / dol;

console.log(Dolari);
console.log(dolariEvro);

console.log(dolToEvr);

//Zadatak 8

let cel;
let far;

cel = 20;
far = 15;

let f = cel * 1.8 + 32;
let c = (far - 32) * 0.556;

console.log(f);
console.log(c);

let kel;
kel = 50;

let k = cel + 273.15;
let kToC = kel - 273.15

console.log(k);
console.log(kToC);

