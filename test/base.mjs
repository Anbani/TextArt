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

  describe('Braille alignment', function () {
    it('braille fonts emit the blank braille cell instead of ASCII spaces', function () {
      const out = textArt.generate('Anbani Braille', 'ანბანი');
      assert.ok(/[⠁-⣿]/.test(out), 'expected braille glyphs in the output');
      assert.ok(!/ /.test(out), 'expected no ASCII spaces in braille output');
    });

    it('non-braille fonts keep ASCII spaces', function () {
      const out = textArt.generate('Anbani Block Regular', 'ა ბ');
      assert.ok(/ /.test(out), 'expected ASCII spaces in block output');
    });
  });

  describe('Cross-Stitch font', function () {
    it('is available and renders supported scripts and punctuation', function () {
      assert.ok(textArt.keys.includes('Anbani Cross-Stitch'));

      for (const glyph of 'აႠA1჻/!?._-') {
        const out = textArt.generate('Anbani Cross-Stitch', glyph);
        assert.match(out, /[×·]/, `expected stitches for "${glyph}"`);
        assert.strictEqual(out.split('\n').length - 1, 5);
      }
    });
  });

});
