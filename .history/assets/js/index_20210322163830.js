document.querySelector("#references").fakeScroll({
  track: "smooth",
});

const equalizer_button = document.querySelector(".equalizer-button");
const references = document.querySelector("#references");
var mouse_enter = false;

equalizer_button.addEventListener("mouseenter", function () {
  var mouse_enter = false;

  references.classList.add("show-references");
  mouse_enter = true;
  return mouse_enter;
});

console.log(mouse_enter);
