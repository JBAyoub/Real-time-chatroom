import { initializeApp } from 'firebase/app';
import { getFirestore,addDoc,Timestamp } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBH3jopzRD05BlnOaMHaQxEAKcQ4TQO58w",
  authDomain: "chatroom-c166c.firebaseapp.com",
  projectId: "chatroom-c166c",
  storageBucket: "chatroom-c166c.firebasestorage.app",
  messagingSenderId: "721104776058",
  appId: "1:721104776058:web:22032ab1833fd0189504c3"
};

// Initialize
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const colRef = collection(db, 'chats')


class Chat {
    constructor(message,username,username2) {
        this.message = message;
        this.sent_at = Date.now();
        this.username = username;
        this.username2 = username2;
    }

    async addChat() {
        const chat = new Chat(
           this.message, Timestamp.fromDate(), this.username, this.username2
        );
        const response = await addDoc(colRef, chat);
        return response;
    }
}
const chat1 = new Chat("Hello everyone", "Ayb", "Shaun");
chat1.addChat();