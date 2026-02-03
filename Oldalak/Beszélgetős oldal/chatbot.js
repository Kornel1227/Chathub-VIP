let data;

fetch("data.json")
  .then(res => res.json())
  .then(json => data = json);

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
    console.log("SEND MESSAGE FUT");
  const input = document.getElementById("userInput");
  const message = input.value.trim().toLowerCase();
  if (!message) return;

  input.value = "";

  addMessage(message, "user");

  const response = getResponse(message);
  setTimeout(() => {
    addMessage(response, "bot");
  }, 500);
}

function getResponse(message) {
  for (let intent of data.intents) {
    for (let pattern of intent.patterns) {
      if (message.includes(pattern)) {
        return random(intent.responses);
      }
    }
  }
  return random(data.fallback);
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function addMessage(text, sender) {
  const chat = document.getElementById("chat");
  const div = document.createElement("div");
  div.className = sender;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}