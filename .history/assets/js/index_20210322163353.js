document.querySelector("#references").fakeScroll({
  track: "smooth",
});

const equalizer_button = document.querySelector(".equalizer-button");
const references = document.querySelector("#references");
var mouse_enter = NULL;

equalizer_button.addEventListener("mouseenter", function () {
  references.classList.add("show-references");
});

equalizer_button.addEventListener("mouseout", function () {
  references.classList.remove("show-references");
});
