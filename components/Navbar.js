function GenNavbar(linksArray) {
  const nav = document.createElement("nav");
  linksArray.forEach((link) => {
    const a = document.createElement("a");
    a.className = "nav_link";
    a.textContent = link;

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

  return nav;
}
