import textArt from '../src/TextArt.mjs';
import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


input.question("Input text to draw\n> ", response => {

  for (let [fontKey, font] of Object.entries(textArt.fonts)) {
    console.log(font.generate(response))
    console.log()
  }

  input.close()
})