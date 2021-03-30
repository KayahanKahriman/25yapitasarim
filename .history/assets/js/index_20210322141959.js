(function () {
  document.querySelector("#references").fakeScroll({
    track: "smooth",
  });

  const equalizer_button = document.querySelector(".equalizer-button");
  const references = document.querySelector("#references");

  equalizer_button.addEventListener("mouseenter", () => {
    console.log("asd");
    references.classList.add("show-references");
  });
})();
