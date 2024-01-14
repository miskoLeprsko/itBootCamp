// console.log(document);//document je objekat (koren DOM stabla)
// console.log(document.body);// body svojstvo document objekta je objekat

let e1 = document.getElementById("p2");
// console.log(e1); // (jedinstveni) objekat iz dom stabla

// let el2 = document.getElementsByClassName("par");
// console.log(el2); //HTML kolekcija objekata iz dom stabla

// // Pristup elementima HTML kolekcije
// for(let i = 0 ; i < el2.length ; i++) {
//     console.log(el2[i]);
// }

// // //HTML kolekcije ne poseduju forEach petlju
// // //ovo ne moze: 
// // el2.forEach(el => {
// //     console.log(el);
// // })

// let niz = Array.from(el2);
// niz.forEach(el => {
//     console.log(el);
// });

// let el3 = document.getElementsByTagName("p");

// let el4 = document.getElementsByName("p");
// console.log(el4);

// el4.forEach(el =>{
//     console.log(el);
// })

// let t1 = document.querySelector("#p2");
// console.log(t1);

// let t2 = document.querySelector(".par")
// console.log(t2);

// let t3 = document.querySelectorAll(".par");
// console.log(t3);

// t3.forEach(el => {
//     console.log(el);
// });

// let t4 = document.querySelectorAll("div p.par, div a.par");
// console.log(t4);

// let p1 = document.querySelector("p");
// console.log(p1);
// let error = document.querySelector("div.error");
// console.log(error);
// let linkovi = document.querySelectorAll("a");
// console.log(linkovi);
// let img = document.querySelectorAll("img");
// console.log(img);
// let tr = document.querySelectorAll("tr");

// console.log(tr);

// let link = document.querySelector("a");
// link.innerHTML= "<span style = 'font-weight: bold'>Novi tekst</span> prvog linka";

// //link.href = "https://www.google.com";
// link.setAttribute('href', 'https://www.google.com');
// link.target = "_blank";
// link.style.color = "red";
// link.style.fontSize = "24px";

// linkovi.forEach(link => {
//     link.target = "_blank";
//     link.style.color = "red";
//     link.style.fontSize = "24px";
//     // link.setAttribute('style', 'color: red; font-size: 18px; text-decoration: none;');
// })

// let pAll = document.querySelectorAll("p");
// pAll.forEach(el => {
//     el.innerHTML += " VAZNO";
//     el.style.color = "purple";
// })

// let divGreska = document.querySelectorAll("div.error");
// divGreska.forEach (e => {
//     e.innerHTML += "<h1>Greska</h1>";
// })

// let img = document.querySelectorAll("img")
// img.forEach(e => {
//     e.style.alt = "Neke slike";
// })

// let parParg = document.getElementsByClassName("par");
// for(let i = 0 ; i < parParg.length ; i++) {
//     parParg[i].style.backgroundColor = "green";
// }

// let neparParg = document.getElementsByClassName("nepar");
// for(let i = 0 ; i < neparParg.length ; i++) {
//     neparParg[i].style.backgroundColor = "red";
// }

// let paragrafN = document.querySelectorAll("p");
// paragrafN.forEach((e, index) =>{
//     let kv = (index + 1) * (index + 1)
//     e.innerHTML += `${index+1} <sup></sup>=${kv}`
// })

// let linkovi1 = document.querySelectorAll("a");


// for(let i = 0 ; i < linkovi1.length ; i++) {
//     if(i % 2 === 0) {
//         linkovi1[i].style.backgroundColor = "green";
//         linkovi1[i].style.color = "purple";
//     } else {
//         linkovi1[i].style.backgroundColor = "blue";
//         linkovi1[i].style.color = "white";
//     }
// };
// // linkovi1.style.padding = "5px";
// // linkovi1.style.fontSize = "18px";
// // linkovi1.style.textDecoration = "none";
// // linkovi1.target = "_blank"
// console.log(linkovi1);

// // SEDMA VEZBA
// document.querySelectorAll(`a`).forEach(a => {
//     a.style.padding = `5px`;
//     a.style.fontSize = `18px`;
//     a.style.textDecoration = `none`;
// }) ;
// document.querySelectorAll(`a:nth-child(even)`).forEach(a => {
//     a.style.backgroundColor = `green`;
//     a.style.color = `red`;
// });
// document.querySelectorAll(`a:nth-child(odd)`).forEach(a => {
//     a.style.backgroundColor = `blue`;
//     a.style.color = `white`;
// });
// // OSMA VEZBA
// document.querySelectorAll(`img`).forEach(img => {
//     if(img.src.endsWith(`.jpg`)) {
//         img.style.border = `2px solid blue`;
//     }
// });
// // OSMA drugi nacin
// document.querySelectorAll(`img[src$=".jpg"]`).forEach(img => {
//         img.style.border = `22px solid green`;
// });
// // DEVETA VEZBA
// document.querySelectorAll(`a`).forEach(a => {
//     if(a.target == `_blank`) {
//         a.target = `_top`;
//     }
//     else {
//         a.target = `_blank`;
//     }
// });


// console.log(e1.parentNode);
// let div = e1.parentNode;
// console.log(div);
// console.log(div.childNodes);
// console.log(div.childNodes[1])

let paragraf = document.querySelectorAll("p");
console.log(paragraf);
paragraf.forEach((e, i) => {
    if(i % 2 === 0) {
        e.classList.add("error");
    } else {
        e.classList.add("success");
    }
});

for(let i = 0 ; i < paragraf.length ; i++) {
    if(i % 3 === 0) {
        paragraf[i].style.fontSize = "15px";
    } else if(i % 3 === 1) {
        paragraf[i].style.fontSize = "20px";
    } else {
        paragraf[i].style.fontSize = "25px";
    };
};

// for(le)

// // UROSEV ZADATAK

// let paragraf = document.querySelectorAll('p');
// paragraf.forEach((p, broj )=> {
//     if (broj % 2 == 0){
//         p.classList.add('error');
//     } else {
//         p.classList.add('sucess')
//     }
//     if (broj % 3 == 0){
//         p.style.fontSize = '15px';
//     } else if (broj % 3 == 1){
//         p.style.fontSize = '25px';
//     } else {
//         p.style.fontSize = '35px';
//     }
//     p.style.maxWidth = '50%';
//     if (p.textContent.includes('sucess')){
//         p.classList.add('sucess');
//     } else if (p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     p.classList.toggle('error');
// });

//DODATI NOVI DIV TAG DOKUMENTU

let noviDiv = document.createElement("div");
noviDiv.innerHTML = "Div Kreiran u Js-u";
noviDiv.style.backgroundColor = "green";
document.body.appendChild(noviDiv);

let noviNaslov = document.createElement("h3");
noviNaslov.innerHTML = "Novi naslov";
noviDiv.appendChild(noviNaslov);

//KREIRATI UL LISTU SATAVKAMA CIJI JE SADRZAJ PROIZVOLJNI TEKST I DODATI JE U DIV ELEMENT

let lista = document.createElement("ul");
noviDiv.append(lista);

let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka lsite";
let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka lsite";
let li3 = document.createElement("li");
li3.innerHTML = "Treca stavka lsite";

lista.append(li1,li2,li3);

// Iz ul lsite izbaciti prvu stavku

// lista.removeChild(li1);
// lista.removeChild(lista.firstChild)
lista.removeChild(lista.childNodes[0])


// ZAMENITI DRUGU STAVKU LSITE

let li4 = document.createElement("li");
li4.innerHTML = "Cetvrta stavka liste";
lista.replaceChild(li4, li3);

// Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.

li5 = document.createElement("li");
lista.appendChild(li5);
let slika = document.createElement("img");
slika.src = "slika.jpg";
slika.alt = "Neka slika"
li5.appendChild(slika);