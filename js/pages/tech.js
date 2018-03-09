function toggle(div) {
  var divtotoggle = document.getElementById(div);
  if (divtotoggle.style.display === 'inline' || divtotoggle.style.display === '')
    divtotoggle.style.display = 'none';
  else
    divtotoggle.style.display = 'inline';
}
