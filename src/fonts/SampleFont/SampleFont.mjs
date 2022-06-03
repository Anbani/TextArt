import AbstractFont from '../../lib/AbstractFont.mjs';

export default class SampleFont extends AbstractFont {
  constructor() {
    super();
    this.author = 'Giorgi Gachechiladze';
    this.title = 'Anbani Sample Font';
  }

  generate(text) {
    return '჻' + text.split('').join('჻') + '჻';
  }
};

