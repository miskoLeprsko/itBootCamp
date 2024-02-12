const liZadaci = document.querySelectorAll(`li`);
let btnDodaj = document.querySelector("#submit");
let inputZadatka = document.querySelector("#task");
let ulZadaci = document.querySelector('ul');
let radioPocetak = document.getElementById('pocetak')
let radioKraj = document.getElementById('kraj')

ulZadaci.addEventListener("click" , e => {
    // console.log("klikntuo na ul");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.tagName);
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("precrtaj")
        e.target.remove()
    }
})

// btnDodaj.addEventListener("click", e => {
//     e.preventDefault();
//     let tekstZadatka = inputZadatka.value;
//     if(radioPocetak.checked) {
//         if(tekstZadatka !== "") {
//             let liNoviZadatak = document.createElement("li");
//             liNoviZadatak.textContent = tekstZadatka; // ili .innerHTML ili .textContent ili .inner
//             ulZadaci.appendChild(liNoviZadatak);
//             inputZadatka.value = '';
//         } else {
//             alert("Molimo vas da unesete obavezu.");
//         }
//     }
//     if(radioKraj.checked) {
//         if(tekstZadatka !== "") {
//             let liNoviZadatak = document.createElement("li");
//             liNoviZadatak.textContent = tekstZadatka; // ili .innerHTML ili .textContent ili .inner
//             ulZadaci.appendChild(liNoviZadatak);
//             inputZadatka.value = '';
//         } else {
//             alert("Molimo vas da unesete obavezu.");
//         }
//     }
    

// });
inputZadatka.addEventListener("keyup", e => {
    e.preventDefault();
    if(e.keyCode == 13) {
        let tekstZadatka = inputZadatka.value;
        if(radioPocetak.checked) {
            if(tekstZadatka !== "") {
                let liNoviZadatak = document.createElement("li");
                liNoviZadatak.textContent = tekstZadatka; // ili .innerHTML ili .textContent ili .inner
                ulZadaci.prepend(liNoviZadatak);
                inputZadatka.value = '';
            } else {
                alert("Molimo vas da unesete obavezu.");
            }
        }
        if(radioKraj.checked) {
            if(tekstZadatka !== "") {
                let liNoviZadatak = document.createElement("li");
                liNoviZadatak.textContent = tekstZadatka; // ili .innerHTML ili .textContent ili .inner
                ulZadaci.appendChild(liNoviZadatak);
                inputZadatka.value = '';
            } else {
                alert("Molimo vas da unesete obavezu.");
            }
        }
    }



});

// btnDodaj.addEventListener("click", e => {
//     e.preventDefault();
//     let tekstZadatka = inputZadatka.value;
//     if(radioPocetak.checked) {
//         if(tekstZadatka !== "") {
//             let liNoviZadatak = document.createElement("li");
//             liNoviZadatak.textContent = tekstZadatka; // ili .innerHTML ili .textContent ili .inner
//             ulZadaci.appendChild(liNoviZadatak);
//             inputZadatka.value = '';
//         } else {
//             alert("Molimo vas da unesete obavezu.");
//         }
//     }
//     if(radioKraj.checked) {
//         if(tekstZadatka !== "") {
//             let liNoviZadatak = document.createElement("li");
//             liNoviZadatak.textContent = tekstZadatka; // ili .innerHTML ili .textContent ili .inner
//             ulZadaci.appendChild(liNoviZadatak);
//             inputZadatka.value = '';
//         } else {
//             alert("Molimo vas da unesete obavezu.");
//         }
//     }
