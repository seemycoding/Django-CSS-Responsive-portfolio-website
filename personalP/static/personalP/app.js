function openNav() {
  console.log(window.location.pathname);
  if (window.location.pathname == "/home/") {
    document.getElementById("home1").style.display = "none";
  }
  if (window.location.pathname == "/about/") {
    document.getElementById("showtext").style.display = "none";
  }
  if (window.location.pathname == "/resume/") {
    document.getElementById("resume-show").style.display = "none";
  }
  if (window.location.pathname == "/work/") {
    document.getElementById("showcase-work-section").style.display = "none";
  }

  document.getElementById("mySidenav").style.display = "flex";
}

function closeNav() {
  if (window.location.pathname == "/home/") {
    document.getElementById("home1").style.display = "";
  }
  if (window.location.pathname == "/about/") {
    document.getElementById("showtext").style.display = "";
  }
  if (window.location.pathname == "/resume/") {
    document.getElementById("resume-show").style.display = "";
  }
  if (window.location.pathname == "/work/") {
    document.getElementById("showcase-work-section").style.display = "";
  }

  document.getElementById("mySidenav").style.display = "none";
}
