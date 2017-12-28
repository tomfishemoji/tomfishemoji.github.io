// This bit adds 0 to the start of numbers to make them 2 digits long
function addZero(what) {
  if (what.toString().length == 1) {
    return what = '0' + what;
  } else {
    return what;
  }
}

// GitHub API URL to get information from
const apiurl = 'https://api.github.com/users/mrdnomaid/repos?type=all&per_page=100';

// Exclude some repos (get their ID from the API)
const exclude = [
  93560944,
  64045777,
  88171176,
  64804610,
  64443395
];
let e;

// I know, JQuery, but I'm lazy
$(document).ready(function() {
  // I don't think this try/catch block actually works, but I like keeping it in here
  try {
    $.getJSON(apiurl, function(response) {
      if (response.message) {
        // This doesn't work because if you go over the rate limit, the API serves a 403(?) and the request won't be made in the first place
        document.getElementById('loading').innerHTML = 'Something went wrong';
      } else {
        // If there was something in the container already, clear it
        document.getElementById('github-results').innerHTML = '';
        for (i in response) {
          // Make sure it's not in the exclude list
          let description = '';
          if (!exclude.includes(response[i].id)) {
            if (!response[i].description) {
              description = 'No Description'
            } else {
              // Get rid of emojis that I couldn't be arsed to display right.
              description = response[i].description.replace(/:.*:/, '');
            }

            // If the repo has/is a website, use that instead of the repo URL
            let lnka = '';
            let lnkb = '</a>';
            if (response[i].homepage) {
              lnka = '<a href="' + response[i].homepage + '">';
            } else {
              lnka = '<a href="' + response[i].html_url + '">';
            }

            // The page used to show language buttons, but I got rid of them.
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

            // Show the date in YYYY-MM-DD
            let dateo = new Date(response[i].pushed_at);
            let date = dateo.getFullYear() + '-' + addZero(dateo.getMonth()) + '-' + addZero(dateo.getDate());

            // If the repo is under my account
            if (response[i].full_name.includes('mrdnomaid/') && response[i].fork !== true) {
              // Bit for the languages:
              // <span class="button lang ' + lang + '" title = "Most used language, according to GitHub">' + langd + '</span>'

              document.getElementById('github-results').innerHTML += '<b>' + lnka + response[i].name + lnkb + '</b> &mdash; <i class="desc">' + description + '&nbsp;<span title="Last Updated">(' + date + ')</span></i><p>';

            } else {
              // Add things not under my account to "e".
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
