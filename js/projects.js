function addZero(what) {
  if (what.toString().length == 1) {
    return what = '0' + what;
  } else {
    return what;
  }
}

apiurl = 'https://api.github.com/users/mrdnomaid/repos?per_page=100';
exclude = [
  93560944,
  64045777,
  88171176,
  64804610,
  64443395
  ];

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

            if (!response[i].homepage) {
              buttons = '<a class="button" href="' + response[i].html_url + '" target="_blank" rel="noopener noreferrer">Repo</a>';
            } else {
              buttons = '<a class="button" href="' + response[i].html_url + '" target="_blank" rel="noopener noreferrer">Repo</a>';
              buttons += '  <a class="button" href="' + response[i].homepage + '" target="_blank" rel="noopener noreferrer">Live Site</a>';
            }

            if (response[i].homepage) {
              lang = response[i].language.replace('CSS', 'HTML').replace(' ', '-');
              langd = response[i].language.replace('CSS', 'HTML');
            } else {
              lang = response[i].language.replace(' ', '-');
              langd = response[i].language;
            }

            dateo = new Date(response[i].pushed_at);
            date = dateo.getFullYear() + '-' + addZero(dateo.getMonth()) + '-' + addZero(dateo.getDate());

            document.getElementById('github-results').innerHTML += '<h2 class="invert" id="' + response[i].id + '">' + response[i].name + '</h2>';
            document.getElementById('github-results').innerHTML += '<h4 style="font-size: 1em;">' + description + '</h4>';
            document.getElementById('github-results').innerHTML += '<h4 style="font-size: 1em;">' + buttons + ' <span class="button lang ' + lang + '" title="Most used language, according to GitHub">' + langd + '</span> <span title="Last Updated">' + date + '</span></h4>';
          }
        }
      }
    });
  } catch (err) {
    document.getElementById('loading').innerHTML = 'Something went wrong';
    document.getElementById('loading').innerHTML += err;

  }
});
