document.querySelector("#references").fakeScroll({
  track: "smooth",
});

const equalizer_button = document.querySelector(".equalizer-button");
const references = document.querySelector("#references");
hero_line.addEventListener("mouseenter", () => {
  references.classList.add("show-references");
});
