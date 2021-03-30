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
  let toggle_nav = document.querySelector(".toggle-nav");
  let transition_started = document.querySelector(".nav-opened");

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
        "M0,0C0,0 -151.492,1293.28 38,1281C254,1267 323,1221 509,1116C748.545,980.773 1093.5,1627.36 1210,1365C1333,1088 1381,990 1464,1158C1523.42,1278.27 1830.49,1077.13 1918,1148C2081,1280 1920.54,50 1920.54,50L1920,0L0,0Z",
    },
  ];

  let start_transition = anime({
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
    duration: 1000,
    direction: "alternate",
    autoplay: false,
    easing: "linear",
    elasticity: 500,
    loop: false,
  });

  toggle_nav.addEventListener("click", function () {
    console.log(this);
    if (this.classList.has("opened")) {
      console.log(this);
    }
    toggle_nav.classList.remove("nav-closed");
    start_transition.play;
  });
  /** Nav End */
})();
