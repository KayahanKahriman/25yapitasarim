(function () {
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
  var toggle_nav = document.querySelector(".toggle-nav");

  let nav_transition = [
    {
      d:
        "M32.523,122.536c0,0 -53.373,50.425 -23.372,73.556c46.485,35.84 82.969,5.669 144.084,41.6c86.545,50.882 99.965,4.953 122.209,-63.033c26.482,-80.94 149.411,40.333 141.552,-67.025c-1.966,-26.86 -26.743,-28.087 -13.98,-73.776c-28.127,-65.977 -56.34,-17.399 -205.315,-4.87c-77.29,6.501 -14.275,54.572 -69.07,69.225c-35.582,9.515 -58.453,-23.446 -96.108,24.323Z",
    },
    {
      d:
        "M38.38,131.986c0,0 -16.238,16.259 6.658,93.576c16.997,57.393 123.54,73.633 121.429,44.235c-5.899,-82.176 32.766,-18.89 122.209,-63.033c76.369,-37.69 149.411,40.332 141.553,-67.025c-1.967,-26.861 -91.546,1.416 -74.569,-61.132c-38.136,-100.222 -112.186,-76.406 -144.726,-17.514c-37.512,67.889 -19.07,-34.814 -90.145,-3.481c-85.658,37.761 -44.754,26.605 -82.409,74.374Z",
    },
    {
      d:
        "M32.523,146.052c0,0 -53.373,50.424 -23.372,73.555c46.485,35.841 98.774,-38.059 159.889,-2.128c86.545,50.882 84.16,48.681 106.404,-19.304c26.482,-80.94 -19.962,-62.534 87.286,-71.767c24.377,-2.098 29.631,-47.581 9.202,-63.766c-138.239,-90.212 -93.22,-67.976 -180.553,-26.47c-70.054,33.294 -55.897,-12.339 -110.692,2.314c-35.582,9.515 -10.509,59.797 -48.164,107.566Z",
    },
  ];

  toggle_nav.addEventListener("click", nav);
  function nav() {
    console.log("asd");
  }
  /** Nav End */
})();
