!function(e){e.forEach(function(e){var t=e.getAttribute("name").replace(/[A-Z]/g,function(e){return" ".concat(e)}),r=e.getAttribute("id"),c=t.slice(0,1).toUpperCase()+t.slice(1);e.setAttribute("placeholder",c);var l=document.createElement("label");l.setAttribute("for",r),l.setAttribute("class","field-label"),l.textContent=t.toUpperCase(),e.before(l)})}(document.querySelectorAll("input"));
//# sourceMappingURL=index.4f28bfcf.js.map
