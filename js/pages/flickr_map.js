loaderBar(0);

let mapDiv = document.getElementById('yeahyeahyeahs');
let map = L.map('yeahyeahyeahs').fitWorld();

let extraAtts = `
  <br>
  <span id="taggedcount">0</span>/<span id="totalcount">0</span> of <a href="https://www.flickr.com/photos/{{site.github}}/">my photos</a> displayed
`;

let extraBig = `
  <span id="embiggen" class="map-fullscreen-button"><a onclick="embiggen()" style="cursor: pointer;" title="Embiggen the Map"><i class="fas fa-fw fa-expand"></i></a></span>
  <span id="embiggen-smaller" style="display: none" class="map-fullscreen-button"><a onclick="window.location.reload()" style="cursor: pointer;" title="Smallerify the Map"><i class="fas fa-fw fa-compress"></i></a></span>
`;

//
// Open Street Map tiles
//
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: `
//     ${extraBig}
//     &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
//     ${extraAtts}
//     `
// }).addTo(map);

//
// Carto tiles
//
L.tileLayer('https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: `
    ${extraBig}
    Map Tiles by <a href="https://carto.com/">Carto</a> | Data from <a href="https://www.openstreetmap.org/">OpenStreetMap</a>
    ${extraAtts} | <a href="https://www.openstreetmap.org/fixthemap">Map Content Problems?</a>
    `
}).addTo(map);


function doFlickr(flickrData) {
  // console.log(flickrData);

  let markers = [];
  let photoCountTagged = 0;
  let photoCountTotal = 0;

  loaderBar(50);

  for(p of flickrData.photos.photo) {
    // console.log(p);

    photoCountTotal++;

    if(p.latitude && p.longitude) {
      photoCountTagged++;

      markers.push(L.marker([p.latitude, p.longitude],{icon:genIcon(p)}).addTo(map).bindPopup(`
        <a href="https://flickr.com/photos/${p.owner}/${p.id}" target="blank" rel="noopener noreferrer" class="marker-photo-link">
          <img src="https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_z.jpg">
          <span class="marker-photo-title">${p.title}</span>
          <span class="marker-photo-date">${p.datetaken}</span>
        </a>
      `));
    }
  }

  // Size map to fit all the markers
  // https://stackoverflow.com/a/16845714
  let markerGroup = new L.featureGroup(markers);
  map.fitBounds(markerGroup.getBounds());

  document.getElementById('taggedcount').innerHTML = photoCountTagged;
  document.getElementById('totalcount').innerHTML = photoCountTotal;


  document.getElementById('load').style.display = 'none';
  loaderBar(100);

  if(window.location.hash == '#big') {
    embiggen();
  }

  mapDiv.style.opacity = '1';
  mapDiv.style['pointer-events'] = 'auto';
}

function genIcon(flickrImg) {
  let flickrBase = `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}`;

  return L.icon({
    iconUrl: `${flickrBase}_s.jpg`,
    iconRetinaUrl: `${flickrBase}_q.jpg`,
    iconSize: [40, 40],
    popupAnchor: [0, -5],
  });
}

function embiggen() {
  window.location.hash = 'big';
  document.getElementById('embiggen').style.display = 'none';
  document.getElementById('embiggen-smaller').style.display = 'block';
  mapDiv.style.position = 'fixed';
  mapDiv.style.top = '0';
  mapDiv.style.left = '0';
  mapDiv.style.width = '100vw';
  mapDiv.style.height = '100vh';
  mapDiv.style.margin = '0';
  mapDiv.style.padding = '0';
  mapDiv.style.border = 'none';
}
