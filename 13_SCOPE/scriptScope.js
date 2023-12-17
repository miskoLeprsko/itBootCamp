let a = 10;
var b = 20;
// b = 20; isto kao da smo ispred b stavili var
const c = 30;
console.log(a ,b);

a = 15;
var b = 25;
// const c = 40; ne moze jer je konstanta
console.log(a, b);

// if(true){
//     console.log(a);
//     let a = -4;
// }

if(true) {
    let a = 50; // to je samo za scope u if naredbi
    var b = 70; // globalno
    let d = 60;
    console.log(a, b, d);
    if(true) {
        console.log(a,b,d);
    }

    // let a = 60; ovo je greska jer ej scope isti
}

console.log(a, b, d);