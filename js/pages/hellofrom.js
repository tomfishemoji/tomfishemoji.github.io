const hashNoProtocol = window.location.hash.replace(/\#/,'').replace(/(http)s*\:\/\//g,'');

if(hashNoProtocol.length > 1) {
    const beforeSlash = hashNoProtocol.split('/')[0];
    const afterSlash = (hashNoProtocol.split('/')[1]) ? hashNoProtocol.split(/\/(.+)/)[1] : '';

    document.getElementById('js-site').innerHTML = `&mdash;<code>${beforeSlash}/${(afterSlash)}</code>&mdash;`;
    document.getElementById('js-archive-link').href = `https://archive.trobinson.me/${beforeSlash}/${afterSlash}`;
    document.getElementById('js-this-site-link').href = `/${afterSlash}`;
}