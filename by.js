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
let img = document.querySelector("img");
let name = document.querySelector("#nome");
let user = document.querySelector("#user");
let bio = document.querySelector("#bio");
let link = document.querySelector("#link");
async function busca() {
  let res = await fetch("https://api.github.com/users/nah5f4");
  console.log(res);
  let json = await res.json();

  img.src = json.avatar_url;

  user.innerText = json.login;
  name.innerText = json.name;
  bio.innerText = json.bio;
    const linkElement = document.createElement("a");


  linkElement.href = json.html_url;

  linkElement.textContent = "nah5f4";

  link.appendChild(linkElement);
}
busca()
