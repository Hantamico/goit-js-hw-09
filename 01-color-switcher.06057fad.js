const t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};let o=null;t.buttonStop.disabled=!0,t.buttonStart.addEventListener("click",(function(){t.buttonStop.disabled=!1,t.buttonStart.disabled=!0,o=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.buttonStop.addEventListener("click",(function(){t.buttonStop.disabled=!0,t.buttonStart.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.06057fad.js.map