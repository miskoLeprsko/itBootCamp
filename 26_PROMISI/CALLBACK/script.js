let mojaFunkcija = callback => {
    callback();
}

mojaFunkcija(() => {
    console.log("Callback Funkcija okidanje");
})

//////////////////////////

let sabiranje = funkcija => {
    funkcija(4, 5);
}

// 1. nacin

sabiranje((a, b) => {
    console.log(a+b);
});

// 2. nacin
function stampajSumu(x, y) {
    console.log(x + y);
}
sabiranje(stampajSumu);

///////////////////

let oduzimanje = funkcija => {
    funkcija(100, 30);
}

oduzimanje((a, b) => {
    return a - b;
})