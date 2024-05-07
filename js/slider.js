const slider = document.querySelector(".slider .list");
const items = document.querySelectorAll(".slider .list .item");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length;
let active = 0;

next.onclick = function () {
  active = (active + 1) % lengthItems;
  reloadSlider();
};

prev.onclick = function () {
  active = (active - 1 + lengthItems) % lengthItems;
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

  function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  document.querySelector(".slider .dots li.active").classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}