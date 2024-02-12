// DOM
let liZadaci = document.querySelectorAll('li');
let btnDodaj = document.querySelector('#submit');
let inputZadatka = document.querySelector('#task');
let ulZadaci = document.querySelector('ul');

let nizZadataka = [];
if(localStorage.getItem("zadaci") == null) {
    // ne postoje jos uvek zadaci u memoriji
    localStorage.setItem("zadaci", JSON.stringify (nizZadataka))
} else {
    //postoje zadaci u memoriji i treba ih ispisati u memoriji
    nizZadataka = JSON.parse(localStorage.getItem("zadaci")); //pretvara iz stringa u niz
    nizZadataka.forEach(zad => {
        let liZad = document.createElement('li'); // kreiramo novi li element
        liZad.textContent = zad; // Upisujemo u <li> tekst zadatka
        ulZadaci.appendChild(liZad) // Dodajemo <li> na kraju <ul>

    });
    
}

ulZadaci.addEventListener("click", e => {
    // console.log("Kliknuto na <ul>");
    // console.log(e);
    // console.log(e.target); // Ceo element na koji je kliknuto
    // console.log(e.target.tagName); // Tag na koji je kliknuto
    if(e.target.tagName == "LI") {
        // e.target.classList.toggle("precrtaj");
        e.target.remove();
        let indeksElementa = nizZadataka.indexOf(e.target.textContent);
        nizZadataka.splice(indeksElementa, 1);
        localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
    } 
});

inputZadatka.addEventListener("keypress", e => {
    console.log(e.keyCode);
    // Ako je neko kliknuo na taster "enter", njegov keyCod je 13
    if(e.keyCode == 13) {
        e.preventDefault();
        let tekstZadatka = inputZadatka.value;
        if(tekstZadatka.trim() != "") {
            let liNoviZadatak = document.createElement("li"); // Kreiram novi <li>
            liNoviZadatak.textContent = tekstZadatka; // Dodajemo tekst u <li> // ili .innerHTMl ili .textContent ili .innerText
        
            let radioDodaj = document.querySelector("input[name='add']:checked");
            // console.log(radioDodaj, radioDodaj.value);
            if(radioDodaj.value == "end") {
                ulZadaci.appendChild(liNoviZadatak); // Dodajemo <li> na kraj <ul>
                nizZadataka.push(tekstZadatka)
            } else {
                ulZadaci.prepend(liNoviZadatak); // Dodajemo <li> na kraj <ul>
                nizZadataka.unshift(tekstZadatka);
            }
        }
        localStorage.setItem("zadaci" ,JSON.stringify(nizZadataka) )
        inputZadatka.value = ""; /// Isprazni input polje
    }
});