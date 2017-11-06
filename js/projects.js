function addZero(what) {
  if (what.toString().length == 1) {
    return what = '0' + what;
  } else {
    return what;
  }
}

apiurl = 'https://api.github.com/users/mrdnomaid/repos?type=all&per_page=100';
exclude = [
  93560944,
  64045777,
  88171176,
  64804610,
  64443395
];
var e;

$(document).ready(function() {
  try {
    $.getJSON(apiurl, function(response) {
      if (response.message) {
        document.getElementById('loading').innerHTML = 'Something went wrong';
      } else {
        document.getElementById('github-results').innerHTML = '';
        for (i in response) {
          if (!exclude.includes(response[i].id)) {
            if (!response[i].description) {
              description = '&nbsp;'
            } else {
              description = response[i].description.replace(/:.*:/, '');
            }

            if (response[i].homepage) {
              lnka = '<a href="' + response[i].homepage + '">';
              lnkb = '</a>';
            } else {
              lnka = '<a href="' + response[i].html_url + '">';
              lnkb = '</a>';
            }

            // if (response[i].language) {
            //   if (response[i].homepage) {
            //     lang = response[i].language.replace('CSS', 'HTML').replace(' ', '-');
            //     langd = response[i].language.replace('CSS', 'HTML');
            //   } else {
            //     lang = response[i].language.replace(' ', '-');
            //     langd = response[i].language;
            //   }
            // } else {
            //   lang = 'none';
            //   langd = 'None';
            // }

            dateo = new Date(response[i].pushed_at);
            date = dateo.getFullYear() + '-' + addZero(dateo.getMonth()) + '-' + addZero(dateo.getDate());

            if (response[i].full_name.includes('mrdnomaid/')) {
              // Bit for the languages :
              // <span class="button lang ' + lang + '" title = "Most used language, according to GitHub">' + langd + '</span>'

              document.getElementById('github-results').innerHTML += '<b>' + lnka + response[i].name + lnkb + '</b> &mdash; <i class="desc">' + description + '&nbsp;<span title="Last Updated">(' + date + ')</span></i><p>';

            } else {
              e += '<b>' + lnka + response[i].name + lnkb + '</b> &mdash; <i class="desc">' + description + '&nbsp;<span title="Last Updated">(' + date + ')</span></i><p>';
            }
          }
        }
        document.getElementById('github-results').innerHTML += '<h1 style="margin-top: 64px;margin-bottom: 16px;border-bottom: 2px solid #002e59;">Elsewhere</h1>';
        document.getElementById('github-results').innerHTML += e;
      }
    });
  } catch (err) {
    document.getElementById('loading').innerHTML = 'Something went wrong';
    document.getElementById('loading').innerHTML += err;
  }
});
