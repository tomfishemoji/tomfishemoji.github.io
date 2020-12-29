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
const emailAddr = `tom@${atob('ZG5vbWFpZC5jby51aw==')}`;
if(document.getElementById('js-email')) {
  document.getElementById('js-email').innerHTML = emailAddr;
  document.getElementById('js-email').href = `mailto:${emailAddr}?subject=Hello!`;
}

if(hash == '#contact') { window.location = '/about'; }

function loaderBar(percent) {
  // this was a bad idea lol
  // console.log(percent);
  // document.getElementById('topbar').style.width = `${percent}%`;
}

loaderBar(100);