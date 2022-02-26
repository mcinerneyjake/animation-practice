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
  const span = textCenter.querySelectorAll("span")[character];
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
const textTopLeft = document.querySelector(".top-left");
const stringTextTopLeft = textTopLeft.textContent;
const splitTextTopLeft = stringTextTopLeft.split("");
textTopLeft.textContent = "";

for (let i = 0; i < splitTextTopLeft.length; i++) {
  textTopLeft.innerHTML += "<span>" + splitTextTopLeft[i] + "</span>";
}

let character1 = 0;
let timer1 = setInterval(onRefresh1, 50);

function onRefresh1() {
  const span = text.querySelectorAll("span")[character1];
  span.classList.add("top-left-each");
  character1++;
  if (character1 === splitTextTopLeft.length) {
    complete1();
    return;
  }
}

function complete1() {
  clearInterval(timer1);
  timer1 = null;
}
