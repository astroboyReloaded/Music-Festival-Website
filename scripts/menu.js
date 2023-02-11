const checkbox = document.getElementById('checkbox');

window.onresize = () => {
  if (window.screen.width > 767) {
    checkbox.disabled = true;
  } else if (window.screen.width < 768) {
    checkbox.disabled = false;
  }
};

document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  checkbox.checked = false;
}));