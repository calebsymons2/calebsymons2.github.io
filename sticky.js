window.onload = function() {
  window.onscroll = function() {checkHeight()};
  var name = document.getElementById("caleb");
  var sidebar = document.getElementById("sidebar");

  var bod = document.getElementById("exp_text");
  if (bod == null) {
    bod = document.getElementById("bod");
  }

  var sticky = name.offsetTop;

  function checkHeight() {
    if (window.pageYOffset > (sticky - 1)) {
      name.classList.add("fixed_header");
      sidebar.classList.add("fixed_sidebar");
      bod.classList.add("fixed_bod");
    } else {
        name.classList.remove("fixed_header");
        sidebar.classList.remove("fixed_sidebar");
        bod.classList.remove("fixed_bod");
    }
  }
}
