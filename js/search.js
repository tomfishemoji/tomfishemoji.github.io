if (window.location.hash) {
  document.getElementById('search-input').value = window.location.hash.replace('#', '');
}

window.simpleJekyllSearch = new SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('search-results'),
  json: '/js/posts.json',
  searchResultTemplate: '<li><h4>{date} in {category}{author}</h4><h2><a href="{url}">{title}</a></h2></li>',
  noResultsText: '<h4 style="padding-bottom: 16px;">No results</h4>',
  limit: 5,
  fuzzy: false
})
