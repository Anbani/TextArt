# TextArt

Text Art generator by Anbani.ge

## Installation

```bash
npm i anbani-textart
```

## Usage

```javascript
import textArt from 'anbani-textart';

textArt.keys
// [ 'Anbani Block Regular', 'Anbani Block Small', 'Anbani Sample Style' ]

textArt.generate('Anbani Block Regular', 'გამარჯობა')

  ████   ████▄ ██████  ████▄ ███████   ██   ███████  █▄▄    ████▄ 
    ██      ██     ██     ██ ██      ▀▀██▀▀ ██ █ ██   ██       ██ 
 ██████     ██ ██████     ██ ███████   ▀▀██ ██ ▀ ██ ██████     ██ 
 ██  ██ ▄▄  ██ ██  ██ ▄▄  ██ ██ █ ██ ▄▄  ██ ██   ██ ██  ██ ▄▄  ██ 
 ██████ ██████ ██████ ██████ ██   ██ ██████ ██   ██ ██████ ██████ 

textArt.fonts['Anbani Block Regular'].author
// Giorgi Gachechiladze

textArt.fonts['Anbani Block Regular'].contact
// https://github.com/georgegach
```

Alternatively you can import `anbani-textart` in `CommonJS` enviroment as well:

```javascript
const textArt = require('anbani-textart')
```
