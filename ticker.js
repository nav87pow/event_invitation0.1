  // all page on load grab the ticker element

window.addEventListener("load", () => {
  const ticker = document.getElementById("ticker");  
  if (!ticker) return;

  const span = ticker.querySelector("span");
  const text = span.textContent.trim() + " ";

  //duplicate the element 
document.addEventListener("DOMContentLoaded", () => {
  const ticker = document.querySelector("#ticker");
  const span = ticker.querySelector("span");

  const clone = span.cloneNode(true);
  clone.setAttribute("aria-hidden", "true")
  ticker.appendChild(clone);
});

  // infinite copy
  let count = 0;
  while (ticker.scrollWidth < window.innerWidth * 3 && count < 50) {
    const s = document.createElement("span");
s.innerHTML = contentHTML;
    ticker.appendChild(s);
    count++;
  }

  //calc speed of the movment
   const totalWidth = ticker.scrollWidth;
  const speed = 90; // פיקסלים לשנייה
  const duration = totalWidth / speed;

  ticker.style.animationDuration = `${duration}s`;
});
