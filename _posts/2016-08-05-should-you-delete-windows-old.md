---
layout: post
title: Should you delete Windows.old?
category: tech
medium: https://blog.dnomaid.co.uk/should-you-delete-windows-old-a51bd3999deb
---

{% include image.html path="properties.png" %}

If you didn’t know, Windows.old is a folder created in the root of your system drive (usually C:) that contains files from older versions of Windows.

When you upgrade, Windows will make this folder in case you need to roll back to the previous version if your PC is crashing, or you just dislike the update. Windows automatically deletes this folder about a month after you update.

However, this folder is usually anywhere from 20 to 30 gigabytes in size, which is a lot if you are running off a small SSD or hard drive.

---

# So, should you delete it?
If you have a large hard drive or plan on possibly rolling back within the 30-day window after upgrading, then you probably shouldn’t delete it. However, if you don’t have any issues with the upgrade, then it might be wise to delete it to free up some space.

---

# How do I delete it?
Well it’s pretty easy. Just search for “Disk Cleanup” and select your main system drive (again, usually C:) and click OK. Next, you’ll need to select “Clean up system files”. Once it calculates, remember to select “Previous Windows installation(s)” from the list. Once you click OK, Disk Cleanup will start cleaning the files from your drive, and once it’s done, you’ll have your space back.
{% include image.html path="cleanup.png" %}
