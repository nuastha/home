//change icon and mode (dark mode)
const mode = document.querySelector(".mode");
const icon = document.querySelector(".fa-moon");

mode.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
//reload the home page on click home or logo

const navItem = document.querySelector(".home");

navItem.addEventListener("click", function () {
  location.reload();
});
