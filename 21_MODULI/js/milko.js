"use strict";

let x = 4; // pomocna promenjiva
let y = 8; // pomocna promenjiva

// ......\
let rezultat = x + y; // promenjiva koja pamti reultat

let racunaj = () => { // funkcija kojia se trazi od mene
    document.body.innerHTML+= `<p>${rezultat}</p>`;
}
