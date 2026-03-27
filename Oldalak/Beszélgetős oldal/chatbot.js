document.getElementById("enChat").style.display = "none";
document.getElementById("celebChat").style.display = "none";

let data;

fetch('./data.json')
  .then(response => response.json())
  .then(json => {
    data = json;
    console.log(data);
  });

let ME = document.getElementsByClassName("userInput")[0];

const textarea = document.getElementsByClassName("userInput")[0];

textarea.addEventListener("keydown", function(e) {
if (e.key === "Enter") {
e.preventDefault();

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




document.getElementById("enChat").style.display = "grid";
document.getElementById("celebChat").style.display = "grid";

//document.getElementById("en_chatbox").innerText = textarea.value;
ujDobozCsinalasFelhasznalo(textarea.value);

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

if (foundResponse) {
  //document.getElementById("celeb_chatbox").innerHTML = foundResponse;
  //ujDobozCsinalas(foundResponse);
  setTimeout(() => {
    ujDobozCsinalas(foundResponse);
  }, 1000);
}
else{
  setTimeout(() => {
    ujDobozCsinalas("Bocsi, de ezt nem tudom értelmezni, így erre válaszolni se tudok.");
  }, 1000);
}

textarea.value = "";  // törli a szöveget
}
});










function ujDobozCsinalas(szovegHozza){
  const ujDoboz = document.createElement("div");

  const bufferDoboz = document.createElement("div");                  //)
  bufferDoboz.classList.add("bufferBot");                             //)--->buffer
  document.getElementById("celeb_chatbox").appendChild(bufferDoboz);  //)

  ujDoboz.classList.add("bot");
  document.getElementById("celeb_chatbox").appendChild(ujDoboz);

  gepel(ujDoboz, szovegHozza);
  id = 2;
}

let id = document.getElementById("en_chatbox").value;

function ujDobozCsinalasFelhasznalo(szovegHozza){
  const ujDoboz = document.createElement("div");
  
  if(id === 2)
  {
    const bufferDoboz = document.createElement("div");                  //)
    bufferDoboz.classList.add("bufferUser");                            //)--->buffer
    document.getElementById("en_chatbox").appendChild(bufferDoboz);     //)
  }

  ujDoboz.textContent = szovegHozza;
  ujDoboz.classList.add("user");

  document.getElementById("en_chatbox").appendChild(ujDoboz);
}

//            I
//csak dizájn I
//            V

function gepel(elem, text, speed = 80) {
  let i = 0;

  function ir() {
    if (i < text.length) {
      elem.textContent += text.charAt(i);
      i++;
      setTimeout(ir, speed);
    }
  }

  ir();
}