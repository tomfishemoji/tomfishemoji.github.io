---
layout: post
title: Installing Bash on Windows 10
category: tutorial
medium: https://blog.dnomaid.co.uk/how-to-install-bash-on-windows-10-69a9d6c09272
image: bash.png
---

The Windows 10 Anniversary Update introduced an interesting feature, native Linux (Ubuntu) functionality, but it’s not installed by default. This short tutorial will show you how to install it and get access to the Windows Subsystem for Linux and run Bash on Ubuntu on Windows.

---

# What is Bash?
First thing — if you don’t know what Bash is, you probably don’t want (or need) to install it. Bash is the Linux equivalent of Command Prompt on Windows, allowing the user to run multiple utilities in plain text, and receive output.

---

# How to Install

First, open Control Panel and navigate to Programs and Features.

![](/img/posts/Installing Bash on Windows 10/sidebar.png)
<span class="image-caption">Programs and Features sidebar</span>

Once you have that open, click “Turn Windows features on or off” in the left sidebar.

After the dialog appears, scroll down to “Windows Subsystem for Linux (Beta)” and make sure the box to its left is checked.

![](/img/posts/Installing Bash on Windows 10/features.png)

When Windows finishes downloading the required files, you’ll have to restart your PC to finish installing the Ubuntu subsystem, and once you’re logged back in, you should notice a new item in your Start Menu called “Bash on Ubuntu on Windows”. Open that up, it’ll perform first-time setup, and you’re done!

---

That’s it! You have installed the experimental Ubuntu Subsystem for Windows 10, and can run applications via Bash!
