document.body.classList.add('js-enabled');
const hash = window.location.hash;

//-----------open/closing the navigation-------------------------------
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

if(hash === '#menu') openMenu();
if(hash === '#no-menu') closeMenu();
//----------------------------------------------------------------------


//-----------contact alert box------------------------------------------
const emailAddr = `${atob('aGlA')}${atob('dG9tci5tZQ==')}`;
if(document.getElementById('js-email')) {
  document.getElementById('js-email').innerHTML = emailAddr;
  document.getElementById('js-email').href = `mailto:${emailAddr}?subject=Hello!`;
}

if(hash === '#contact') window.location = '/about';
//----------------------------------------------------------------------


//-----------konami code------------------------------------------------

// https://twitter.com/dangeredwolf/status/1412113081371660290
let pressedKeys = '';
document.addEventListener('keydown', e => {
  pressedKeys += e.code;
  if (pressedKeys.match(/ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA$/g)) konami();
});

function konami() {
  document.querySelector('aside#topbar').classList.add('bent');
  document.querySelector('link[rel="shortcut icon"]').href = '/img/twemoji-rainbow.png';
  document.title = 'lg(b)tq+ moment <3';  
}
//----------------------------------------------------------------------


function loaderBar(pc) { console.info(`call to loaderBar, ${pc}% but the loader bar has been removed`); }
