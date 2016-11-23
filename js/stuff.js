showhide = document.getElementById('more');

document.getElementById('more').onclick = function() {
    document.getElementById('morelinks').style.display = 'block';
    document.getElementById('mainlinks').style.display = 'none';
};

document.getElementById('back').onclick = function() {
    document.getElementById('morelinks').style.display = 'none';
    document.getElementById('mainlinks').style.display = 'block';
};

if (window.top !== window.self) window.top.location.replace(window.self.location.href);

if (location.protocol == 'file:') {
    document.title = '[f] dnomaid.co.uk'
}
