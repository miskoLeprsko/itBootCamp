// let li = document.querySelectorAll("li");
// console.log(li);
// li.forEach(lista => {
//     lista.addEventListener("click",() => {
//         lista.style.textDecoration = "line-through";
//     })
// })
// li.forEach(lista => {
//     lista.addEventListener("dblclick",() => {
//         lista.style.textDecoration = "none";
//     })
// })

let liZadaci = document.querySelectorAll("li");

liZadaci.forEach(li => {
    li.addEventListener("click" , ()=>{
        // 1. nacin
        if(li.style.textDecoration == "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through"
        }


    })
})
        // // 2. nacin
        // const allLiElements = document.querySelectorAll(`li`);
        // allLiElements.forEach(element => {
        //     element.addEventListener(`click`, () => {
        //         element.classList.toggle(`precrtaj`);
        //     });
        // });

