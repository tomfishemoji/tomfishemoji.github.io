let mapDiv = document.getElementById('yeahyeahyeahs');
let map = L.map('yeahyeahyeahs').setView([52.47, -1.93], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function doFlickr(flickrData) {
  console.log(flickrData);

  for(p of flickrData.photos.photo) {
    console.log(p);

    if(p.latitude && p.longitude) {
      L.marker([p.latitude, p.longitude]).addTo(map).bindPopup(`
        <a href="https://flickr.com/photos/${p.owner}/${p.id}" style="text-align: center;">
          <img src="https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg" style="border-radius: 50%; padding: 0; margin: 0;"><br>
          ${p.title}
        </a>
        `)
    }
  }

  document.getElementById('load').style.display = 'none';
  mapDiv.style.opacity = '1';
  mapDiv.style['pointer-events'] = 'auto';
}
