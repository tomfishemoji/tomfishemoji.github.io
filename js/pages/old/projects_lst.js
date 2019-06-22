const shuffledProjects = shuffle(projects);
const div = document.getElementById('js-list');

function loadProj(shuffled, type, clear) {
  div.innerHTML = '';
  let output = '';
  let toUse = projects;
  if(shuffled) {
    toUse = shuffledProjects;
  }

  for (let project of toUse) {
    let thisOut = ``;

    let thisName = project['name'];
    let thisDesc = project['desc'];
    let thisURL = project['url'];
    let thisGitHub = project['gh'];
    let thisGit = project['git'];
    let thisDate = project['date'];
    let thisOld = project['old'];
    let thisImg = project['img'];

    let link = '';
    if (thisURL) {
      link = `<a href="${thisURL}" target="_blank" rel="noopener" class="w"><i class="fas fa-fw fa-link"></i></a>`;
    }

    let git = '';
    if (thisGitHub) {
      git = `<a href="https://github.com/${thisGitHub}" target="_blank" rel="noopener" class="g"><i class="fab fa-fw fa-github"></i></a>`;
    } else if (thisGit) {
      git = `<a href="${thisGit}" target="_blank" rel="noopener" class="ge"><i class="fab fa-fw fa-git"></i></a>`;
    }

    let date = '';
    if(thisDate) {
      date = ` <span>${thisDate}</span>`;
    }

    let old = '';
    if(thisOld) {
      old = ` <span class="archive"><i class="fas fa-fw fa-archive"></i> <span class="inner">This project is old, the code might be awful or it is no longer being maintained</span></span>`;
    }

    let img = '';
    if(thisImg) {
      img = `<img src="/img/old/proj/${thisImg}.png" alt="A screenshot of ${thisImg}" title="${thisName}">`;
    }

    let langs = '';
    if(project['lang']) {
      for (lang of project['lang']) {
        langs += `<span class="lang lang-${lang.replace(/[^a-z]/g,'-')}">${lang.toLowerCase()}</span>`;
      }
    }

    thisOut = `
          <li>
            ${img}
            <b>${thisName} ${langs} ${old} ${date}</b>
            ${thisDesc}<br>
            ${link} ${git}
          </li>
      `;

    if(project['type'] == type || !type || type == "all") {
      output += thisOut;
    }
  }

  div.innerHTML = output;
}

loadProj(true, false, true);


// Fisher-Yates Shuffle, nicked from StackOverflow
// https://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
