export const changebodycontent = (text) => {
    const newelement = document.createElement('h1');
    const body = document.querySelector('body');
    newelement.textContent(text);
    body.appendChild(newelement);
    }
    
    