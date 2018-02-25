const path = window.location.pathname;
if (path.substring(0, 3) == '/20' && path.endsWith('.html')) {
    path = path.replace('.html', '/');
    document.location = path.toLowerCase();
}
