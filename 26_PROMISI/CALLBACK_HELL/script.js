let getJSON = (resource, callback) => {
// 1 . Kreiranje XML objekta
const request1 = new XMLHttpRequest();
// 
request1.addEventListener("readystatechange", function() {
    if(request1.readyState == 4 && request1.status == 200) {
        let data = JSON.parse(request1.responseText)
        callback(data, undefined);

    } else if (request1.readyState == 4) {
        callback(undefined,"Desila se greska");
    }
})

request1.open("GET" , resource);
request1.send();
}

getJSON("../JSON/prvi.json", (data, err) => {
    if(data) {
        console.log(data); // Sve je proslo Ok u prvi.jsopn i vraca pdoatke (data) iz prvi.json
        // Ako je sve bilo ok sa prvim fajlom, onda uzmi drugi.json fajl
        getJSON("../JSON/drugi.json", (data, err) => {
            if(data) {
                console.log(data); // Sve je proslo Ok u drugi.json i vraca podatke (data) i vraca pdoatke (data) iz drgui.json
                getJSON("../JSON/treci.json", (data, err) => {
                    if(data) {
                        console.log(data); // sve je proslo ok u treci.json
                    } else {
                        console.log(err); // ispisuje gresku iz treci.json
                    }
                })
            } else {
                console.log(err); // ispisuje gresku iz drugi.json
            }
        })
    } else {
        console.log(err); // ispisuje gresku
    }
});



console.log("Kraj Fajla");