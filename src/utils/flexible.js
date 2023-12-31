(function flexible(window, document) {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;
  
    // 调整 body 字体大小
    function setBodyFontSize() {
      if (document.body) {
        // body 字体大小默认为 16px
        document.body.style.fontSize = 16 * dpr + "px";
      } else {
        document.addEventListener("DOMContentLoaded", setBodyFontSize);
      }
    }
    setBodyFontSize();
  
    // 移动端默认平均分成 10 等分(适用移动端)
    // pc端默认平均分成 24 等分（适用 pc 端）
    function setRemUnit() {
      var splitNum = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 10 : 24;
      var rem = docEl.clientWidth / splitNum; // 1920 / 24 = 80
      docEl.style.fontSize = rem + "px"; // 设置 html 字体的大小 80px
    }
  
    setRemUnit();
  
    // 页面调整大小时重置 rem 单位
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) {
        setRemUnit();
      }
    });
  
    // 检测 0.5px 支持
    if (dpr >= 2) {
      var fakeBody = document.createElement("body");
      var testElement = document.createElement("div");
      testElement.style.border = ".5px solid transparent";
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        docEl.classList.add("hairlines");
      }
      docEl.removeChild(fakeBody);
    }
  })(window, document);
  