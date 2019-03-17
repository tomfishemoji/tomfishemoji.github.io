const templateHTML = `
  <div class="post">
          <h3><a href="{url}">{title}</a></h3>
          <h4>
            {date}
            {category}
            {author}
          </h4>
  </div>`;

if (window.location.hash) {
  document.getElementById('search-input').value = window.location.hash.replace('#', '');
}

// I wanted to have a dropdown to select the amount of results, but that never happened
if (document.getElementById('search-js').getAttribute('data-limit')) {
  rlimit = document.getElementById('search-js').getAttribute('data-limit');
} else {
  rlimit = 5;
}

window.simpleJekyllSearch = new SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('search-results'),
  json: '/js/posts.json',
  searchResultTemplate: templateHTML,
  noResultsText: '<h3>No Results</h3>',
  limit: rlimit,
  fuzzy: false
})
