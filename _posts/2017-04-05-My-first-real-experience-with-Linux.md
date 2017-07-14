---
layout: post
title: My first real experience with Linux
description: I’ve finally taken the plunge and actually installed it on a primary system.
category: tech
image: screenshot.png
medium: https://blog.dnomaid.co.uk/my-first-real-experience-with-linux-1be8ffcb782b
---

I’ve used Windows for as long as I’ve used computers, but a couple weeks ago I decided I would install some flavour of Linux onto my laptop, to see if I liked it. This post will document my first impressions and overall experience with the OS.

### Choosing a distro
This was one of the hardest parts. I wanted something that looked nice, was slick to use and had good compatibility. I used a secondary laptop to test out a few distros, and decided that I liked the look of Solus OS. There was one issue however: Solus is built from scratch, and is therefore not compatible with popular Linux software. I hated the way Ubuntu looked, but I loved the amount of programs it supported. See where this is going yet?

![The default Ubuntu Budgie desktop.](/img/posts/My first real experience with Linux/budgie.png)
<span class="image-caption">The default Ubuntu Budgie desktop. Image from <a href="https://ubuntubudgie.org/">their website</a>.</span>

After a few minutes of searching, I uncovered [Ubuntu Budgie](https://ubuntubudgie.org/), a community spin of Ubuntu with the same desktop environment from Solus that I liked so much. Hastily, I began downloading the ISO and flashing it to a spare USB thumb drive.

### Installation
Before booting into the installer, I decided it would be a safe idea to resize my Windows partition first. To do so, I used a bootable Minitool Partition Wizard CD I had laying around. The resize completed in a few minutes, and I was ready to install Ubuntu Budgie.


The installer took a few seconds to spin up (presumably because I was using a USB 2.0 flash drive) and I was able to install the OS with almost no problems. Luckily the GRUB bootloader had detected Windows, and still allowed me to boot from it.


### First boot
Despite being the first boot, the new OS only took about 10 seconds to start and present me with a welcome dialog. The first thing I did was remove Plank (a dock, similar to the one in macOS) and display open windows in the panel instead.


![The Plank Dock](/img/posts/My first real experience with Linux/plank.png)
<span class="image-caption">The Plank dock, as it comes by default in Ubuntu Budgie</span>

### Drivers & Hardware Compatibility
To my amazement, the majority of my laptop’s hardware worked out of the box, including the camera, microphone, WiFi card and the trackpad. Even the keyboard hotkeys worked! After my initial smugness wore off, I realized one huge thing was missing: My GPU.


I located my laptop’s GPU on Nvidia’s website and downloaded the suggested version. It told me I needed to boot into terminal-only mode to install, so I did. The installer failed whilst trying to install some kind of kernel module. I tried a few times again, no luck. I searched the issue and found that secure boot was the issue. Disabled that and the module installed. Everything’s fine and dandy now, right? Nope.

![/dev/sda5: clean, 1234567890/987654321 files, 1234567890/987654321 blocks](/img/posts/My first real experience with Linux/clean.jpeg)
<span class="image-caption">This doesn't look right.</span>

After rebooting, my laptop’s screen presented me with an FDISK message telling me that my drive was clean. I waited a bit for it to do something, and nothing happened. Force shutting down the system did nothing; it still booted into the same message. Assuming this was the fault of the Nvidia driver, I booted into recovery mode and removed all Nvidia packages. As I expected, this fixed my issue. Not wanting to go through even more hassle, I decided to just live with integrated graphics.

### Games & Software Compatibility
![The software center](/img/posts/My first real experience with Linux/software.png)
<span class="image-caption">The software center.</span>

I was pleasantly surprised with the amount of applications available in the software center, and I was able to install most of my required programs using it. Sadly, a few programs I use aren't available on Linux, but I was able to find decent alternatives for most of them. For things like Sony Vegas and the Adobe suite I just reboot into Windows and use them there; no fancy virtual machines for me just yet.

Games on the other hand are a different story. Only 46 out of my 96 Steam games are playable on Linux. Luckily most of my favourites work, but a lot of them don’t.

The Nautilus file manager was able to connect to my SMB network shares just fine. It was also able to browse NTFS partitions out of the box, which was a surprise as I couldn't do this on other Linux devices (like my Raspberry Pi).


### Other observations
-- My battery life is about an hour longer under Linux than it is on Windows, with the same programs running.


-- Searching for issues and support yield more helpful answers.


-- Programs are far easier to install (both from the software center and the terminal) due to the lack of “next, next, next” installers.

### Closing Thoughts
Overall, my experience with Linux (specifically Ubuntu Budgie) has been really nice. So nice in fact, that I’m now using it way more than Windows!

### Thanks
Thanks to [Da532](https://da532.com) for being fine with me “borrowing” the title and general idea from [his post about Windows 10](https://medium.com/da532/my-first-real-experience-with-windows-10-12ae412928a6).
