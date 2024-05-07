document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll("#myModal");
  const btns = document.querySelectorAll("#openModal");
  const closeBtn = document.querySelectorAll(".close");

  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
      modals[i].style.display = "block";
    };
  }

  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
      modals[i].style.display = "none";
    };
  }

  window.onclick = function (event) {
    for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
    }
  };
});
