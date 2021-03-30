document.querySelector(".references-gallery").fakeScroll({
  track: "smooth",
});

var text = new Blotter.Text("ahşabın doğallığına dokunun", {
  family: "serif",
  size: 80,
  fill: "#171717",
});

var material = new Blotter.ChannelSplitMaterial();
var blotter = new Blotter(material, { texts: text });
var scope = blotter.forText(text);
scope.appendTo(document.body);
