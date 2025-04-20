const chatInput = document.querySelector('.chat-input textarea');
const sendBtn = document.getElementById('send-btn');
const chatBox = document.querySelector(".chatbox");

const botResponses = [
  {"hi":"Hello! How can I assist you today?"},
  {"bye":"Goodbye! Have a great day!"},
  {"thank you":"You're welcome!"},
  {"help":"I'm here to assist you."},
  {"hello":"Hi there! How can I help you?"},
  {"how are you":"I'm just a bot, but I'm here to help!"},
  {"what's your name":"I'm your friendly chatbot!"},
  {"goodbye":"Goodbye! Have a great day!"},
  {"thanks":"You're welcome!"},
  {"what can you do":"I can assist you with various queries."},
  {"tell me a joke":"Why did the scarecrow win an award? Because he was outstanding in his field!"}
];

// Function to add user message
function addChatToBox(msg) {
  const userChat = document.createElement("li");
  userChat.classList.add("chat", "outgoing");
  userChat.innerHTML = `
    <div class="chat outgoing">
      <p>${msg}</p>
      <span class="material-symbols-outlined">account_circle</span>
    </div>
  `;
  chatBox.appendChild(userChat);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to add bot message
function addBotMessage(message) {
  const botChat = document.createElement("li");
  botChat.classList.add("chat", "incoming");
  botChat.innerHTML = `
    <span class="material-symbols-outlined">smart_toy</span>
    <p>${message}</p>
  `;
  chatBox.appendChild(botChat);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get bot response
function getBotResponse(msg) {
  msg = msg.toLowerCase();
  for (let i = 0; i < botResponses.length; i++) {
    const response = botResponses[i];
    const keys = Object.keys(response);
    if (keys.includes(msg)) {
      return response[msg];
    }
  }
  return "I'm sorry, I don't understand that.";
}

// Event handler for sending message
function handleSend() {
  const msg = chatInput.value;
  if (msg.trim() !== "") {
    addChatToBox(msg);
    chatInput.value = "";

    const botResponse = getBotResponse(msg);
    setTimeout(() => {
      addBotMessage(botResponse);
    }, 500); // Small delay for realism
  } else {
    alert("Please enter a message.");
  }
}

sendBtn.addEventListener('click', handleSend);

chatInput.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSend();
  }
});

// Toggle chatbox
const chatbotToggle = document.querySelector('.chatbot-toggler');
const body = document.querySelector('body');

chatbotToggle.addEventListener('click', () => {
  body.classList.toggle('show-chatbot');
  const icons = chatbotToggle.querySelectorAll('span');
  icons.forEach(icon => icon.classList.toggle('active'));
});
