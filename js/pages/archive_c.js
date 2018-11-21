if (window.location.hash) {
  //  document.getElementById(window.location.hash.replace('#', '')).style.background = '#002e59';

  let found = false;
  for (e of document.querySelectorAll('.category_group')) {
    if (e.id == window.location.hash.replace('#', '').toLowerCase()) {
      e.style.display = 'block';
      found = true;
    }
  }
  if (!found) {
    document.getElementById('js_message').innerHTML == `There is no category by the name "${window.location.hash.replace('#','').toLowerCase()}"`;
  }
} else {
  for (e of document.querySelectorAll('.category_group')) {
    e.style.display = 'block';
  }
}


window.onhashchange = function() {
  location.reload();
};
