/*
import data from 'file://regisz.js' with {type: "json"};

let email = document.getElementById("email").value;
let felhasznalonev = document.getElementById("input1").value;
let jelszo = document.getElementById("password").value;


const a = document.getElementById("regisz");
a.addEventListener('keydown', function (event){
    if (data.email == email && data.username == felhasznalonev && data.password == jelszo && event.key == 'Enter')
    {
        a.submit();
    }
    else{
        alert("A fiók már létezik!")
    }
});
*/
/*
const form = document.getElementById("regisz");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("input1").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !email || !password) {
    alert("Minden mezőt ki kell tölteni!");
    return;
  }

  
  console.log("Regisztrációs adatok:", {
    username,
    email,
    password
  });

  
  window.location.href = "../../Főoldal/index.html";
});
*/


const form = document.getElementById("regisz");
const felhasznalon = document.getElementById("felhnev");
const jelsz = document.getElementById("jelszo");
const email = document.getElementById("email");

form.addEventListener("submit", function (event) {
  
  const felhasznalo = felhasznalon.value;
  const jelszo = jelsz.value;
  const emailek = email.value;

  if (!felhasznalo ||!jelszo || !emailek){
    alert("Töltsd ki a mezőket!");
    return;
  }
 /*
  if (event.key == "Enter") {
    event.preventDefault();

    const value = input.value;
    const pass = password.value;
    const ema = email.value;

    if ((value === "denesmor" && pass === "keksz" && ema === "denesmorgotli@gmail.com") || (value === "kornel" && pass === "asd") || (value === "aron" && pass === "asd")) {
      form.submit();
    } else {
      alert("Hibás felhasználónév vagy jelszó!");
    }
  }
    */
});
