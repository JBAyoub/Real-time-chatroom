import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBH3jopzRD05BlnOaMHaQxEAKcQ4TQO58w",
  authDomain: "chatroom-c166c.firebaseapp.com",
  projectId: "chatroom-c166c",
  storageBucket: "chatroom-c166c.firebasestorage.app",
  messagingSenderId: "721104776058",
  appId: "1:721104776058:web:22032ab1833fd0189504c3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'chats');

class Chat {
  constructor(message, username, username2) {
    this.message = message;
    this.sent_at = Date.now();
    this.username = username;
    this.username2 = username2;
  }

  async addChat() {
    try {
      const chat = {
        message: this.message,
        sent_at: Timestamp.now(),
        username: this.username,
        username2: this.username2,
      };
      const response = await addDoc(colRef, chat);
      console.log('Document written with ID: ', response.id);
      return response;
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
}

const runChat = async () => {
  const chat1 = new Chat("Hello everyone", "Ayb", "Shaun");
  await chat1.addChat();
  console.log('Chat added');
};

runChat();
