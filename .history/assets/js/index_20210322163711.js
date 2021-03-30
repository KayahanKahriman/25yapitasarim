document.querySelector("#references").fakeScroll({
  track: "smooth",
});

const equalizer_button = document.querySelector(".equalizer-button");
const references = document.querySelector("#references");
var mouse_enter = false;

equalizer_button.addEventListener("mouseenter", function () {
  references.classList.add("show-references");
  mouse_enter = true;
  console.log(mouse_enter);
});

console.log(mouse_enter);
