# 🎢 Always 'Full load' - An OpenRTC2 plugin

Always `Wait for: Full load` before a train departs! (... and other sensible default settings!)

## Overview

This plugin will configure all rides in your park everyday:

 * Wait for: 'Full load'
 * Enable 'Maximum waiting time'
 * Inspection: 'Every 10 minutes'

Also, if a ride has the default RCT2 operating settings:

 * Minimum waiting time: '1seconds'

## Installation

 * Download [dist/full-load.js](https://raw.githubusercontent.com/Unset/full-load/master/dist/full-load.js)
 * Make sure the file extension is `.js`, and not `.js.txt`
 * Place `full-load.js` in `OpenRCT2/plugin` (on Windows this is usually in your Documents folder)
 * (Re)start OpenRCT2
 * Click and hold the map icon. When you see `Always 'Full load'` the plugin is running!

## Note
These 'Full Load' settings match my personal playing style. I made this plugin so that I don't have to edit the settings every new ride. They are not perfect or universal. Feel free to copy the source code and make some changes! 

## Develop
This is based on a template, see [openrct2-typescript-mod-template](https://github.com/wisnia74/openrct2-typescript-mod-template) for instructions on how to develop with hot reloading. MIT Licensed.
