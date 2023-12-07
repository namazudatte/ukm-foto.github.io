/*? no js js needed from me */
$(document).ready(function () {
  $("#tes").on("click", function () {
    alert("ok");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var scrollPosition = window.scrollY;

  window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      navbar.classList.add("bg-slate-700");
      navbar.classList.remove("hover:bg-bgDark");
    } else {
      navbar.classList.remove("bg-slate-700");
      navbar.classList.add("hover:bg-bgDark");
    }
  });
});
