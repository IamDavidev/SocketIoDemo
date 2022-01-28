const socket = io();
console.log('socket is running');


const form = document.querySelector('#formChat');
const messageInput = document.querySelector('#inputChat');
console.log(form);
console.log(messageInput);

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('submit', socket.emit());
    socket.emit('chat message', messageInput.value);
    messageInput.value = '';
});