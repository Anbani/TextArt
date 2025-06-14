import YAML from 'yaml';
import fs from 'fs';


function convert_yaml_to_json(savePath, fontPaths) {
  let fonts = {}

  for (const fp of fontPaths) {
    let contents = YAML.parse(fs.readFileSync(fp, 'utf8'));
    fonts[contents.title] = contents
  }
  
  fs.writeFile(
    savePath,
    "export default " + JSON.stringify(fonts),
    err => {
      if (err) {
        console.error(err);
      }
    }
  );
}


convert_yaml_to_json(
  'src/fonts/BlockFont/BlockFontDefinitions.mjs',
  [
    "src/fonts/BlockFont/BlockBraille.yml",
    "src/fonts/BlockFont/BlockBrailleSmall.yml",
    "src/fonts/BlockFont/BlockRegular.yml",
    "src/fonts/BlockFont/BlockRounded.yml",
    "src/fonts/BlockFont/BlockSmall.yml",
  ]
)

convert_yaml_to_json(
  'src/fonts/LineFont/LineFontDefinitions.mjs',
  [
    "src/fonts/LineFont/LinesDouble.yml",
    "src/fonts/LineFont/LinesThin.yml",
    "src/fonts/LineFont/LinesLight.yml",
  ]
)
