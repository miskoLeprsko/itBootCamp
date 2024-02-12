class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u || localStorage.getItem("username");
        this.chats = db.collection("chats");
        this.unsub = false;
    };

    set room(r) {
        this._room = r;
        if(this.unsub) {
            this.unsub();
        }
    };

    set username(u) {
        this._username = u;
    };

    get room() {
        return this._room;
    };

    get username() {
        return this._username;
    };

    // addChat(poruka) {
    //     let datum1 = new Date();
    //     db.collection("chats").doc()
    //         .set({
    //             username: this.username,
    //             room: this.room,
    //             message: poruka,
    //             created_at: firebase.firestore.Timestamp.fromDate(datum1)
    //         })
    //         .then(() => {
    //             console.log("Uspesno dodat chat");
    //         })
    //         .catch(e => {
    //             console.log("Doslo je do greske");
    //         });
    // }

    async addChat(message) {
        try {
            // Kreiranje dokumenta koji zelimo da upisemo u bazu 
            let docChat = {
                message: message,
                room: this.room,
                username: this.username,
                created_at: new Date()
            };
            let response = await this.chats.add(docChat) // pamti dokument u bazi podataka
            return response; // Vraca promise, na koji mzoe da se zakaci .then() i .catch()
        }
        catch {
            console.error("Doslo je do greske");
        }

    }

    // snapshot for each promene nad bazom podataka
    // doc changes promene na konkretnom dokumentu

    getChats(callback) {
        this.unsub = this.chats
            .where("room", "==", this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type == "added") {
                        callback(change.doc.data());
                        // prikaziPoruku(change.doc.data());
                    }
                });
            });

    }

    updateUsername(newUsername) {
        this.username = newUsername;
    }

    updateRoom(newRoom) {
        this.room = newRoom;
    }
}

export default Chatroom;
