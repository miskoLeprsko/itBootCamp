// let a = 5;
// let b = 3;

// if (a > b ) {
//     console.log(`a je vece od b`);
// } else {
//     console.log(`a nije vece od b`);
// }

// let zapremina = 120;

// if (zapremina <= 100) {
//     document.write("<p style='color: green'>Pack up</P>")
// } else {
//     document.write("<p style='color: red'>Throw away</p>")
// }

// let datum = new Date();
// let godina = datum.getFullYear();
// let godinaRodjenja = 1996;
// let punoletstvo = godina - godinaRodjenja;

// if (punoletstvo >= 18) {
//     document.write('<img src="e244">');
    
// } 

// let temp = 10;

// if (temp > 0) {
//     document.write("<p style='color: red'>Temperatura u plusu</p>")
// } else {
//     document.write("<p style='color: blue'>Temperatura u minusu</p>")
// }

// let pol = "m";

// if (pol == "m") {
//     console.log("muski pol")
// }

let t = 15;
if(t >= 0) {
    console.log("Temperatura je u plusu");
    let paragraf = document.getElementById("temperatura");
    paragraf.innerHTML = "Temperatura je u plusu";
    paragraf.style.color = "red";
} else {
    console.log("Temperatura je u minusu");
    let paragraf = document.getElementById("temperatura");
    paragraf.innerHTML = "Temperatura je u minusu";
    paragraf.style.color = "blue";
}
