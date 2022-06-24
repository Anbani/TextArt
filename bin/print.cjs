#! /usr/bin/env node
const textArt = require("../dist/TextArt.js")

for (let key of textArt.keys){
  console.log(key)
  console.log(textArt.generate(key, "აბგდევზთიკლ"))
  console.log(textArt.generate(key, "მნოპჟრსტუფქ"))
  console.log(textArt.generate(key, "ღყშჩცძწჭხჯჰ"))
  console.log(textArt.generate(key, "ჱჲჳჴჵჶჷჸჹჺ"))
  console.log('\n')
  console.log(textArt.generate(key, "ABCDEFGHIJKLM"))
  console.log(textArt.generate(key, "NOPQRSTUVWXYZ"))
  console.log('\n')
  console.log(textArt.generate(key, "ႠႡႢႣႤႥႦႧႨႩႪ"))
  console.log(textArt.generate(key, "ႫႬႭႮႯႰႱႲႳႴႵ"))
  console.log(textArt.generate(key, "ႶႷႸႹႺႻႼႽႾႿჀ"))
  console.log(textArt.generate(key, "ჁჂჃჄჅ჆Ⴧ჈჉჊"))
  console.log('\n')
  console.log(textArt.generate(key, "1234567890"))
  console.log(textArt.generate(key, "!?_.,-/"))
}