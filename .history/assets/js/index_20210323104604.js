document.querySelector(".references-gallery").fakeScroll({
  track: "smooth",
});

var text = new Blotter.Text("ahşabın doğallığına dokunun", {
  family: "serif",
  size: 80,
  fill: "#171717",
});

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = 0.5;
material.uniforms.uSpeed.value = 2;

var blotter = new Blotter(material, {
  texts: text,
});

var scope = blotter.forText(text);

scope.appendTo(document.body);
