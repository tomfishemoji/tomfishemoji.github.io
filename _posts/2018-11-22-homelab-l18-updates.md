---
layout: post
title: "Homelab Updates (late 2018)"
description: ""
image: pve-blur.png
category:
  - tech
  - homelab
info:
  - "Check out the 'Homelab' category (linked below) for any updates!"
---

Morning all! Haven't posted here in a while, so I thought I'd give some updates regarding an older post - [the one about my server/homelab](/2018/proliant/). A lot (ish) has changed since January, so let's dive straight in.

## Hardware
While the [Proliant](/faq/tech#proliant) featured in the initial *"review"* is still my primary server, I have given it a couple of upgrades. For a start, my network-storage needs are no longer handled by a shoddy WD Mybook drive hooked up over USB 2. The server is now fitted with (2) 2TB WD Blacks in RAID 0 (living on the edge!) for a combined total of 4TB (3.6TB formatted). Again in regards to storage, the measly 32GB SSD has been replaced with a 120GB one, which despite being from Kingston and not being particularly suited for this envrironment, performs more than adequately for running a few VMs and containers.

{% include image.html path="black-install.jpg" caption="One of the WD Black drives before it was inserted into the server" %}

## Software
The mention of VMs and containers previously brings me onto software; no longer am I using OpenMediaVault for everything. Instead, I use a hypervisor called Proxmox, within which I run a selection of containers, each dedicated to hosting a single app or two. This allows much finer control over resource allocation compared to the previous Docker-only solution. Additionally, having proper support for full KVM Virtual Machines means I don't have to rely upon the janky PHPVirtualBox web interface to run applications that would otherwise not work in a container. On top of all this, I am able to create a "cluster" if I were to ever get more fancy servers.

{% include image.html path="proxmox-backup.png" caption="Another example of Proxmox's usefulness: easy set up of automated backups of everything" %}

## Programs/Services
I know that programs and services are technically software in and of themselves, but there's a bit to talk about here so I deem the seperate heading worthy.

Here's basically everything I have running at the moment, although I often install things briefly just to play around with:

- **Emby**: A Plex alternative which I prefer the flexibility and customization of
- **Ombi**: Ties in with Emby and allows friends to request media for me to acquire and host on the Emby.
- **SMB**: Due to its multiplatform support, SMB is my primary method of network file transfer. I make use of **Webmin** to manage shares and configuration here.
- **Deluge**: I run Deluge as a headless daemon with a web interface for any Linux ISOs I might need to download overnight.
- **Apache**: Apache is my HTTP server of choice and I have a few apps running under it, such as Dokuwiki.
- **GitLab**: While heavy on resources and over-the-top for what I need, GitLab is an excellent option for self-hosting Git repositories.
- **Grafana**: Grafana goes hand in hand with **InfluxDB** to display system metrics and statistics for the plethora of VMs and containers as well as my other smaller devices. I primarily use **Telegraf** to send statistics to the database.
- **UNMS**: While not strictly required, I much prefer the look of UNMS over my stock EdgeRouter interface and it could come in handy in the future if I get more Ubnt kit.


{% include image.html path="grafana.png" caption="For those interested in my Grafana set-up, I will eventually get around to making a seprate blog post." %}

## Other Devices
As well as the Proliant, I have two Raspberry Pis chugging away, performing tasks.
My Pi Zero runs **Pi-Hole**, a DNS server that will filter out domain lists of your choosing (ads, malware, etc). I paticularly enjoy just looking at the graphs and statistics really, but the block lists are useful also.  
The beefier Raspberry Pi 3B essentially just acts as web host/reverse proxy. Since I'm lazy, I use Apache to forward requests to certain domains to where they have to go within the network *(service.example.com ➔ 192.0.0.5:1234, for example)*. The Pi also hosts a couple of mediocre Discord bots used within my friend-circle.

## Other Updates
While not strictly homelab related, I should touch upon a common question others have brought up:

{% include quote.html quote="Why do you still use [Google Photos/Twitter/Insert Service Here] when you're all about FOSS and that?" author="people" %}

What it all boils down to is **convenience**.  
Google Photos is simply best-in-class when it comes to web interfaces to manage photos. While I disagree with the data collection and the cost I have to pay to keep original-quality photos, those are small sacrifies for the convenience and the rich featureset that Google Photos offers.  
It is a similar story with Twitter. I attempted to use Mastodon for a good while; I wanted to like it. The problem was simply lack of adoption. Everyone I would want to follow (bar perhaps Bryan Lunduke) are on Twitter. Not to mention the polish that has gone into making Twitter be as soom as possible to use - something you can't really match as a one-man-band.
