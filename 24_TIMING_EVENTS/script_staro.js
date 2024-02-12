window.setTimeout(() => {
    console.log("poruka ispisana nakon 3 sekunde");
}, 3000);
console.log(1);
console.log(2);
window.setTimeout(() => {
    console.log("Poruka ispisana nakon nekog vremena");
}, 2000 );
console.log(3);
console.log(4);
console.log(4);
console.log(4);
console.log(4);
console.log(4);
console.log(4);

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const div = document.getElementById("ispis");

let timer = null;

btn1.addEventListener("click", function(e) {
    e.preventDefault();
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    if(timer === null) {
        timer = setTimeout(() => {
            div.innerHTML += `${h}: ${m}: ${s}`
            timer = null
        }, 2000);
    }

});

btn2.addEventListener("click", function(e) {
    e.preventDefault();
    clearTimeout(timer);
    timer = null;
});

