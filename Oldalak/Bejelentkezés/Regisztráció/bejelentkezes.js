/*
const a = document.getElementById("login");
const b = document.getElementById("input1").value.toString();
a.addEventListener('keypress', function (event){
    if (event.key == 'Enter' 
        && (b == "denesmor" || b == "kornel" || b == "aron"))
    {
        a.submit();
    }
});
*/
/*
const form = document.getElementById("login");
const input = document.getElementById("input1");
const password = document.getElementById("password");

input.addEventListener("submit", function (event) {
  event.preventDefault(); // megfogjuk az alap submitet

  const value = input.value.trim();
  const pass = password.value.trim();

  if (
    (value === "denesmor" && pass === "asd") ||
    (value === "kornel" && pass === "asd") ||
    (value === "aron" && pass === "asd")
  ) {
    form.submit(); // OK → tovább
  } else {
    alert("Hibás felhasználónév vagy jelszó!");
  }
});
*/

let form = document.getElementById("login");
let felhasznalonev = document.getElementById("input1");
let jelszo = document.getElementById("passes");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let felh = felhasznalonev.value.trim();
    let jelsz = jelszo.value.trim();

    if (!felh || !jelsz) {
        alert("Töltsd ki az összes mezőt!");
        return;
    }

    let felhasznalok = JSON.parse(localStorage.getItem("users")) || [];

    let van = felhasznalok.find(user =>
        user.felhasznalo === felh &&
        user.jelszo === jelsz
    );

    if (van) {
        alert("Sikeres bejelentkezés!");
        localStorage.setItem("bejelentkezett", felh);
        window.location.href = "../../Főoldal/index.html";
    } else {
        alert("Hibás felhasználónév vagy jelszó!");
    }
});

/*
const form = document.getElementById("login");
const input = document.getElementById("input1");

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();

    const value = input.value;

    if (value === "denesmor" || value === "kornel" || value === "aron") {
      form.submit();
    } else {
      alert("Hibás felhasználónév!");
    }
  }
});
*/