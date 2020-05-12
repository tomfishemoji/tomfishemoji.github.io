loaderBar(0);
const div = document.getElementById('js-folder');
let files = '';
let folders = '';
let out = `<h3><i class="fas fa-fw fa-stream"></i> File Listing of ${window.location.pathname}</h3><p>Due to the way GitHub Pages handles folders, what should be a directory listing is actually turned into a 404 page. Below is a list of what is inside of ${window.location.pathname}.</p>`;

let pathsplit = window.location.pathname.split('/');
let folderparent = '/';
for(let i = 0; i < pathsplit.length - 2; i++) {
  folderparent += pathsplit[i];
}

$.getJSON(`https://api.github.com/repos/mrdnomaid/mrdnomaid.github.io/contents${window.location.pathname}`, function(j) {
  loaderBar(50);
  folders += `<a href="${folderparent}#open"><i class="fas fa-fw fa-level-up-alt"></i> Up a level</a><br>`;

  for (file of j) {
    if (file.type == 'file') {
      files += `<a href="/${file.path}"><i class="fas fa-fw fa-file"></i> ${file.name}</a><br>`;
    } else {
      folders += `<a href="/${file.path}#open"><i class="fas fa-fw fa-folder"></i> ${file.name}</a><br>`;
    }
  }

  out += folders;
  out += files;
  div.innerHTML = out;
  loaderBar(100);
  document.getElementById('js-folder-trigger').style.display = 'block';
});

if (window.location.hash.includes('open')) {
  document.getElementById('js-folder').style.display = 'block';
}

function showList() {
  document.getElementById('js-folder').style.display = 'block';
  document.getElementById('js-folder-trigger').style.display = 'none';
}
