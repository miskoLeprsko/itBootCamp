// KLASICNE (IMENOVANE) FUNKCIJE

function sum(a, b) {
    return a + b;
}

let rez = sum(1,2); //poziv funkcije (po imenu, iza toga se navoe argumenti)
console.log(rez);

// ANONIMNE FUNKCIJE (FUNKCIJE BEZ IMENA)

let suma = function (a, b)
{
    return a + b;
}

console.log(suma(3, 5));

// ARROW FUNKCIJE (= ANONIMNE FUNKCIJE KOJE IMAJU 2 SPECIFICNA SVOJSTVA)
// 1) IMAJU SKRACENI ZAPIS
// 2) ZNACENJE KLJUCNE RECI THIS
let suma2 = (a, b) => {
    return a + b;
}

console.log(suma2(1, 2));

let hello = () => {
    console.log("Hello World");
}

hello();

let echo = (s1, s2) => {
    let result = s1 + ", " + s2;
    console.log(result);
}
echo('Milos', 'Stanojevic');

let m = 19;