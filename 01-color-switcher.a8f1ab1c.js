const t={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};t.start.addEventListener("click",(()=>{t.stop.removeAttribute("disabled"),t.start.setAttribute("disabled","disabled"),TimerId=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stop.addEventListener("click",(()=>{t.stop.setAttribute("disabled","disabled"),t.start.removeAttribute("disabled"),clearInterval(TimerId)}));
//# sourceMappingURL=01-color-switcher.a8f1ab1c.js.map
