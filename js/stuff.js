//Jquery
$("#em").click(function() {
  $("#about").fadeOut(500);
  $("#em").fadeOut(500);
  $("#contact").delay(500).fadeIn(500);
  $("#ho").delay(500).fadeIn(500);
});
$("#ho").click(function() {
  $("#contact").fadeOut(500);
  $("#ho").fadeOut(500);
  $("#about").delay(500).fadeIn(500);
  $("#em").delay(500).fadeIn(500);
});
$('#disclaimer').delay(2500).fadeOut(500);

//Regular JS
if (window.top !== window.self) window.top.location.replace(window.self.location.href);
console.log('______________________');
console.log('| The page has loaded |');
console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾/‾‾‾‾‾‾‾');
console.log('             /');
console.log(' ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦');
