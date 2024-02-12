import {Chatroom} from "./chat.js"
import {ChatUI} from "./ui.js"

// DOM
let ul = document.querySelector('ul');
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let navRooms = document.querySelector('nav');
let colorPicker = document.getElementById("colorPicker");
let btnColor = document.getElementById("btnColor");


// Lokalna memorija
let username = "anonymus";
if(localStorage.username) {
    username = localStorage.username;
}

let boja = "white";
if(localStorage.currentColor) {
    boja = localStorage.currentColor;
    document.body.style.backgroundColor = boja;
}

// Objekti
let chatroom = new Chatroom("#js", username);
let chatui = new ChatUI(ul);

// Prikaz poruka na stranici
chatroom.getChats(data => {
    chatui.templateLI(data, username);
});

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message);
    formMessage.reset(); // inputMessage.value = "";
});

// Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit', e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom.username = newUsername;
    username = newUsername;
    
    localStorage.setItem("username", newUsername); 
    formUsername.reset();

    chatui.delete();
    // 4. Prikaži četove
    chatroom.getChats(data => {
        chatui.templateLI(data, username);
    });
    
    prikaziNotifikaciju(newUsername);

});

// Dugmad za promenu soba
navRooms.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON") {
        // 1. Uzimam ime sobe na koju je kliknuto
        let newRoom = e.target.textContent;
        // 2. Update sobe na koju je kliknuto
        chatroom.room = newRoom;
        // 3. Izbrisati sve poruke sa ekrana
        chatui.delete();
        // 4. Prikaži četove
        chatroom.getChats(data => {
            chatui.templateLI(data, username);
        });

        document.getElementById('btnGeneral').style.backgroundColor = "purple";
        document.getElementById('btnJs').style.backgroundColor = "purple";
        document.getElementById('btnHomeworks').style.backgroundColor = "purple";
        document.getElementById('btnTests').style.backgroundColor = "purple";

        e.target.style.backgroundColor = 'salmon';
    }
});

function prikaziNotifikaciju(newUsername){
    document.getElementById("korisnickoImeNotifikacija").innerHTML = newUsername;

    setInterval(()=>{
        document.getElementById("korisnickoImeNotifikacija").innerHTML = ""
    }, 3000)
    
}

// Promena boje

btnColor.addEventListener("click", e => {
    e.preventDefault()
    let boja = colorPicker.value;
    document.body.style.backgroundColor = boja
    localStorage.setItem("currentColor", boja);
});

