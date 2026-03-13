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
e.preventDefault();   // megakadályozza az új sort

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
  ujDobozCsinalas(foundResponse);
}

textarea.value = "";  // törli a szöveget
}
});













function ujDobozCsinalas(szovegHozza){
  const ujDoboz = document.createElement("div");

  ujDoboz.textContent = szovegHozza;
  ujDoboz.classList.add("bot");

  document.getElementById("celeb_chatbox").appendChild(ujDoboz);
}

function ujDobozCsinalasFelhasznalo(szovegHozza){
  const ujDoboz = document.createElement("div");

  ujDoboz.textContent = szovegHozza;
  ujDoboz.classList.add("user");

  document.getElementById("en_chatbox").appendChild(ujDoboz);
}



data.Ronaldo[0].intents[0].pattern //amit beirunk pl szia, szevasz
data.Ronaldo[0].intents[0].respons //amit vissza kapunk pl szia,hogy vagy?

data.Madison[0].intents[0].pattern













/*

let userText = textarea.value.toLowerCase();

let patterns = data.Ronaldo[0].intents[0].pattern;

let found = patterns.some(pattern => userText.includes(pattern.toLowerCase()));

if (found) {
  let responses = data.Ronaldo[0].intents[0].respons;
  let random = Math.floor(Math.random() * responses.length);

  document.getElementById("celeb_chatbox").innerHTML = responses[random];
}

*/
/*



if (data.Ronaldo[0].intents[0].pattern.includes(textarea.value.toLowerCase())){
  let responses = data.Ronaldo[0].intents[0].respons;
  let random = Math.floor(Math.random() * responses.length);

  document.getElementById("celeb_chatbox").innerHTML = responses[random];
}

*/
