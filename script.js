function toggleTheme() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}

function toggleNavbar() {
    var navbarList = document.getElementById("navbarList");
    if (navbarList.style.display === "none") {
      navbarList.style.display = "block";
    } else {
      navbarList.style.display = "none";
    }
  }