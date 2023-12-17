// console.log("funkcije")

// // Funkcija za ispis u konzoli
// function zdravo()
// {
//     console.log("Zdravo Svete");
// }

// zdravo(); // Poziv funkcije

// // Funkcija za ispis prosledjenog teksa u konzoli

// function ispisiTekst(tekst)
// {
//     console.log(tekst);
// }
// ispisiTekst("Ovo je neki tekst");
// ispisiTekst("Ovo je neki drugi tekst");
// let t = "Moj tekst";
// ispisiTekst(t);

// ///////////////////////////////////////////////////////////////////////////////
// // Funkcija kojoj se prosledjuju dva parametra
// ///////////////////////////////////////////////////////////////////////////////

// function imePrezime(ime, prezime, godine) 
// {
//     console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${godine} godina.`);
// }

// imePrezime('Milos', 'Stanojevic', 27);

// let imeOsobe = "Stefan";
// let prezimeOsobe = "Stanimirovic";
// let godine = 34;
// imePrezime(imeOsobe,prezimeOsobe,godine);
// imePrezime()

// ///////////////////////////////////////////////////////////////////////////////
// // Funkcija koja vrsi sabiranje dva broja
// ///////////////////////////////////////////////////////////////////////////////

// function zbir(a, b) {
//     let rezultat = a + b;
//     console.log(`${a} + ${b} = ${rezultat}`);
// }

// zbir(6, 7);

// let b1 = -10;
// let b2 = 20;
// zbir(b1, b2);

// ///////////////////////////////////////////////////////////////////////////////
// // Funkcija koja vraca vrednost
// ///////////////////////////////////////////////////////////////////////////////

// function razlika(umanjenik, umanjilac) {
//     let razlikaRezultat = umanjenik - umanjilac;
//     return razlikaRezultat;

// }
// console.log(`Razlika je: ${razlika(7, 3)}`);
// let r = razlika(100, 4);
// console.log(`Funkcija vraca ${r}`);

// ///////////////////////////////////////////////////////////////////////////////
// // Funkcija sa dva returna
// ///////////////////////////////////////////////////////////////////////////////

// function temperaturaVode(temp) {
//     if(temp <= 0) {
//         return "Voda se ledi"
//     } else if (temp >= 100) {
//         return "Voda isparava"
//     } else {
//         return 'Voda je u tecnom agregatnom stanju'
//     }
// }

// temperaturaVode(-5);
// let tempVode = temperaturaVode(14);
// console.log(tempVode);

// ///////////////////////////////////////////////////////////////////////////////
// // Funkcija sa dva returna DRUGI NACIN
// ///////////////////////////////////////////////////////////////////////////////

// function temperaturaVode1(temp) {
//     let tekstZaIspis ='';
//     if(temp <= 0) {
//         tekstZaIspis = "Voda se ledi";
//     } else if (temp >= 100) {
//         tekstZaIspis = "Voda isparava";
//     } else {
//         tekstZaIspis = 'Voda je u tecnom agregatnom stanju';
//     }
//     return tekstZaIspis;
// }
// ///////////////////////////////////////////////////////////////////////////////
// // Funkcija sa dva returna treci NACIN
// ///////////////////////////////////////////////////////////////////////////////

// function temperaturaVode2(temp) {
//     let tekstZaIspis ='Voda je u tecnom agregatnom stanju';
//     if(temp <= 0) {
//         tekstZaIspis = "Voda se ledi";
//     } else if (temp >= 100) {
//         tekstZaIspis = "Voda isparava";
//     }

//     return tekstZaIspis;
// }

// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 3Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan 
// ///////////////////////////////////////////////////////////////////////////////

// function neparan(n) {
//     let broj = n;
//     if(broj % 2 === 0){
//         return "broj je paran";
//     } else {
//         return "broj je neparan"
//     }

// }

// let parNepar = neparan;
// console.log(neparan(6));

// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 4  Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja
// ///////////////////////////////////////////////////////////////////////////////

// function maks2(x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }

// console.log(maks2(8,5))

// function maks4(x, y, z, t) {
//     return Math.max(x, y, z, t);
// }

// console.log(maks4(2,22,6,9))

// // // 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
// // const maks2Function = (broj1, broj2) => {
// //     if (broj1 > broj2) {
// //         return broj1;
// //     } else {
// //         return broj2;
// //     }
// // }
// // const maks4Function = (a, b, c, d) => {
// //     return maks2Function(maks2Function(a, b), maks2Function(c, d));
// // }
// // console.log(maks4Function(20, 11, 16, 18)); (edited) 

// // ///////////////////////////////////////////////////////////////////////////////
// // // ZADATAK 5  Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike
// // ///////////////////////////////////////////////////////////////////////////////

// // function prikaziSliku(adresaSlike1){
// //     document.getElementById("img1").src = adresaSlike1;
// // }
// // prikaziSliku("1.jpg");
// // Drugi Nacin
// // function prikaziSliku2(adresaSlike2){
// //     document.write(`<img src="${adresaSlike2}">`);
// // }
// // prikaziSliku2("1.jpg");

// // ///////////////////////////////////////////////////////////////////////////////
// // // ZADATAK 5  Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike I PROSLEDJENI ID ELEMENTA ZA KOJI TA SLIKA TREBA DA SE PRIKAZEKOMPLEKSNIJA VARIJANTA
// // ///////////////////////////////////////////////////////////////////////////////

// function prikaziSlikuUElementu(putanja, id) {
//     let element = document.getElementById(id);
//     element.innerHTML = `<img src="${putanja}">`;
// }

// prikaziSlikuUElementu("1.jpg", "slika1");



// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 6  Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
// ///////////////////////////////////////////////////////////////////////////////

// function boja(nekaBoja, id)
// {
//     let pargh = document.getElementById(id);
//     pargh.innerHTML = `<p style="color: ${nekaBoja}">Neki tekst<p/>`;
// }

// boja("green", "d1");

// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 7 Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n u konzoli ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
// ///////////////////////////////////////////////////////////////////////////////

// function sedmiDan(n) {
//     if (n%7 == 0) {
//         console.log(`Nedelja`);
//     }else if ( n %7== 1) {
//         console.log(`Ponedeljak`);
//     }else if ( n%7 == 2) {
//         console.log(`Utorak`);
//     }else if ( n %7== 3) {
//         console.log(`Sreda`);
//     }else if ( n%7 == 4) {
//         console.log(`Cetvrtak`);
//     }else if ( n%7 == 5) {
//         console.log(`Petak`);
//     }else if ( n%7 == 6) {
//         console.log(`Subota`);
//     }
// }
// sedmiDan(4);

// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 8 Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.Prebrojati koliko ima ovakvih brojeva od n do m.
// ///////////////////////////////////////////////////////////////////////////////

// function deljivSaTri (n , m)
// {   
//     let brojac=0;
//     for(let i =n; i<=m; i++){
//         if(i%3==0){
//             console.log(i);
//             brojac++
//         }
//     }
//     console.log(`U intervalu od ${n} do ${m} ima ${brojac} brojeva deljivih sa tri`);
//     return brojac;
// }
// let a = deljivSaTri(10,30);
// console.log(a);

// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 9 Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji
// ///////////////////////////////////////////////////////////////////////////////

function sumiraj(n, m) {
    let suma = 0;
    for(let i = n; i <= m; i++) {
        suma += i
    }
    return suma;
}
let rezultat = sumiraj(1,5);
console.log(rezultat);


// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 10Napisati funkciju množi koja određuje i vraća proizvod brojeva od n doBrojeve n i m proslediti kao parametre funkciji.
// ///////////////////////////////////////////////////////////////////////////////

function mnozi(n, m) {
    let proizvod = 1;
    for(let i = n; i <= m; i++) {
        proizvod *= i;
    }
    return proizvod;
}

let rezultat2 = mnozi(2 ,4);
console.log(rezultat2);

// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 11 Napraviti funkciju aritmeticka koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
// ///////////////////////////////////////////////////////////////////////////////

function aritmeticka (n , m) {
    let suma = 0;
    let br = 0;
    for(let i = n; i <= m; i++) {
        suma += i;
        br++
    }
    let arsr = suma / br;
    return arsr
}

let rezultat3 = aritmeticka(4, 7);
console.log(rezultat3);

// ///////////////////////////////////////////////////////////////////////////////
// // ZADATAK 12 Napisati funkciju aritmetickaTri koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji
// ///////////////////////////////////////////////////////////////////////////////

function aritmetickaTri (n , m) {
    let suma = 0;
    let br = 0;
    for(let i = n ; i <=m; i++) {
        if(i % 10 === 3){
            suma += i;
            br++;
        }
    }
    let arsr = suma / br;
    return arsr
}

let rezultat4 = aritmetickaTri(12, 56);
console.log(rezultat4);

// ZADATAK 14============================================================================

function velicinaFonta(n)
{
    document.body.innerHTML = (`<p style="font-size: ${n}px">Velicina Fonta</p>`);
}
velicinaFonta(30);

// ZADATAK 15 =================================================================================

function recenica5(){
    for(i = 25; i <= 29; i++){
        document.write(`<p style="font-size: ${i}px">Neki text</p>`);
    }
}
recenica5()

function poslednjaPlata(n , a , d) {
    let lastSalary = a + ((n-1) * d);
    console.log(lastSalary);
}
poslednjaPlata(3, 87000, 2000);

function ukupnaPlata(n, a ,d) {
    let wholeSalary = a * n + n * d
    console.log(wholeSalary);
}

ukupnaPlata(5, 90000, 3000)

function ukupnaPlata1 (n, a, d){
    let suma = 0;
    for(let i = 0; i< n; i++){
        suma = suma + a + d * i;
    }
    return suma;
}
console.log(`Ukupna plata zaposlenog je ${ukupnaPlata1(5, 90000, 3000)} dinara`);