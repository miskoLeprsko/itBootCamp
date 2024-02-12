function getUsers(resolve, reject) {
    let request = new XMLHttpRequest;
    request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200) {
            // sve Ok
            // 1 : dohvati podatke
            let data = JSON.parse(request.responseText);
            // 2 : pozovi callvack punkciju koja obradjuje podatke
            resolve(data)
        } else if (request.readyState === 4) {
            reject("Desila se greska ")
        }
    })
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.send();// menja ready state za taj objekat
}

function zad2(niz) {
    niz.forEach(korisnik => {
        if(korisnik.website.includes(".com")) {
            document.body.innerHTML += korisnik.website + "<br>";
        }
    });
}

function ispisStringa(str) {
    document.body.innerHTML += str + "<br>";
}

// zadatak 2 

getUsers(zad2, ispisStringa); // poziv funkcije getUsers
document.body.innerHTML += "1" + "<br>"
document.body.innerHTML += "2" + "<br>"

// zadatak 3 preko anonimne funkcije

getUsers(niz => {
    niz.forEach(user => {
        if(user.company.name.includes("Group") || user.company.name.includes("LLC") ) {
            document.body.innerHTML += user.company.name + "<br>"
        }
    })
},porukua => {
    document.body.innerHTML += poruka + "<br>";
})