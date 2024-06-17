---
title: "SmartMonitor"
slug: smartmonitor
datetime: 2021-04-20T16:13:06.242Z
draft: false
tags:
  - DevOps
  - IoT
ogImage: ""
---

### The Birth of an Idea

It all started when my friend and I were walking to our college elevator and noticed new large displays showing college events. A few days earlier, we found out that our university had replaced most of the monitors in our lab and disposed of the old ones.

I thought, why not upcycle those monitors? We discussed this with our principal, who mentioned that the current displays were using a costly yearly subscription software. We decided to take matters into our own hands, and thus, SmartMonitor was born.

### The Implementation

We decided to use the old monitors as independent displays connected to Raspberry Pi (cheapest models work). With access, a user could display anything on any specific monitor and also see what was being displayed.

We added multiple features, including:
- User generation via Admin account and login (password hashed and salted)
- Support for all media types, including audio, video, gifs, and images
- Scheduling of media and independent control of each monitor
- Operation on an intranet
- Containerized deployment

This project took several months as we had to create an independent application to display media on RaspiOS. Over the years, we added multiple features and bug fixes.

Check out the project on GitHub: [SmartMonitor](https://github.com/pratikpc/SmartMonitor)