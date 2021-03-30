/** Reference Gallery Start */
document.querySelector(".references-gallery").fakeScroll({
  track: "smooth",
});
/** Reference Gallery End */

/** Slogan Start */

const canvas_section = document.querySelector("#canvas-section");

var text = new Blotter.Text("Ahşabın doğallığına dokunun", {
  family: "KG Next to Me Solid",
  size: 80,
  fill: "#ffffff",
});

var material = new Blotter.LiquidDistortMaterial();
material.uniforms.uSeed.value = 0.5;
material.uniforms.uVolatility.value = 0.01;
material.uniforms.uSpeed.value = 0.2;

var blotter = new Blotter(material, {
  texts: text,
});

var scope = blotter.forText(text);

scope.appendTo(canvas_section);

document.onmousemove = moveIt;
function moveIt(event) {
  material.uniforms.uVolatility.value = event.clientY * 0.00005;
}

/** Slogan End */

/** Nav Start */
const toggle_nav = document.querySelector(".toggle-nav");
toggle_nav.addEventListener("click", nav);
function nav() {
  console.log("asd");
}
/** Nav End */
