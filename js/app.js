const openNav = () => {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("mySidenav").style.left = "0px";
  document.getElementById("overlay").style.zIndex = "4";
  document.getElementById("overlay").style.background =
    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.left = "-300px";
  document.getElementById("overlay").style.zIndex = "-5";
  document.getElementById("overlay").style.background =
    "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";
};
