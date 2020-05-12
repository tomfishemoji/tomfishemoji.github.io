loaderBar(0);
const outDiv = document.getElementById('js-photos');
let outData = '';

let test;

function doFlickr(flickrData) {
  loaderBar(75);

  outDiv.innerHTML = '';
  outDiv.style.columns = 5;
  outDiv.style['column-gap'] = 0;
  outDiv.style['background-color'] = '#000';
  document.getElementById('coltweak').style.display = 'block';
  document.body.classList.add('wide');
  
  for(p of flickrData.photos.photo) {
    outDiv.innerHTML += `<a href="https://flickr.com/photos/${p.owner}/${p.id}"><img title="${p.title}" src="https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_z.jpg" style="border-radius: 0; padding: 0; margin: 0;"></a>`;
  }
  
  loaderBar(100);
}
