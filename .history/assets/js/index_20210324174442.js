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
        "M0,-3C0,-3 18,443 205,476C465.688,522.004 405.537,261.725 522,295C718,351 663.848,126.072 907,288C1150.15,449.928 1162.26,293.105 1292,259C1421.74,224.895 1608.16,332.119 1711,378C1813.84,423.881 1921,239 1921,239L1921,-10L0,-3Z",
    },
    {
      d:
        "M0,-3C0,-3 58.886,482.358 190,345C379,147 479.697,115.668 525,228C623,471 718,390 920,167C1116.12,-49.515 1221,419 1289,172C1324.61,42.662 1528.16,206.119 1631,252C1733.84,297.881 1921,239 1921,239L1921,-10L0,-3Z",
    },
    {
      d:
        "M32.523,146.052c0,0 -53.373,50.424 -23.372,73.555c46.485,35.841 98.774,-38.059 159.889,-2.128c86.545,50.882 84.16,48.681 106.404,-19.304c26.482,-80.94 -19.962,-62.534 87.286,-71.767c24.377,-2.098 29.631,-47.581 9.202,-63.766c-138.239,-90.212 -93.22,-67.976 -180.553,-26.47c-70.054,33.294 -55.897,-12.339 -110.692,2.314c-35.582,9.515 -10.509,59.797 -48.164,107.566Z",
    },
  ];

  anime({
    targets: "#test",
    d: [
      {
        value: nav_transition[0].d,
      },
      {
        value: nav_transition[1].d,
      },
      {
        value: nav_transition[2].d,
      },
    ],
    duration: 15000,
    direction: "alternate",
    autoplay: true,
    easing: "linear",
    elasticity: 500,
    loop: true,
  });

  toggle_nav.addEventListener("click", nav);
  function nav() {
    console.log("asd");
  }
  /** Nav End */
})();
