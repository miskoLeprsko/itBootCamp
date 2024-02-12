import Chatroom from "./chat.js"
import ChatUI from "./ui.js"

let chat1 = new Chatroom ("#js","milica");
let chat2 = new Chatroom ("#general","milutin");
let chat3 = new Chatroom ("#homeworks","milos");


// chat1.addChat("Kada imamo predavanje")


// chat1.addChat("Potavljen je domaci zadatak.")
// .then(() => {
//     console.log("Uspesno dodata poruka");
// })
// .catch(() => {
//     console.log("Doslo je do greske");
// })


// chat2.addChat("Cao!")
//     .then(() => {
//         console.log("Uspesno dodata poruka");
//     })
//     .catch(() => {
//         console.log("Doslo je do greske");
//     })

// chat1.addChat("Dobro nam dosli!")

// chat1.addChat("Cao drugari");

// chat1.getChats(data => {
//     prikaziPoruku(data);
// }) 

// function prikaziPoruku(data) {
//     let list = document.querySelector("section ul");
//     let item = document.createElement("li");

//     item.textContent = `${data.username}: ${data.message}`;
//     list.appendChild(item);
// }


// const unList = document.querySelector('section ul');

// DOM =====================================================================================================
let ulChats = document.querySelector("ul");
let navRooms = document.querySelector('nav');
// OBJEKTI =================================================================================================
let chatUI1 = new ChatUI(ulChats);
// CHATROOM =================================================================================================
chat1.getChats(data => {
    // console.log(chatUI1.templateLI(data));
    chatUI1.listaPoruka.append(chatUI1.templateLI(data));
})
// POSALJI PORUKU ==========================================================================================
let posaljiPoruku = document.getElementById('btnSend');
let inputTekst = document.getElementById('messageInput');


posaljiPoruku.addEventListener('click', () => {
    let poruka = inputTekst.value.trim(); 

    if (poruka !== '') {

        chat1.addChat(poruka)
            .then(() => {
                inputTekst.value = '';
            })
            .catch(error => {
                console.error("Doslo je do greske:", error);
            });
    }
});

// UPDATE USERNAME=============================================================================================
let updateUsername = document.getElementById("btnSend1");
let inputUpdate = document.getElementById("updateInput");

updateUsername.addEventListener("click" , () => {
    let noviUserName = inputUpdate.value.trim();

    if(noviUserName !== "") {
        chat1.username = noviUserName;
        localStorage.setItem("username", noviUserName);
    }
})


// console.log(chat1.username);

// PREBACIVANJE SOBA ===========================================================================================

navRooms.addEventListener('click', e => {
    if (e.target.tagName == "SPAN") {

        // 1. Uzimam ime sobe na koju je kliknuto
        let newRoom = e.target.textContent;
        console.log(newRoom);
        // 2. Update sobe na koju je kliknuto
        chat1.updateRoom(newRoom);
        // 3. Izbrisati sve poruke sa ekrana
        chatUI1.delete();
        // 4. Prikaži četove
        chat1.getChats(data => {
            chatUI1.listaPoruka.append(chatUI1.templateLI(data));
        });
    }
});




