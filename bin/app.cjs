#! /usr/bin/env node
const generator = require("../dist/TextArt.js")

let args = process.argv.slice(2)

switch (args.length) {
  case 1:
    console.log('\n' + generator.fonts['Anbani Block Regular'].generate(args[0]))
    break;

  case 2:
    try {
      console.log('\n' + generator.fonts[args[1]].generate(args[0]))
    } catch (error) {
      console.log("Please enter proper font key as your second argument from:\n", generator.keys, '\n', error)      
    }
    break;

  default:
    console.log('\n' + generator.fonts['Anbani Block Regular'].generate('გამარჯობა'))
    console.log('\n' + generator.fonts['Anbani Block Small'].generate('Anbani.ge/TextArt'))
    break;
}