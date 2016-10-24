if (window.top !== window.self) window.top.location.replace(window.self.location.href);

console.log('____________________');
console.log('|  dnomaidOS v0.2  |');
console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
console.log("Type 'help()' for a command list");
function help() {
  console.log('There is no help for you.');
}

var textArray = [
    'Tweets too much',
    'Makes computer go beep boop',
    'Decent human being',
    'OK at most things',
    'Doesn\'t get dist&mdash;HEY A COOKIE',
    'Does things with stuff',
    'Sometimes makes a video',
    'Has a thing for dark themes',
    'Likes raspberries',
    'Likes raspberry flavoured things'
    'Almost 1K ++s on devRant',
    'More Twitter followers than YouTube subscribers'
];
var randomNumber = Math.floor(Math.random()*textArray.length);

document.getElementById("subtitle").innerHTML = textArray[randomNumber];


if (location.protocol == 'file:') {
  document.title = '[f] dnomaid.co.uk'
}
