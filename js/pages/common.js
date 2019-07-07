document.body.classList.add('js-enabled');

const hash = window.location.hash;

// force self out of iframes, ish
if (window.top !== window.self) { window.top.location.replace(window.self.location.href) };

// open/closing the navigation
const menu = document.querySelector('nav');

function openMenu() {
  menu.style.display = 'block';
  document.getElementById('menu-toggle-open').style.display = 'none';
  document.getElementById('menu-toggle-close').style.display = 'block';
}

function closeMenu() {
  menu.style.display = 'none';
  document.getElementById('menu-toggle-open').style.display = 'block';
  document.getElementById('menu-toggle-close').style.display = 'none';
}

if(hash == '#menu') { openMenu(); }
if(hash == '#no-menu') { closeMenu(); }

// Contact alert box
function contactAlert() {
  alert(
    `I don't bite!\n\nYou can email me using tom@${atob('ZG5vbWFpZC5jby51aw==')}\nFor added security, make sure to grab my PGP key from my Keybase profile!`
  );
}

if(hash == '#contact') { contactAlert(); }
