document.querySelector(".references-gallery").fakeScroll({
  track: "smooth",
});

const canvas_section = document.querySelector("canvas");

var text = new Blotter.Text("Ahşabın doğallığına dokunun", {
  family: "KG Next to Me Solid",
  size: 80,
  fill: "#ffffff",
});

var material = new Blotter.LiquidDistortMaterial();
material.uniforms.uSeed.value = 0.2;
material.uniforms.uVolatility.value = 0.01;
material.uniforms.uSpeed.value = 0.2;

var blotter = new Blotter(material, {
  texts: text,
});

var scope = blotter.forText(text);

scope.appendTo(document.body);
