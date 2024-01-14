// DOM

let inputNumber1 = document.getElementById("br1");
let inputNumber2 = document.getElementById("br2");
let btnRacunaj = document.getElementById("racunaj");
let paragrafRezultat = document.getElementById("rezultat")

btnRacunaj.addEventListener("click", (e) => {
    e.preventDefault();
    let br1 = Number(inputNumber1.value);
    let br2 = Number(inputNumber2.value);

    let inputOperacija = document.querySelector("input[name='operacija']:checked");
    let rezultat = 0;
    let operacija = inputOperacija.value;
    let o = "";

    if (operacija == "sabiranje") {
        rezultat = br1 + br2;
        o = "+";
    } else if (operacija == "oduzimanje") {
        rezultat = br1 - br2;
        o = "-";
    } else if (operacija == "mnozenje") {
        rezultat = br1 * br2;
        o = "*";
    } else {
        if(br2 == 0) {
            alert('Nije dozvoljeno deliti nulom');
            br1 = br2 = o = " ";
        } else {
            rezultat = br1 / br2;
            o = "/";
        }

    }

    paragrafRezultat.innerHTML = `${br1} ${o} ${br2} = ${rezultat}`
});


