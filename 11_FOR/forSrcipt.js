// // ZADATAK BROJ 1 =====================================================================================================================
// // POMOCU WHILE PETLJE----------------------------------------------------------------------------
// let i = 1;

// while (i <= 20)
// {
//     console.log(`Broj ${i}`);
//     i++
// }

// // POMOCU FOR PETLJE----------------------------------------------------------------------------------

// for (j = 1; j <= 20; j++)
// {
//     console.log(`Brojevi od 1 do 20: ${j}`);
// }

// // ZADATAK BROJ 2 ====================================================================================

// for (k = 20 ; k >= 1 ; k--)
// {
//     console.log(`Brojevi od 20 do 1: ${k}`);
// }

// // ZADATAK BROJ 5  ODREDITI SUMU BROJEVA OD 1 DO N =========================================================================================

// let suma = 0;
// let n = 5;

// for (let m = 1; m <= 5; m++ )
// {
//     suma += m;
// }
// console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

// // ZADATAK 3 ISPITASI PARNE BROJEVE ==========================================================================================

// let m = 20;
// for (i = 1; i <= m; i++)
// {
//     if (i % 2 == 0)
//     {
//         console.log(i);
//     }

// }

// // ZADATAK 4 ISPISATI DVOSTRUKU VREDNOST BROJEVA OD 5 DO 10=============================================================================================

// let m = 15;

// for (let n = 5; n <= m; n++)
// {
//     console.log(n * 2);
// }

// // ZADATAK 6 Odrediti sumu brojeva od n do m =================================================================================================================================

// let m = 5;
// let suma = 0;

// for(n = 1; n <= m; n++) {
//     console.log(suma += n);
// }

// // ZADATAK 7 Odrediti proizvod brojeva od n do m ==================================================================================================================================

// let m = 5;
// let proizvod = 1;

// for(n = 1; n <= m; n++)
// {
//     console.log(proizvod *= n);
// }

// // ZADADTAK 8 Odrediti sumu kvadrata brojeva od n do m ===========================================================================================================================

// let m = 4;
// let sumaKvadrata = 0;

// for(n = 1; n <= m; n++)
// {
//     console.log(sumaKvadrata += n * n);
// }

// // ZADATAK 9 Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora)

// for(i = 1; i <=3; i++)
// {
//     console.log(i);
//     document.write(`<img src="${i}.jpg">`);
// }

// // ZADATAK 12 ISPISATI ARTMETICKU SREDINU OD N DO M

// let n = 3;
// let m = 95;
// suma = 0;
// br = 0;

// for(i=n; i <= m; i++)
// {
//     suma += i;
//     br++;
// }

// let arsr = suma / br;
// console.log(arsr);

// // ZADATAK BROJ 10 Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.==============================================================================================================

// let proizvod = 1;

// for (i = 20; i <= 100; i++)
// {
//     if(i % 11 === 0)
//     {
//         proizvod *= i;
//     }
// }
// console.log(proizvod);

// // ZADATAK 11 Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.==============================================================================

// let brojac = 0;

// for (i = 5; i <= 150; i++)
// {
//     if(i % 13 === 0)
//     {
//         brojac++;
//     }
// }
// console.log(brojac);

// // ZADATAK 16 Odrediti sumu brojeva od n do m koji nisu deljivi brojem a=================================================================================

// let n = 5 ;
// let m = 15 ;
// let suma = 0 ;
// let a = 4;

// for(i = n; i <= m; i++)
// {
//     if(i % a != 0)
//     {
//         suma += i;
//     }
// }

// console.log(suma);

// // ZADATAK broj 13 Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.===============================================================

// let brojacPozitivno = 0;
// let brojacNegativno = 0;
// let n = -3;
// let m = 6;

// for(i = n; i <= m; i++)
// {
//     if(i > 0)
//     {
//         brojacPozitivno++
//     }
//     else if (i < 0)
//     {
//         brojacNegativno++
//     }

// }
// console.log(brojacNegativno)
// console.log(brojacPozitivno)

// // ZADATAK broj 14 Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.===============================================================

// let brojac = 0;

// for(i = 5; i <= 50 ; i++)
// {
//     if(i % 3 ===0 || i % 5 === 0)
//     {
//         brojac++
//     }
// }

// console.log(brojac);

// //ZADATAK 17 Odrediti proizvod brojeva od n do m koji su deljivi brojem a ========================================================================================================================

// let k = 4;
// let j = 12;
// let a = 3;
// let proizvod = 1;

// for(i = k; i <= j; i++)
// {
//     if(i % a === 0)
//     {
//         proizvod *= i;
//     }
// }
// console.log(proizvod);

// // ZADDATAK 15  Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4. ===================================================================================================================

// let brojac2 = 0;
// let suma2 = 0;
// let g = 6;
// let v = 34;

// for (i = g; i <= v; i++)
// {
//     if(i % 10 === 4)
//     {
//         brojac2++;
//         suma2 += i;
//     }
// }
// console.log(brojac2);
// console.log(suma2);

// // ZADAAK 18 ODREDITI SA KOLIKO BROJEVA JE DELJIV UNETI BROJ K ==================================================================

// let x = 15;
// let brBrojevaDeljiv = 0;
// for(i = 1; i <= x; i++) {
//     if(x % i === 0)
//     {
//         brBrojevaDeljiv++;
//     }
// }
// console.log(brBrojevaDeljiv);

// x = 12;
// if(x == 1){
//     brBrojevaDeljiv = 1;
// } else {
//     brBrojevaDeljiv = 2;
//     for(i = 2; i<x/2;i++ ){
//         if(k%i ==0){
//             brBrojevaDeljiv++;
//         }
//     }
// }
// console.log(brBrojevaDeljiv);

// // ZADATAK 19 ODREDITI DA LI JE N PROST BROJ

// let z = 13;

// let br= 0;
// for(i =1; i<=z; i++){
//     if(z % i ==0) {
//         br++
//     }
// }

// console.log(br)

// if(br >2) {
//     console.log("broj nije prost")
// }else {
//     console.log("broj ej prost")
// }

// let prost = true;

// for(i = 2; i<=z/2; i++) {
//     if (z % i ==0){
//         prost = false;
//     }
// }
// if(prost == true){
//     console.log("broj ej prost")
// } else {
//     console.log("Broj nije prost");
// }

// ZADATAK 20 Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Svakom parnom redu dodati klasu „obojen“.Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.

let divTabela = document.getElementById("tabela");

let tabela = `<table>`;
for(i=1; i<=6; i++)
{
    let obojen ="belo";
    if (i % 2 ==0) {
        obojen = "roze";
    }
    tabela += 
    `<tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`;
}
tabela += `</table>`;
divTabela.innerHTML = tabela;