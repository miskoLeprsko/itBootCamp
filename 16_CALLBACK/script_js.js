// // test primeri
// let a = [-6, 8, 11, 6, 0];
// let b = ['pera', 'mika', 'laza'];

// // BEZ CALLBACK FUNKCIJE

// function ispisNizaKonzola(niz) {
//     let s = "";
//     for (let i = 0; i < niz.length; i++) {
//         s += niz[i] + " ";
//     }
//     console.log(s);
// }

// function ispisNizaStranica(niz) {
//     let s = "";
//     for (let i = 0; i < niz.length; i++) {
//         s += niz[i] + " ";
//     }
//     let div = document.getElementById('container');
//     div.innerHTML += s;
// }

// ispisNizaStranica(a);
// ispisNizaStranica(b);

// ispisNizaKonzola(a);
// ispisNizaKonzola(b);

// // Funkcija 1 : niz => {for petljom prodjemo kroz sve elemente niza , i generisani string ispisemo u konzoli}
// // Funkcija 2 : niz => {for petljom prodjemo kroz sve elemente niza, i generisani sring ispise u div tag}
// // a moze li ovako?
// // Funkcija : (niz, nacin) => {for perljom prodjemo kroz sve elemente niza, i generisani string ispise na zadati nacin}

// // Sa callback Funkcijama
// function ispisKonzola(p) {
//     console.log(p);
// }

// function ispisStranica(p) {
//     let div = document.getElementById('container');
//     div.innerHTML += p;
// }

// function ispisNiza(niz, cb) {
//     let s = "";
//     for (let i = 0; i < niz.length; i++) {
//         s += niz[i] + " ";
//     }
//     cb(s);
// }

// ispisNiza(a, ispisKonzola);
// ispisNiza(a, ispisStranica);
// ispisNiza(b, ispisKonzola);
// ispisNiza(b, ispisStranica);

// // Anonimna funkcija kao callback funkcija
// ispisNiza([1, 2, 3, 4, 5], function(p){
//     console.log(p);
// });

// // Arrow funkcija kao callback funkcija
// ispisNiza([9,8,7,6], p => {
//     console.log(p);
// });

// // FOREACH PETLJA
// a.forEach(ispisKonzola);
// // forEach petlja - prolazi kroz sve leemente niza iza svaki elelmnt niza poziva callback funkciju i prosledjuje vrednost elementa niza kao argument
// //  let a = [-6, 8, 11, 6, 0];
// // ispisKonzola(-6);
// // ispisKonzola(8);
// // ispisKonzola(11);
// // ispisKonzola(6);
// // ispisKonzola(0);

// b.forEach(ispisKonzola);
// //let b = ['pera', 'mika', 'laza'];
// // ispisKonzola = ['pera']
// // ispisKonzola = ['mikA']
// // ispisKonzola = ['laza']

// a.forEach( function(e) {
//     console.log(e);
// } )

// a.forEach(e => {
//     let div = document.getElementById("container");
//     div.innerHTML += e + " ";
// })

// a.forEach((e, i ) => {
//     console.log(`element ${e} u nizu ima indeks ${i}`);
// })

