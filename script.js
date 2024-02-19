const $ = (selector) => {
  return document.querySelector(selector);
};

const hour = $(".hour");
const min = $(".min");
const dot = $(".dot");
const week = $(".week");
let showDot = true;

function update() {
  showDot = !showDot;
  const now = new Date();

  if (showDot) {
    dot.classList.add("invisible");
  } else {
    dot.classList.remove("invisible");
  }

  hour.textContent = String(now.getHours()).padStart(2, "0");
  min.textContent = String(now.getMinutes()).padStart(2, "0");

  Array.from(week.children).forEach((day) => {
    day.classList.remove("active");
  });

  week.children[now.getDay()].classList.add("active");
  console.log(now.getDay());
}

setInterval(update, 500);
