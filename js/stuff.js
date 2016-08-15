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

//Regular JS
if (window.top !== window.self) window.top.location.replace(window.self.location.href);
console.log('______________________');
console.log('|  dnomaid DOS v1.0  |');
console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾/‾‾‾‾‾‾‾');
console.log('             /');
console.log(' ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦');
console.log('-_-_-_-_-_-_-_-_-_-_-_');
console.log("Intel i486SX 33MHz");
console.log("12MB system RAM");
console.log("Keyboard: Detected");
console.log("Quantum Fireball 540MB");
console.log('-_-_-_-_-_-_-_-_-_-_-_');
console.log('Type "help()" for a list of commands');
function help() {
   console.log('There is no help.');
 }
