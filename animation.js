const textCenter = document.querySelector(".center");
const stringTextCenter = text.textContent;
const splitTextCenter = stringTextCenter.split("");

for (let i = 0; i < splitTextCenter.length; i++) {
  text.innerHTML += "<span>" + splitTextCenter[i] + "</span>";
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
