import "./header.js";
import img01 from "../images/img01.jpg";
// import "../css/index.scss"


(function (doc) {
  const oApp = doc.getElementById("app");
  const oMain = doc.createElement("div");
  oMain.innerText = "我是您的app。";
  const img = new Image();
  img.src = img01;
  oApp.appendChild(oMain);
  oApp.appendChild(img);
  const oBtn = doc.createElement('button');
  oBtn.innerText = '新增一个item';
  oBtn.addEventListener('click', function() {
    const oItem = doc.createElement('div');
    oItem.innerText = 'item';
    oItem.className = 'item';
    oApp.appendChild(oItem);
  }, false)
  oApp.appendChild(oBtn);
})(document);
