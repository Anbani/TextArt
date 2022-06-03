import YAML from 'yaml';
import fs from 'fs';


const fontPaths = [
  "src/fonts/BlockFont/BlockRegular.yml",
  "src/fonts/BlockFont/BlockRounded.yml",
  "src/fonts/BlockFont/BlockSmall.yml"
]

let fonts = {}

for (const fp of fontPaths) {
  let contents = YAML.parse(fs.readFileSync(fp, 'utf8'));
  fonts[contents.title] = contents
}

fs.writeFile(
  'src/fonts/BlockFont/FontDefinitions.js',
  "export default " + JSON.stringify(fonts),
  err => {
    if (err) {
      console.error(err);
    }
  }
);
