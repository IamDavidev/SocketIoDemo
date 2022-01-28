const socket = io();
console.log('socket is running');


const form = document.querySelector('#formChat');
const messageInput = document.querySelector('#inputChat');
const renderMessages = document.querySelector('#messages')
console.log(form);
console.log(messageInput);
console.log(renderMessages)

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('submit', socket.emit());
    socket.emit('chat message', messageInput.value);
    messageInput.value = '';
});



socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.innerText = msg
    renderMessages.appendChild(item);
})