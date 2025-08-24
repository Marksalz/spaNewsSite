function GenNavbar(linksArray) {
  const nav = document.createElement("nav");
  linksArray.forEach((link) => {
    const a = document.createElement("a");
    a.textContent = link;
    a.style.color = "blue";
    a.style.fontSize = "50px";
    a.style.margin = "0 20px";

    a.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.textContent === "news") {
        loadPage("news");
      }
      if (e.target.textContent === "create story") {
        loadPage("create story");
      }
    });

    nav.appendChild(a);
  });
  nav.style.display = "inline-block";
  return nav;
}
