const toggleBtn = document.querySelector("#toggleBtn");
const bodyEl = document.body;

toggleBtn.addEventListener('change', () => {
  if (toggleBtn.checked) {
    bodyEl.classList.add("dark");
  } else {
    bodyEl.classList.remove("dark");
  }
});
