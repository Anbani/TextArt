import textArt from '../src/TextArt.mjs';
import assert from 'assert';

describe('ESM module testing', function () {

  describe('Font Metadata and Rendering', function () {
    for (let [fontKey, font] of Object.entries(textArt.fonts)) {
      describe(`font ${fontKey}`, function () {

        it(`should have title property`, function () {
          assert.ok(font.title)
        });

        it(`should have author property`, function () {
          assert.ok(font.author)
        });

        it(`should have generate method`, function () {
          // console.log(font.constructor.name)
          assert.ok(typeof font.generate === 'function')
        });

        it(`should have generate method implemented`, function () {
          assert.ok(font.generate("გამარჯობა"))
        });

      });
    }
  });

  
});
