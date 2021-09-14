(function (doc) {
  const oApp = doc.getElementById("app");
  const oHeader = doc.createElement("header");
  oHeader.innerText = "我是header";
  oApp.appendChild(oHeader);
})(document);
