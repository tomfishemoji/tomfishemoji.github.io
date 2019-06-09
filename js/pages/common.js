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

if(window.location.hash == '#menu') {
  openMenu();
}

if(window.location.hash == '#no-menu') {
  closeMenu();
}

// remove 'http://' from URLs, ish
const spans = document.getElementsByClassName('host-only');
for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = spans[i].innerHTML.split('/')[0].toString();
}

// Contact alert box
const dnomaidCOdotUKb64 = 'ZG5vbWFpZC5jby51aw==';
function contactAlert() {
  alert(
    `I don't bite!\n\nYou can email me using tom@${atob(dnomaidCOdotUKb64)}\nFor added security, make sure to grab my PGP key from my Keybase profile!`
  );
}

if(window.location.hash == '#contact') { contactAlert(); }
