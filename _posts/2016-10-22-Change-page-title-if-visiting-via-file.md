---
layout: post
title: Change page title if visiting via file:///
category: code
medium: https://blog.dnomaid.co.uk/change-page-title-if-visiting-via-file-66a4001bdec4
---

If you want your page title to change if you are visiting via the file URI scheme, you can just use this simple code snippet.

If you want this to apply to all pages you visit as files, put the code into a user script management extension like [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey) or [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

```javascript
if (location.protocol == 'file:') {
  document.title = 'your title';
}
```

Pretty simple, right?

{% include image.html path="/img/posts/Change page title if visiting via file/screenshot.png" caption="The script in action. Notice how the local site has [f] in its title." %}
