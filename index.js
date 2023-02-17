let password = document.getElementById("generated-password");
let copyIcon = document.getElementById("copy-icon");
let range = document.getElementById("range");
let characters = document.getElementById("chars-set");
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let bar4 = document.getElementById("bar4");
let checkboxUpper = document.getElementById("uppercase");
let checkboxLower = document.getElementById("lowercase");
let checkboxNumber = document.getElementById("number");
let checkboxSymbols = document.getElementById("symbols");
let generateButton = document.getElementById("generate-btn");

// coping to clipboard

function copyToClipboard() {
  copyIcon.innerHTML = "";
  copyIcon.innerHTML = "done";
  navigator.clipboard.writeText(password.textContent);
}

// setting number of characters

range.addEventListener("change", (e) => {
  characters.innerHTML = e.target.value;
});

// validating strength
function validateStrength(value) {
  if (value === "uppercase") {
    bar4.classList.toggle("active");
  }
  if (value === "lowercase") {
    bar3.classList.toggle("active");
  }
  if (value === "numbers") {
    bar2.classList.toggle("active");
  }
  if (value === "symbols") {
    bar1.classList.toggle("active");
  }
}

// updating strength
function updateStrength() {
  let str = "";

  if (checkboxUpper.checked === true) {
    str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (checkboxLower.checked === true) {
    str += "abcdefghijklmnopqrstuvwxyz";
  }
  if (checkboxNumber.checked === true) {
    str += "1234567890";
  }
  if (checkboxSymbols.checked === true) {
    str += "@#$!";
  }

  generatePassword(str);

  return str;
}

// capital letters only

function generatePassword(value) {
  let x = parseInt(characters.textContent, 10)
  console.log(x);
  var pass = "";
  var str = "";
  str += value;

  for (let i = 1; i <= x ; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  password.innerHTML = pass;
}
