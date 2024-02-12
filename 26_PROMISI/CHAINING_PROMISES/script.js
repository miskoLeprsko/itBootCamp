let getJSON = resource => {

    const request1 = new XMLHttpRequest(); // 1 . Kreiranje XML objekta
    request1.open("GET", resource); // 2. Otvaramo kreirani zahtev
    request1.send();// 3 . Slanje zahteva

    let promise = new Promise((resolve, reject) => {
        request1.addEventListener("readystatechange", function () {
            if (request1.readyState == 4 && request1.status == 200) {
                let data = JSON.parse(request1.responseText)
                resolve(data);
    
            } else if (request1.readyState == 4) {
                reject("Doslo je do greske");
            }
        });
    });

    return promise;

}

getJSON("../JSON/prvi.json").then(sadrzaj => {
    console.log("prvi.json", sadrzaj);
    return getJSON("../JSON/drugi.json"); // ovo vraca promise, koija mzoe imati .then o .catch
}).then(sadrzaj2 => {
    console.log("drgui.json", sadrzaj2); // ako je drugi.json resolved onda ispisuje njegove podatke
}).catch( greska => {
    console.log("Greska u fajlu:" , greska)// ako je ma jedan fajl bio rejected upada u catch granu
}

);

// getJSON("../JSON/prvi.json", (data, err) => {
//     if(data) {
//         console.log(data); // Sve je proslo Ok u prvi.jsopn i vraca pdoatke (data) iz prvi.json
//         // Ako je sve bilo ok sa prvim fajlom, onda uzmi drugi.json fajl
//         getJSON("../JSON/drugi.json", (data, err) => {
//             if(data) {
//                 console.log(data); // Sve je proslo Ok u drugi.json i vraca podatke (data) i vraca pdoatke (data) iz drgui.json
//                 getJSON("../JSON/treci.json", (data, err) => {
//                     if(data) {
//                         console.log(data); // sve je proslo ok u treci.json
//                     } else {
//                         console.log(err); // ispisuje gresku iz treci.json
//                     }
//                 })
//             } else {
//                 console.log(err); // ispisuje gresku iz drugi.json
//             }
//         })
//     } else {
//         console.log(err); // ispisuje gresku
//     }
// });



console.log("Kraj Fajla");