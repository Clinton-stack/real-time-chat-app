// dom queries 
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updatemsg = document.querySelector('.update-mssg');
const updateroom = document.querySelector('.chat-rooms');

//add new chat
newChatForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChats(message)
        .then(()=> newChatForm.reset())
        .catch(e=>{ alert(e)});
});

// update username 
newNameForm.addEventListener('submit', e =>{
    e.preventDefault();

    const newName = newNameForm.name.value.trim();

    chatroom.updateUsername(newName);

    newNameForm.reset();

    updatemsg.innerHTML = `Your name was updated to ${newName}`;
    setTimeout(()=> updatemsg.innerHTML = '', 4000)
});

//update room
updateroom.addEventListener('click', e =>{
    if(e. target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats( chats => chatUI.render(chats));

    }
});

//retreiving username from local storge 
 const username = localStorage.username? localStorage.username : 'User'

// class instance 
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general',username);

//get chats and render
chatroom.getChats(data => chatUI.render(data));