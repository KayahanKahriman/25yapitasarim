document.querySelector(".references-gallery").fakeScroll({
  track: "smooth",
});

var text = new Blotter.Text("ahşabın doğallığına dokunun", {
  family: "Rubik",
  size: 90,
  fill: "#ffffff",
});

var material = new Blotter.LiquidDistortMaterial();
material.uniforms.uSeed.value = 0.1;
material.uniforms.uVolatility.value = 0.01;
material.uniforms.uSpeed.value = 0.4;

var blotter = new Blotter(material, {
  texts: text,
});

var scope = blotter.forText(text);

scope.appendTo(document.body);
