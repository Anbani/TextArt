import SampleFont from '../fonts/SampleFont/SampleFont.mjs';
import BlockFont from '../fonts/BlockFont/BlockFont.mjs';

const fonts = [
  new BlockFont(`Anbani Block Regular`),
  new BlockFont(`Anbani Block Small`),
  // new BlockFont(`Anbani Block Rounded`),
  
  new SampleFont(),
];


const collection = {};

fonts.forEach((font) => {
  collection[font.title] = font;
});

export default collection;
