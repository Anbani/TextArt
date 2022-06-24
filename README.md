# TextArt

Text Art generator by Anbani.ge

## Demo

Play around with the derivative project here ჻ <https://anbani.ge/textart>

Available as an `npx` executable as well!
```bash
npx anbani-textart "ჰელოუ" "Anbani Block Small"
     your text -------^               ^--- optional font key
```
![npx demo](https://gach.ml/assets/projects/textart-vid.gif)


## EZ Quickstart 
Play with this fiddle <https://jsfiddle.net/georgegach/g96dks5p/58/> or create `index.html` file, open in text editor and paste in this code below.
```html
<!DOCTYPE html>
<head>
    <script src="https://cdn.jsdelivr.net/gh/Anbani/TextArt@main/dist/TextArt.js"></script>
</head>
<body>
    <pre id="art"></pre>

    <script>
        window.onload = () => {
            document.querySelector('#art').textContent = window['anbani-textart'].generate(
                'Anbani Block Regular', 
                'გამარჯობა'
            )
        }
    </script>
</body>
</html>
```
Because `<pre/>` tags use `font-family: monospace` fonts by default, the textart will be rendered almost correctly. You could further tweak by adding `line-height: 1.2em` or even better by using `Fira Code` font. 

## Proper Installation

```bash
npm i anbani-textart --save
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

textArt.generate('Anbani Block Small', 'მაინც გავფრინდებით')

▀▀█  ▀█ █▀█ █▀▀ █▝█   ▝█   ▀█ █▀█ ▛▛█ █▀▀▀ █▀█ █▀▀ █▀█ █▀█ ▝▆  █▀█ █▜▛█ 
█▀█   █ █ █ █▀█ █▝█   █▀█   █  ▝█ ▙▌█ █▜▛█ █ █ █▀█ █▄█   █ █▀█ █ █ █▐▌█ 
█▄█ █▄█ █ █ █▄█ █▄█   █▄█ █▄█ █▄█ ▆▄█ █▝▘█ █ █ █▄█ █▄▄ █▄█ █▄█ █ █ █▟▌█ 

textArt.fonts['Anbani Block Regular'].author
// Giorgi Gachechiladze

textArt.fonts['Anbani Block Regular'].contact
// https://github.com/georgegach
```

Alternatively you can import `anbani-textart` in `CommonJS` enviroment as well:

```javascript
const textArt = require('anbani-textart')
```
