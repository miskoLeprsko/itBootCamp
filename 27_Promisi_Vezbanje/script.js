const form = document.querySelector("#order");
const capacity = document.querySelector('#capacity');
const div = document.querySelector("#result");
/*
1) Odrediti artikle koji vise nisu na stanju
2) Odrediti ukupnu tezinu svih artikala
3) Ako je ta tezina manja od kapacitea kamiona, onda : 
    3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
    3.2) Inace , ispisati poruku da kamion nema trazeni kapacitet.
*/

function getItems(resource, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function() {
        if(request.readystate === 4 && request.status === 200 ) {
            //sve ok obradi zahtev
            let data = JSON.parse(request.responseText);// responseText smesta se odgovor sa servera
            resolve(data); // funkcija radi nesto sa podacima koji su stigli sa servera
        } else if(request.readyState === 4) {
            //desila se neka greska
            reject("Desila se greska");
        }
    })


    request.open("GET", resource);
    request.send();
}



function submitFormVarijanta1(event) {
    event.preventDefault();
    // 1) Odrediti artikle koji vise nisu na stanju

    let nizArtikala = [];

    getItems("./json/stock.json", (data) => {
        data.forEach(artikal => {
            if(artikal.stock == 0) {
                nizArtikala.push(artikal.id)
            }
        });
        console.log(nizArtikala);
    }, (msg) => {
        div.innerHTML = msg;
    });
/*
2) Odrediti ukupnu tezinu svih artikala
3) Ako je ta tezina manja od kapacitea kamiona, onda : 
    3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
    3.2) Inace , ispisati poruku da kamion nema trazeni kapacitet.
*/
}

form.addEventListener("submit", submitFormVarijanta1);