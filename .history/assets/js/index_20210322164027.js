document.querySelector("#references").fakeScroll({
  track: "smooth",
});

const equalizer_button = document.querySelector(".equalizer-button");
const references = document.querySelector("#references");

function show_references() {
  equalizer_button.addEventListener("mouseenter", function () {
    references.classList.add("show-references");
    mouse_enter = true;
  });
  return mouse_enter;
}

show_references();

var mouse_enter = show_references();

console.log(mouse_enter);
