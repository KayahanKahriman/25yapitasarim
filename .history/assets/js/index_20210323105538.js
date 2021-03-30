document.querySelector(".references-gallery").fakeScroll({
  track: "smooth",
});

var text = new Blotter.Text("ahşabın doğallığına dokunun", {
  family: "Rubik",
  size: 70,
  fill: "#ffffff",
});

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.03;
material.uniforms.uPointRadius.value = 0.7;
material.uniforms.uSpeed.value = 2;

var blotter = new Blotter(material, {
  texts: text,
});

var scope = blotter.forText(text);

scope.appendTo(document.body);

var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = 800;
canvas.height = 600;