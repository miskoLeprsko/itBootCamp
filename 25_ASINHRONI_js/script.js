// const request = new XMLHttpRequest();
// request.addEventListener("readystatechange", function() {
//     if(request.readyState == 4 && request.status == 200) {
//         let data = JSON.parse(request.responseText)
//         console.log(data);
//     } else if (request.readyState == 4) {
//         console.log("Desila se greska");
//     }
// })

// request.open("GET" , "https://jsonplaceholder.typicode.com/todos");
// request.send();

const request1 = new XMLHttpRequest();
request1.addEventListener("readystatechange", function() {
    if(request1.readyState == 4 && request1.status == 200) {
        let data = JSON.parse(request1.responseText)
        console.log(data);
        data.forEach(site => {
            if(site.website.includes('.com')) {
                console.log(site.website);
            }
        })
    } else if (request1.readyState == 4) {
        console.log("Desila se greska");
    }
})

request1.open("GET" , "https://jsonplaceholder.typicode.com/users");
request1.send();

///////////////////////////////////////////////////////////////////////////////////

const request2 = new XMLHttpRequest();
request2.addEventListener("readystatechange", function() {
    if(request2.readyState == 4 && request2.status == 200) {
        let data = JSON.parse(request2.responseText)
        data.forEach(name => {
            if(name.name.includes('Clementine')) {
                console.log(name.name);
            }
        })
    } else if (request2.readyState == 4) {
        console.log("Desila se greska");
    }
})

request2.open("GET" , "https://jsonplaceholder.typicode.com/users");
request2.send();

const request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", function() {
    if(request3.readyState == 4 && request3.status == 200) {
        let data = JSON.parse(request3.responseText)
        data.forEach(company => {
            company.forEach(e => {
                
            })
        })
    } else if (request3.readyState == 4) {
        console.log("Desila se greska");
    }
})

request3.open("GET" , "https://jsonplaceholder.typicode.com/users");
request3.send();


