// ZADATAK 15

var t = 60;

// if (t<-15 || t>40) {
//     console.log(`Ekstremna temperatura`);
// } else {
//     console.log(`Nije ekstremna temperatura`);
// }

if(t>=-15 && t<=40) {
    console.log(`Nije ekstremna`);
} else {
    console.log(`Ekstremna`);
}

//Zadatak 17
let datum = new Date();
let sati = datum.getHours();
let day = datum.getDay();

if(day >= 1 && day <=5) {
    if(sati>=9 && sati<20) {
        console.log("Otvoreno");
    } else {
        console.log(`Zatvoreno`);
        document.write('<p>Zatvoreno</p>');
    }
} else if (day === 0 || day === 6) {
    if(sati>=10 && sati<18) {
        console.log(`Otvoreno`);
        
    } else {
        console.log(`Zatvoreno`);
    
    }
}

// Zadatak 16

let godina = datum.getFullYear();

if(godina % 4 == 0 && godina % 100 != 0 || godina % 400 == 0) {
    console.log(`godina je prestupna`);
}



// 
let a = 5;
let b = 6;
let c = 7;

let max = a;

if(b > max) {
    max = b;
}
if(c > max) {
    max = c;
}

console.log(`Najveci od brojeva je ${max}`);

let maksimum = null;
if(a > b) {
    maksimum = a;
} else {
    maksimum = b;
}
if(maksimum < c) {
    maksimum = c;
}

if(a > b) {
    if (a > c) {
        console.log(a)
    } else {
        console.log(c);
    }
} else if (b > c) {
    console.log(b);
}