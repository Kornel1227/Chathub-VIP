let data;

fetch('./data.json')
  .then(response => response.json())
  .then(json => {
    data = json;
  });

const textarea = document.getElementsByClassName("userInput")[0];

textarea.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    document.getElementById("nevek").style.visibility = "visible";
    document.getElementById("p").style.display = "none";

    let valtozo = document.getElementById("p").dataset.person;
    let dataData;

    if (valtozo === "1"){
      dataData = data.Ronaldo[0].intents;
    }
    else if (valtozo === "2"){
      dataData = data.Madison[0].intents;
    }
    else if(valtozo === "3"){
      dataData = data.Lebron[0].intents;
    }
    else if(valtozo === "4"){
      dataData = data.Dicaprio[0].intents;
    }
    else if(valtozo === "5"){
      dataData = data.Madelyn[0].intents;
    }
    else if(valtozo === "6"){
      dataData = data.Majka[0].intents;
    }
    else if(valtozo === "7"){
      dataData = data.Margot[0].intents;
    }
    else if (valtozo === "8"){
      dataData = data.Alekosz[0].intents;
    }
    else if(valtozo === "9"){
      dataData = data.Palvin[0].intents;
    }
    else if(valtozo === "10"){
      dataData = data.Rubint[0].intents;
    }
    else if(valtozo === "11"){
      dataData = data.Szoboszlai[0].intents;
    }
    else if(valtozo === "12"){
      dataData = data.TothGabi[0].intents;
    }
    else if(valtozo === "13"){
      dataData = data.MagyarPeter[0].intens;
    }
    else if(valtozo === "14"){
      dataData = data.Vitya[0].intens;
    }

    ujUserUzenet(textarea.value);

    let userText = textarea.value.toLowerCase();
    let intents = dataData;
    let foundResponse = null;

    for (let intent of intents) {
      if (!intent.pattern || !intent.respons) continue;

      let found = intent.pattern.some(pattern =>
        userText.includes(pattern.toLowerCase())
      );

      if (found) {
        let responses = intent.respons;
        let random = Math.floor(Math.random() * responses.length);
        foundResponse = responses[random];
        break;
      }
    }

    setTimeout(() => {
      if (foundResponse) {
        ujBotUzenet(foundResponse);
      } else if(valtozo === "13"){
        ujBotUzenet("Jó vergődést kívánunk.")
      }
      else{
        ujBotUzenet("Bocsi, ezt nem értem. Tanulj meg magyarul kicsi.");
      }
    }, 800);

    textarea.value = "";
  }
});

function ujUserUzenet(szoveg){
  const div = document.createElement("div");
  div.classList.add("user");
  div.textContent = szoveg;

  document.getElementById("chatbox").appendChild(div);

  //scrollToBottom()
}

function ujBotUzenet(szoveg){
  const div = document.createElement("div");
  div.classList.add("bot");

  document.getElementById("chatbox").appendChild(div);

  gepel(div, szoveg);

  //scrollToBottom()
}

function gepel(elem, szoveg, ido = 40) {
  let i = 0;

  function ir() {
    if (i < szoveg.length) {
      elem.textContent += szoveg.charAt(i);
      i++;
      setTimeout(ir, ido);
    }
  }

  ir();
}

const chat = document.getElementById("chat");
/*
function isNearBottom() {
  return chat.scrollHeight - chat.scrollTop - chat.clientHeight < 50;
}

function addMessage(text) {
  const wasNearBottom = isNearBottom();

  const msg = document.createElement("div");
  msg.textContent = text;
  chat.appendChild(msg);

  if (wasNearBottom) {
    chat.scrollTop = chat.scrollHeight;
  }
}
*/
/*
const container = document.getElementById("scrollbox");

function scrollToBottom() {
  container.scrollTop = container.scrollHeight;
}
*/