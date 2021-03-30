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
        "M0,0C0,0 21.508,60.282 211,48C427,34 418,64 538,53C811.93,27.89 696.845,82.061 982,49C1258,17 1194,58 1331,52C1465.02,46.13 1543.16,3.119 1646,49C1748.84,94.881 1920.54,50 1920.54,50L1920,0L0,0Z",
    },
    {
      d:
        "M0,0C0,0 -78.492,581.282 111,569C327,555 346,410 500,591C678.255,800.507 960.5,835.362 1077,573C1200,296 1308,485 1391,653C1450.42,773.273 1737.49,541.13 1825,612C1988,744 1920.54,50 1920.54,50L1920,0L0,0Z",
    },
    {
      d:
        "M0,-3C0,-3 58.886,482.358 190,345C379,147 479.697,115.668 525,228C623,471 718,390 920,167C1116.12,-49.515 1221,419 1289,172C1324.61,42.662 1528.16,206.119 1631,252C1733.84,297.881 1921,239 1921,239L1921,-10L0,-3Z",
    },
  ];

  toggle_nav.addEventListener("click", nav);
  function nav() {
    anime({
      targets: ".transition-path",
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
      duration: 3000,
      direction: "alternate",
      //autoplay: false,
      easing: "linear",
      elasticity: 500,
      loop: false,
    });
  }
  /** Nav End */
})();
