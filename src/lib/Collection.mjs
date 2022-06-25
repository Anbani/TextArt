import SampleFont from '../fonts/SampleFont/SampleFont.mjs';
import BlockFont from '../fonts/BlockFont/BlockFont.mjs';
import LineFont from '../fonts/LineFont/LineFont.mjs';
import BlockFontDefs from "../fonts/BlockFont/BlockFontDefinitions.mjs"
import LineFontDefs from "../fonts/LineFont/LineFontDefinitions.mjs"


const fonts = [
  new BlockFont(`Anbani Block Regular`, BlockFontDefs),
  new BlockFont(`Anbani Block Small`, BlockFontDefs),
  new LineFont(`Anbani Lines Double`, LineFontDefs),
  new LineFont(`Anbani Lines Thin`, LineFontDefs),
  new LineFont(`Anbani Lines Light`, LineFontDefs),
  // new BlockFont(`Anbani Block Rounded`),
  
  new SampleFont(),
];


const collection = {};

fonts.forEach((font) => {
  collection[font.title] = font;
});

export default collection;
