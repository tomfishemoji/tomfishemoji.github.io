if (window.top !== window.self) window.top.location.replace(window.self.location.href);

const spans = document.getElementsByClassName('host-only');
for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = spans[i].innerHTML.split('/')[0].toString();
}
