// 1. dohvatiti element na koji zelimo da postavimo osluskivac
let btnHello = document.getElementById("hello");
//2. postavimo osluskivac na event koji smo dohvatili
btnHello.addEventListener("click",() => {
    console.log("Hello!");
});

btnHello.addEventListener("dblclick", () =>{
    console.log("Hello hello!!")
});
// zadatak 1 ===============================================================
let btnBroji = document.getElementById("broji");
let pIspisBroja = document.getElementById("ispisBroja");
let br = 1;
btnBroji.addEventListener("click",() => {
    console.log(`Broj je ${br++}`);

    // zadatak 2 ===========================================================
    pIspisBroja.innerHTML = `Broj je ${br}`
})

//3.ZADATAK
let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spanBrojac = document.getElementById("brojac");
let broj = 0;
spanBrojac.innerHTML = broj;
btnMinus.addEventListener('click', () =>{
    broj--;
    if(broj < 0){ //4. zadatak
        broj = 0;
    }
    spanBrojac.innerHTML = broj;
});
btnPlus.addEventListener('click', () =>{
    broj++;
    spanBrojac.innerHTML = broj;
});

// zadatak 5
let btnIspisTekst = document.getElementById("ispisiTekst");
let pIspisTeksta = document.getElementById("ispisTeksta");
let inputTekst = document.getElementById("tekst");


btnIspisTekst.addEventListener("click", () => {
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});

// zadatak 6 : 
// Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen). 
// Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.

let radioMuski = document.getElementById("muski");
let radioZenski = document.getElementById("zenski");
let radioNeopredeljen = document.getElementById("neopredeljen");

btnIspisTekst.addEventListener("dblclick", () =>{
    // 1. NACIN
    if(radioMuski.checked){
        console.log('osoba je muskog pola');
    }
    else if(radioZenski.checked){
        console.log('osoba je zenskog pola');
    }
    else{
        console.log('osoba se nije opredelila');
    }

    // 2. NACIN

    let checkedPol = document.querySelector("input[name='pol']:checked");
    //console.log(checkedPol);
    //console.log(checkedPol.value, checkedPol.id);
    console.log(`osoba je ${checkedPol.value} pola`);

    // 3. NACIN 
    // Selektuj sve radio buttone po name atributu
    let polRadios = document.getElementsByName("pol");
    polRadios.forEach(radioButton => {
        if(radioButton.checked) {
            console.log(`Osoba ${radioButton.value} pola`);
        }
    });

    // nacin 4
    // selektuj mi sve radio buttone po name atributu - queryselectorAll
    let polRadiosInput = document.querySelectorAll("input[name='pol']");
    polRadiosInput.forEach(rb => {
        //console.log(rb);
        if(rb.checked) {
            console.log(`Osoba ${rb.value} pola`);
        }
        
    });
});

// ZADATAK 7 ============================================================

let dugme1 = document.getElementById("btn1");
let input1 = document.getElementById("inputKvadrat");
let ispis1 = document.getElementById("ispisKvadrat");

dugme1.addEventListener("click", () => {
    let brojbroj = input1.value;
    ispis1.innerHTML = `Kvadrat broja ${brojbroj} je ${brojbroj * brojbroj}`;
});


let dugme2 = document.getElementById("btn2");
let input2 = document.getElementById("inputPrepolovi");
let ispis2 = document.getElementById("ispisPrepolovi");

dugme2.addEventListener("click", () => {

    let broj123 = input2.value;
    ispis2.innerHTML = `Broj ${broj123} prepolovljen je ${broj123 / 2}`

});


let dugme3 = document.getElementById("btn3");
let input3 = document.getElementById("inputPovrsina");
let ispis3 = document.getElementById("ispisPovrsina");

dugme3.addEventListener("click" , () => {

    let broj321 = input3.value;
    ispis3.innerHTML = `Povrsina kruga za poluprecnik ${broj321} je ${broj321 * broj321 * Math.PI}`
});

// zadatak 8 ============================================================

