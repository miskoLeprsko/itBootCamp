// let i = 1;

// while(i <= 20){

//     console.log(i);
//     i++;

// }

// // 
// i = 1;

// let poruka = "";
// while (i <= 20) {
//     poruka = poruka + i + " ";
//     i++;
// }
// console.log(poruka);

// //  Zadatak 2.=====================================================================================================================
// // 1. nacin:

// i = 20;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// // 2. nacin:

// i = 1;
// while (i <= 20) {
//     console.log(21 - i);
//     i++;
// }

// /*

// */ 

// // zadatak 3=====================================================================================================================
// // 1. nacin

// i = 1;
// while (i <= 20) {
//     if(i % 2 == 0) {
//         console.log(i);      
//     }
//     i++;  
// }

// zadatak 4=====================================================================================================================

// let i = 0;

// while (i < 3) {
//     if(i === 1) {
//         document.write("<p style='color: green'>prvi</P>")
//     }
//     if(i === 2) {
//         document.write("<p style='color: black'>prvi</P>")
//     }
//     if(i === 3) {
//         document.write("<p style='color: red'>prvi</P>")
//     }

//     i++;
// }

// // ZADATAK 4 Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje


// let n = 5; 
// let i = 1; 

// while (i <= n) { 
//     let paragraph = document.createElement("p"); 
//     paragraph.textContent = "This is paragraph " + i; 

//     if (i % 3 === 1) {
//         paragraph.style.color = "red"; 
//     } else if (i % 3 === 2) {
//         paragraph.style.color = "green";
//     } else {
//         paragraph.style.color = "blue"; 
//     }

//     document.body.appendChild(paragraph); 
//     i++; 
// }

// // ZADATAK 5 Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira=====================================================================================================================

// let n = 5; 
// let i = 1;
// while (i <= n) { 
//     let img = document.createElement("img");
    
//     img.src = "https://via.placeholder.com/150";
  
//     if (i % 2 === 1) {
//         img.style.border = "2px solid red"; 
//     } else {
//         img.style.border = "2px dashed blue"; 
//     }
//     document.body.appendChild(img); 
//     i++; 
// }

// ZADATAK 4 SA PREDAVANJA KOJI JE RADIO STEFAN=====================================================================================================================

// let n = 7;
// let i = 1;

// while (i <= n)
// {   
//     if(i % 3 == 1)
//     {
//         document.body.innerHTML += `<p class='plava'>Paragraf broj ${i} </p>` ;
//     }
//     else if(i % 3 == 2)
//     {
//         document.body.innerHTML += `<p class='crvena'>Paragraf broj ${i} </p>` ;
//     }
//     else
//     {
//         document.body.innerHTML += `<p class='zelena'>Paragraf broj ${i} </p>` ;
//     }
    
//     i++;
// }

// // ZADATAK 4 SA PREDAVANJA KOJI JE RADIO STEFAN=====================================================================================================================

// let n = 7;
// let i = 1;
// // LET - UVEK VAZI  UBLOKU U KOME JE DEFINISANA
// while (i <= n)
// {   
//     let klasa;
//     if(i % 3 == 1)
//     {
//         klasa = "plava"
//     }
//     else if(i % 3 == 2)
//     {
//         klasa = "crvena"
//     }
//     else
//     {
//         klasa = "zelena"
//     }
//     document.body.innerHTML += `<p class='${klasa}'>Paragraf broj ${i} </p>` ;
//     i++;
// }

// // ZADATAK 6 ODREDITI SUMU BROJEVA OD 1 DO 100=====================================================================================================================

// let suma = 0;
// let i = 1;

// while (i <= 100) 
// {
//     suma = suma + i;
//     i++;
// }
// console.log(suma);

// //ZADATAK 7  Odrediti sumu od 1 do n=====================================================================================================================

// let n = 20;
// let i = 1;
// let suma = 0

// while (i <= n) {

//     suma += i;
//     i++;

// }
// console.log(suma);

// // ZADATAK 8 ODREDITI SUMU OD N DO M=====================================================================================================================

// let n = 2;
// let m = 6;
// let suma = 0;

// while(n <= m)
// {
//     suma += n;
//     n++
// }

// console.log(suma)

// // ZADATAK 9 odrediti proizvod brojeva n do m=====================================================================================================================

// let n = 2;
// let m = 8;
// let proizvod = 1;

// while(n <= m)
// {
//     proizvod *= n;
//     n++
// }

// console.log(proizvod)

// ZADATAK 10 odrediti sumu kvadrata parnih brojeva i sumu kubova neparnih brojeva=====================================================================================================================

// let n = 2;
// let m = 6;
// let sumaKvadrata = 0;
// let sumaKubova = 0;

// while (n <= m) {
//     if (n % 2 === 0)
//     {
//         sumaKvadrata += n * n;
//     } else {
//         sumaKubova += Math.pow(n, 3);
//     }
//     n++
// }

// console.log(sumaKvadrata);
// console.log(sumaKubova);

// // Zadatak 11 odrediti sa koliko brojeva je deljiv broj k=====================================================================================================================

// let k = 21;
// let i = 1;
// let deljivSa = 0;

// while (i <= k)
// {
//     if(k % i === 0)
//     {
//         deljivSa += 1;
//     }
//     i++
// }

// console.log(deljivSa);

// zadatak 12 Odrediti da li je dati broj prirodan broj n prost=====================================================================================================================


let n = 9;
let i = 1;
let brojDelioca = 0;

while (i <= n)
{
    if(n % i === 0)
    {
        brojDelioca += 1;
    }
    i++
}
if (brojDelioca == 2)
{
    console.log(`Broj ${n} je prost`);
}
else
{
    console.log(`Broj ${n} je prost`);
}

// }

// DODATNI ZADACI =====================================================================================

// let n = 21;

// let desetice = Math.trunc(n / 10);
// let jedicine = n % 10;

// let zbir = desetice + jedinice;
// let aritmetickaSredina = zbir / 2;
// let inverzija = 



// // zadatak 10 suma kvadrata / suma kubova===================================================================================

// let n = 2;
// let m = 5;
// let sumaKvadrataParnih = 0;
// let sumaKubovaNeparnih = 0;

// while (n <= m)
// {
//     if (n % 2 ==0)
//     {
//         sumaKvadrataParnih += n * n;
//     } 
//     else
//     {
//         sumaKubovaNeparnih += Math.pow(n , 3);
//     }
//     n++
// }
// console.log(sumaKvadrataParnih);
// console.log(sumaKubovaNeparnih);