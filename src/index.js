import "./styles.css";
function toggleDarkMode() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark-mode");
  var toggleBtn = document.getElementsByClassName("toggle-btn")[0];
  toggleBtn.classList.toggle("dark-mode");
}
