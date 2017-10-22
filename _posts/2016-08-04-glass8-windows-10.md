---
layout: post
title: Glass8 is not the biggest fan of the Windows 10 Anniversary update
category:
- tech
- windows
medium: https://blog.dnomaid.co.uk/glass8-isnt-the-biggest-fan-of-the-windows-10-anniversary-update-92a00350fbc2
image: window.jpeg
---

{% include image.html path="/img/posts/Glass8 is not the biggest fan of the Windows 10 Anniversary update/microsoft-watch.jpeg" %}

The Windows 10 Anniversary Update released a couple of days ago and it’s pretty neat (stay tuned for a full-ish review) but if you used Glass8, a popular application that’s used to put an Aero glass effect on Windows 8+ title bars, you might be in for a surprise after you update to version 1607.

---

# The Problem
I posted a Twitter video a few days back, after I installed the update, which will make the rather big problem pretty apparent if you watch it.

<div>
<div style="max-width: 40em !important; margin: 0 auto;">
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Yay video drivers <a href="https://t.co/bgeVNxWYeV">pic.twitter.com/bgeVNxWYeV</a></p>&mdash; Tom (@mrdnomaid) <a href="https://twitter.com/mrdnomaid/status/760767912126844928">August 3, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
</div>

Reasonably, I thought the issue was being caused by the Nvidia graphics drivers. As I came to find, that wasn’t the issue at all.

Even after re-installing the Nvidia graphics driver and fiddling with some settings, the issue persisted. I needed to figure out what was happening.

---

# The Solution
After uninstalling a few programs I thought might have been causing it ([Classic Shell](http://www.classicshell.net/), [Moo0 Transparent Menu](http://www.moo0.com/software/TransparentMenu/), etc.), the issue continued. I then remembered — I had Glass8 installed. So, after attempting to delete it in Safe Mode, and Windows Explorer saying it was in use, I rebooted into Safe Mode with Command Prompt. From there, I navigated to the folder I installed it in and ran del *.*.

From that point, knowing that Glass8's files were all gone, I restarted once again, into regular Windows (no Safe Mode this time), and sure enough, the issue was gone!
