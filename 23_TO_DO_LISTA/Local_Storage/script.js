// Pamcenje/Upisivanje/Smestanje u lokalnoj memoriji
localStorage.setItem("ime","Stefan");
localStorage.setItem("grad","Nis");

// Izmena/Update u lokalnoj memoriji
localStorage.setItem("grad","Leskovac");
// Ukoliko postoji neki key u LS onda vrsi update
//Ukoliko ne postoji neki ket u local storage-u onda vrsi upis

//Preuzimanje iz lokalne memorije
let unetoIme = localStorage.getItem("ime");
console.log(unetoIme);
console.log(localStorage.getItem("grad"));

console.log(localStorage.getItem("godine")); // vraca null jer kljuc ne postoji

localStorage.removeItem("grad"); //brise iz local storage-a po zadatom kljucu