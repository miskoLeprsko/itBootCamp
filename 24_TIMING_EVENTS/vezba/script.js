const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const input = document.getElementById("input");

let broj = 0;

function count() {
    let broji = broj++;
    input.value = broji;
}

let counter;

btn1.addEventListener("click" , function (e) {
    e.preventDefault();
    if(counter === undefined) {
        counter =  setInterval(count, 1000);
    }
})

btn2.addEventListener("click" , function(e) {
    e.preventDefault;
    clearInterval(counter);
    counter = undefined;
})