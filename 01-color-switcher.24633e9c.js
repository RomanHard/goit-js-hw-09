!function(){var t={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")},e=null;t.start.addEventListener("click",(function(){t.stop.removeAttribute("disabled"),t.start.setAttribute("disabled","disabled"),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stop.addEventListener("click",(function(){t.stop.setAttribute("disabled","disabled"),t.start.removeAttribute("disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.24633e9c.js.map
