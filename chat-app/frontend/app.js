const socket = io('http://localhost:5000');

let selectedUser = null;

document.addEventListener('DOMContentLoaded', () => {
  fetchUsers();
});

function fetchUsers() {
  fetch('http://localhost:5000/auth/users')
    .then((res) => res.json())
    .then((users) => {
      const userList = document.getElementById('userList');
      users.forEach((user) => {
        const li = document.createElement('li');
        li.innerText = user.username;
        li.onclick = () => selectUser(user.username);
        userList.appendChild(li);
      });
    });
}

function selectUser(username) {
  selectedUser = username;
  document.getElementById('chatHeader').innerText = `Chat with ${username}`;
  loadMessages();
}

function loadMessages() {
  fetch(`http://localhost:5000/chat/messages/${selectedUser}`)
    .then((res) => res.json())
    .then((messages) => {
      const chatMessages = document.getElementById('chatMessages');
      chatMessages.innerHTML = '';
      messages.forEach((msg) => {
        const div = document.createElement('div');
        div.innerText = `${msg.sender}: ${msg.message}`;
        chatMessages.appendChild(div);
      });
    });
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  if (!message || !selectedUser) return;

  socket.emit('sendMessage', { receiver: selectedUser, message });
  messageInput.value = '';
}
