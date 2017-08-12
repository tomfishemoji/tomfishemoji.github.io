---
layout: post
title: ASUS Routers and plaintext passwords
description: Oh hey, that's my password!
category:
  - tech
  - security
multiplecats: true
image: decent.png
---

A few minutes ago, I thought it would be a good idea to change my ASUS router's password to something more secure than a few words. Something long, something with lots of symbols and something totally random.

The router took much offence to this and decided that I didn't need to see the login page, constantly redirecting to itself with a bit of outdated JavaScript. Okay, just reboot and it should fix itself, right? Nope. Still happening. It took about 10 reboots before it finally showed me the login page, which let me into the dashboard no problem. And wow was it broken.

![](/img/posts/ASUS Routers and plaintext passwords/funky-dashboard.png)
<span class="image-caption">This doesn't look right</span>

This immediately set off alarm bells in my mind. Changing my password shouldn't break the UI. I found out that the length limit is 16 chars, which my password manager happily ignored. Turns out that the only way they're enforcing the limit is the HTML `maxlength` attribute, which is super easy to change from the Chrome dev tools.

I couldn't get to the password change page, so I had to use SSH that I had enabled. I tried to change my password using the popular \*nix utility, `passwd`. This isn't a thing in the stripped down version of Linux on the router, so I took to Google.

In my searches, I found a video from last year, showing that you get the password in plaintext simply by entering a short command. I figured that they must've nerfed that to encrypt the password, but again, NOPE! The router happily spit out my password in plaintext right into the console.

![](/img/posts/ASUS Routers and plaintext passwords/ssh.png)
<span class="image-caption">Oh hey, that's my password!</span>

Seeing as this was some NVRAM variable thing, I was able to change it super easily too. This let me back into the (now fixed) admin page and I was able to continue editing settings.

![](/img/posts/ASUS Routers and plaintext passwords/reset.png)
<span class="image-caption">Changing the password is as easy as this</span>

---

While this may not be *that* big of an issue *(you need to have SSH access which requires knowing the password in the first place)*, it pisses me off because it's so easy to hash the password and get a decently secure system going. ASUS is a multi-billion dollar company, they can totally afford to do that.

I also would've emailed this issue to ASUS privately, however they apparently have a team of "independent security testers" that conduct "full audits of [the] router's firmware," so they should be just fine.
