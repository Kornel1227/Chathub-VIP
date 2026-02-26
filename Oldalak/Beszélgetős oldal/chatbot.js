document.getElementById("enChat").style.display = "none";
document.getElementById("celebChat").style.display = "block";

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.nev);
  });

let ME = document.getElementsByClassName("userInput")[0];

const textarea = document.getElementsByClassName("userInput")[0];

textarea.addEventListener("keydown", function(e) {
if (e.key === "Enter") {
e.preventDefault();   // megakadályozza az új sort

document.getElementById("enChat").style.display = "grid";
document.getElementById("en_chatbox").innerText = textarea.value;
textarea.value = "";  // törli a szöveget

}
});

let random = Math.random(0, 10);















//git comment =======>  CV-valahany beszélgetős oldal, css chat formázás




















/*let data;

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
*/
