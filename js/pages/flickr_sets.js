loaderBar(0);

const outDiv = document.getElementById('js-gals');
let outData = '';

function doFlickr(flickrData) {
  console.log(flickrData);
  loaderBar(75);

  for(album of flickrData.photosets.photoset) {
    console.log(album);

    let albumDate = new Date(parseInt(album.date_update) * 1000);
    console.log(albumDate);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let desc = '';

    if(album.description._content) {
      desc = `
        <br><span style="font-size: 0.8em; opacity: 0.6; font-style: italic;">${album.description._content}</span>
      `;
    }


    outData += `
      \n<li style="margin-bottom: 16px;">
          <a href="https://www.flickr.com/photos/mrdnomaid/albums/${album.id}">
          ${album.title._content}</a>
          <br>
          <span style="font-size: 0.8em; opacity: 0.8;">
            ${albumDate.getDate()} ${months[albumDate.getMonth()]} ${albumDate.getFullYear()} &bull;
            ${album.photos + album.videos} items &bull;
            ${album.count_views} views
          </span>
          ${desc}
        </li>
    `;
  }

  outDiv.innerHTML = `<ul> ${outData} </ul>`;
  loaderBar(100);

}
