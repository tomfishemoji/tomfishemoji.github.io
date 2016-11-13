var showhide = document.getElementById('more');

document.getElementById('more').onclick = function() {
    document.getElementById('morelinks').style.display = 'block';
    document.getElementById('more').style.display = 'none';
    document.getElementById('less').style.display = 'inline';
};

document.getElementById('less').onclick = function() {
    document.getElementById('morelinks').style.display = 'none';
    document.getElementById('more').style.display = 'inline';
    document.getElementById('less').style.display = 'none';
};

if (window.top !== window.self) window.top.location.replace(window.self.location.href);

if (location.protocol == 'file:') {
  document.title = '[f] dnomaid.co.uk'
}
