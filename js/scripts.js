let share = document.querySelector(".share-it");
let target = document.querySelector(".target");
share.addEventListener("click", () => {
  document.querySelector(".share").classList.toggle("open");
});
target.addEventListener("click", () => {
  document.querySelector(".share").classList.toggle("open");
});
