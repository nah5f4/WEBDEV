let tudo = document.querySelector("body");
let dark = document.querySelector("#dark");

function light() {
  tudo.classList.toggle("white");
  if (dark.innerText === "Light Mode") {
    dark.innerText = "Dark Mode";
  } else if (dark.innerText === "Dark Mode") {
    dark.innerText = "Light Mode";
  }
}
