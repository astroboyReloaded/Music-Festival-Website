const checkbox = document.getElementById('checkbox');

if (window.screen.width > 767) {
  checkbox.disabled = true;
}

Array.from(document.getElementsByClassName('nav-link'))
  .forEach((item) => item.addEventListener('click', () => { checkbox.checked = false; }));