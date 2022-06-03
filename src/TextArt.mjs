import collection from './lib/Collection.mjs';

let generator = {
  fonts: collection,
  keys : Object.keys(collection),
  generate : (fontKey, text) => { return collection[fontKey].generate(text) }
}

export default generator;
