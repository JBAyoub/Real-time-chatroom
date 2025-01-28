console.log('hello');
try {
    const chat = {
        message: this.message,
        sent_at: Timestamp.now(),
        username: this.username,
        username2: this.username2,
    };
    const response = await addDoc(colRef, chat);
    console.log('Document written with ID: ', response.id);
} catch (error) {
    console.error('Error adding document: ', error);
}