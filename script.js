// slider logic
const track = document.querySelector(".book-track");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

next.addEventListener("click", () => {
  const total = track.children.length;
  index = (index + 1) % total;
  track.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener("click", () => {
  const total = track.children.length;
  index = (index - 1 + total) % total;
  track.style.transform = `translateX(-${index * 100}%)`;
});