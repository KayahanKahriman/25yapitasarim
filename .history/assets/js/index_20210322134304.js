document.querySelector("#references").fakeScroll({
  track: "smooth",
});

const hero_line = document.querySelector("#hero-line");
const references = document.querySelector("#references");
hero_line.addEventListener("mouseenter", () => {
  references.classList.add("test");
});

hero_line.addEventListener("mouseout", () => {
  references.classList.remove("test");
});
