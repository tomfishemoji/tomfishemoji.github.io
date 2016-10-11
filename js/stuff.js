if (window.top !== window.self) window.top.location.replace(window.self.location.href);

console.log('____________________');
console.log('|  dnomaidOS v0.2  |');
console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
console.log("Type 'help()' for a command list");
function help() {
  console.log('There is no help for you.');
}

function name() {
    window.setTimeout(brackets,000);
}
function brackets() {
    document.getElementById("title").innerHTML="<span class=\"bracket\">{</span>";
    window.setTimeout(d,100);
}
function d() {
    document.getElementById("title").innerHTML="<span class=\"bracket\">{</span>d}";
    window.setTimeout(dn,100);
}
function dn() {
  document.getElementById("title").innerHTML="<span class=\"bracket\">{</span>dn}";
  window.setTimeout(dno,100);
}
function dno() {
  document.getElementById("title").innerHTML="<span class=\"bracket\">{</span>dno}";
  window.setTimeout(dnom,100);
}
function dnom() {
  document.getElementById("title").innerHTML="<span class=\"bracket\">{</span>dnom}";
  window.setTimeout(dnoma,100);
}
function dnoma() {
  document.getElementById("title").innerHTML="<span class=\"bracket\">{</span>dnoma}";
  window.setTimeout(dnomai,100);
}
function dnomai() {
  document.getElementById("title").innerHTML="<span class=\"bracket\">{</span>dnomai}";
  window.setTimeout(dnomaid,100);
}
function dnomaid() {
  document.getElementById("title").innerHTML="<span class=\"bracket\">{</span>dnomaid}";
}

var textArray = [
    'Tweets too much',
    'Makes computer go beep boop',
    'Decent human being',
    'OK at most things',
    'Doesn\'t get dist- HEY A COOKIE',
    'Does things with stuff',
    'Sometimes makes a video',
    'Has a thing for dark themes',
    'Almost 1K ++s on devRant',
    'More Twitter followers than YouTube subscribers'
];
var randomNumber = Math.floor(Math.random()*textArray.length);

document.getElementById("subtitle").innerHTML = textArray[randomNumber];


if (location.protocol == 'file:') {
  document.title = '[f] dnomaid.co.uk'
}
