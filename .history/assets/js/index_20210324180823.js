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
        "M0.5,7.5C0.5,7.5 26.152,99.782 211.5,58.5C431.5,9.5 420.494,90.8 538.5,63.5C806.5,1.5 697.345,92.561 982.5,59.5C1258.5,27.5 1188.5,90.5 1325.5,84.5C1459.52,78.63 1543.66,13.619 1646.5,59.5C1749.34,105.381 1921.5,103.5 1921.5,103.5L1921.5,0.5L0.5,7.5Z",
    },
    {
      d:
        "M0,-3C0,-3 18,443 205,476C465.688,522.004 405.537,261.725 522,295C718,351 663.848,126.072 907,288C1150.15,449.928 1162.26,293.105 1292,259C1421.74,224.895 1608.16,332.119 1711,378C1813.84,423.881 1921,239 1921,239L1921,-10L0,-3Z",
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
