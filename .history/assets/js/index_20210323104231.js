document.querySelector(".references-gallery").fakeScroll({
  track: "smooth",
});

var text = new Blotter.Text("ahşabın doğallığına dokunun", {
  family: "serif",
  size: 80,
  fill: "#171717",
});

var material = new Blotter.FliesMaterial();
// setting the size of the point that impressed like ant / bee.
// it is a float variable between 0.0 ~ 1.0
material.uniforms.uPointCellWidth.value = 0.007;

// setting point thickness
// it is a float variable between 0.0 ~ 1.0
material.uniforms.uPointRadius.value = 1.7;

// setting point speed of movement
// it is a float variable between 0.0 ~ any number
material.uniforms.uSpeed.value = 7;
