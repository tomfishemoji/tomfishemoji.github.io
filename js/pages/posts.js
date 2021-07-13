let submittedView = false;

function doViewCount(num) { // callback
  document.getElementById('js-viewcount').innerHTML = ` with ${num} views`;
}

function checkScroll() {
  // https://stackoverflow.com/a/8028584
  let h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';

  let scrollPercent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  if(scrollPercent >= 70) {
    if(!submittedView) {
      document.getElementById('viewcounter_form').submit();
      submittedView = true;
    } else {
      document.getElementById('viewcounter_form').innerHTML = '';
    }
  }
}

document.onscroll = checkScroll;
window.setTimeout(checkScroll, 1000);
