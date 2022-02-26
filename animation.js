// This is the Center text.
const textCenter = document.querySelector(".center");
const stringTextCenter = textCenter.textContent;
const splitTextCenter = stringTextCenter.split("");
textCenter.textContent = "";

for (let i = 0; i < splitTextCenter.length; i++) {
  textCenter.innerHTML += "<span>" + splitTextCenter[i] + "</span>";
}

let character = 0;
let timer = setInterval(onRefresh, 50);

function onRefresh() {
  const span = text.querySelectorAll("span")[character];
  span.classList.add("center-each");
  character++;
  if (character === splitTextCenter.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// This is the Top Left text.
const textCenter = document.querySelector(".center");
const stringTextCenter = textCenter.textContent;
const splitTextCenter = stringTextCenter.split("");
textCenter.textContent = "";

for (let i = 0; i < splitTextCenter.length; i++) {
  textCenter.innerHTML += "<span>" + splitTextCenter[i] + "</span>";
}

let character = 0;
let timer = setInterval(onRefresh, 50);

function onRefresh() {
  const span = text.querySelectorAll("span")[character];
  span.classList.add("center-each");
  character++;
  if (character === splitTextCenter.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
