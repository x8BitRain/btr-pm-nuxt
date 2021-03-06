---
title: Boeing 787 In Flight Entertainment System Security fun!
description: Digging into the security on the newer IFEs found on the Boeing 787 Dreamliner.
img: preview.png
alt: Boeing 787 In Flight Entertainment System Security fun!
label: NETSEC
author: Dashiell Bell
---

Boeing 787 In Flight Entertainment System Security fun!
=======================================================

##### 12 May 2017


In 2016 a [post from IOActive Labs](http://blog.ioactive.com/2016/12/in-flight-hacking-system.html) showcased how shoddily made and managed Panasonic's In-Flight Entertainment Systems (IFEs) used to be, found in thousands of commercial aircraft the post raised some concerns among the tech savvy frequent flyer, that blog post inspired me to do some digging into the newer IFEs found on newer aircraft such as the Boeing 787 Dreamliner.

<blog-img src="787.png"></blog-img>

###### It's rare to find a Boeing-made IFE in their planes, you're most likely to find a Panasonic IFE such as the Panasonic EX3. ([Source](http://www.boeing.co.uk/products-services/blog/commercial-airplanes/787.page))

I was on a Scoot Airlines flight from Singapore on one of their 787 Dreamliners when I was handed an access code to their in flight movies page by a stewardess, she told me to access it by connecting to the on board WiFi and going to http://scootwifi.com/. This domain doesn't exist outside the aircraft so they set up a DNS server on the plane to allow passengers to access the site with that URL.

<blog-img src="1.jpg"></blog-img>

I was using a Chromium on a laptop with Ubuntu to access the site, so naturally the flash player on the site didn't work. Why are they still using flash? Oh, god.

I started poking around the site's source to find any interesting directories or domains on the plane but the only ones I could find 403'd when attempting to access them, not bad. I noticed a packet being received by the browser every few seconds called [flightstatus](https://github.com/x8BitRain/InFlightEntertainment-Scoot787/blob/master/flightstatus), it's a JSON file with a bunch of aircraft statistics and values.

<blog-img src="2.jpg"></blog-img>

This file includes a bunch of interesting values such as:

> td\_id\_decompression: "0"

Not sure whether this indicates whether the cabin is pressurized or whether or not an uncontrolled decompression has happened, let's hope it never changes to 1 if it is the latter.

> td\_id\_all\_doors\_closed:"1"

Whether or not all the doors are closed.

> td\_id\_flight\_phase:"7"

According to inflight.js, there are 16 different flight phases "CRUISING" being the phase when I found the file. I somehow doubt these phases are set manually because the "FLARE" phase usually lasts a few seconds before touchdown so an on board computer must be able to detect the current phase based on the flight plan or something along those lines.

> FlightPhase: {  
> UNKNOWN: 0,  
> POWER\_UP: 1,  
> ENGINES\_START: 2,  
> TAKE\_OFF\_POWER: 3,  
> ACCELERATING: 4,  
> LIFT\_OFF: 5,  
> CLIMB: 6,  
> CRUISING: 7,  
> DESCENDING: 8,  
> APPROACH: 9,  
> GO\_AROUND: 10,  
> FLARE: 11,  
> TOUCHDOWN: 12,  
> TAXI\_TO\_STOP: 13,  
> ENGINES\_STOP: 14,  
> MAINTENANCE: 15 }

There is also navigational info in this file such as:

> td\_id\_fltdata\_head\_wind\_speed:""  
> td\_id\_fltdata\_mach:"0847"  
> td\_id\_fltdata\_present\_position\_latitude:"80007562"  
> td\_id\_fltdata\_present\_position\_longitude:"00107289"  
> td\_id\_fltdata\_time\_at\_destination:"1522"  
> td\_id\_fltdata\_time\_at\_origin:"1522"  
> td\_id\_fltdata\_time\_at\_takeoff:"000305170602"  
> td\_id\_fltdata\_time\_to\_destination:"0201"  
> td\_id\_fltdata\_true\_heading:"0161"  
> td\_id\_fltdata\_wind\_direction:"0286"  
> td\_id\_fltdata\_wind\_speed:"-008"

The only value I could see that was being utilized by the website was the _tdidfltdatatimetodestination_ value which was shown at the top of the scootwifi.com page. This leads me to believe that this data is intended for use in the Flight Attendants Panel or the in-seat IFE system which have the interactive maps to see where the plane is on it's trip.

<blog-img src="3.jpg"></blog-img>

###### Some of the newer IFEs have 3D flight maps which would make use of this data. ([Source](http://edition.cnn.com/2014/02/09/travel/flight-maps-the-newest-airline-moneymaker/))

I saw a file called _[software.js](https://github.com/x8BitRain/InFlightEntertainment-Scoot787/blob/master/software.js)_ that included links to some references to DRM plugins and extensions used for watching movies, for OSX, Windows, iOS, Android and an NPAPI plugin for Chrome.

> softwareLocation.plugin.drm.version = '3.0.1.1'; softwareLocation.plugin.drm.mac.software = 'PanasonicDrmPlugin.dmg'; softwareLocation.plugin.drm.mac.software\_and\_extension = 'PanasonicDrmPlugin\_Extension.dmg'; softwareLocation.plugin.drm.windows.software = 'PanasonicDrmPlugin.msi'; softwareLocation.plugin.drm.windows.software\_and\_extension = 'PanasonicDrmPlugin\_Extension.msi'; softwareLocation.plugin.flash.version = '11.5'; softwareLocation.plugin.flash.mac = softwareLocation.plugin.flash.mac; softwareLocation.plugin.flash.windows.activex = softwareLocation.plugin.flash.windows.activex; softwareLocation.plugin.flash.windows.npapi = softwareLocation.plugin.flash.windows.npapi; softwareLocation.mobile.ios.shellApp.osVersion = '5'; softwareLocation.mobile.ios.shellApp.sdkVersion = softwareLocation.mobile.ios.shellApp.sdkVersion; softwareLocation.mobile.ios.shellApp.appVersion = softwareLocation.mobile.ios.shellApp.appVersion; softwareLocation.mobile.ios.shellApp.url = softwareLocation.mobile.ios.shellApp.url; softwareLocation.mobile.android.shellApp.osVersion = '4.0'; softwareLocation.mobile.android.shellApp.sdkVersion = '01.03.0.34'; softwareLocation.mobile.android.shellApp.appVersion = '01.03.0.34'; softwareLocation.mobile.android.shellApp.url = 'ScooTVMediaPlayer.apk';

This is a questionable approach to digitally restricting the movies available because you aren't told exactly what you're going to install other than it will make the movie you want to watch play, it could be something along the lines of the [Sony Anti-Piracy Rootkit](https://en.wikipedia.org/wiki/Sony_BMG_copy_protection_rootkit_scandal) for all I know. Not to mention that NPAPI plugins for Chrome have been depreciated since January of 2014 because of security reasons. I was never prompted to download or install any of these "extensions" nor could I craft a link to download them myself so I couldn't do any digging into what exactly was being installed (most likely [ExpressPlay's Marlin DRM](https://www.panasonic.aero/2015/02/24/panasonic-avionics-selects-intertrusts-expressplay-marlin-drm-techology-x-series-inflight-entertainment-ife-platform/)), why not just use [WideVine](http://www.widevine.com/) which is built into most browsers?

<blog-img src="4.jpg"></blog-img>

A really cool part of the whole system was how the page would fade into this announcement screen whenever the captain had something to say and fade back to the previous page.

In hindsight it is really not a good idea to be screwing with aircraft equipment like this, please don't be an idiot like me.  

A basic port scan shows that:

*   Ports 80 and 443 are running NGINX 1.10 with a DigiCert SSL certificate for api.airpana.com.
*   Port 5710 is running _something._
*   Ports 58000 and 58001 are running lighttpd with a DigiCert SSL certificate for streaming.inflightpanasonic.aero.
*   The estimated OS running on the IFE server was Linux 3.2 - 4.6 (previous IFEs used Linux versions from 2002).

This is pretty decent considering how horribly outdated some of the older IFEs are, I once flew in a Malaysian Airlines 767 with an IFE that showed Linux version 2.4 from 2002.

Final Thoughts
==============

I think the browser based approach to the IFE is a much better way of giving people something to do during flights because just about everyone has a smartphone or laptop nowadays, those in-seat systems with those horrible capacitive touch screens that freeze at any given moment are better off being a relic of the past.

The use of newer software to power the back end is a welcome addition as older software can contain serious vulnerabilities and could potentially lead to the cabin system being vulnerable. However, I think the flash player and the dodgy implementation of DRM could be done without, especially the depreciated NPAPI method of enabling it, the biggest problem being that I don't know exactly what I'm installing when they prompt me to download their plugins or their apps. Does it collect data? Does it it install root certificates I don't want? Will it screw with my browser? Some transparency would be nice, but even nicer would be to use something that doesn't need to be installed via an .MSI/.DMG file like WideVine which already exists in Chrome.


