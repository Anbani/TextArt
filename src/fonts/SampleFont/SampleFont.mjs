import AbstractFont from '../../lib/AbstractFont.mjs';

export default class SampleFont extends AbstractFont {
  constructor() {
    super();
    this.author = 'Anbani.ge';
    this.title = 'Anbani Sample Style';
  }

  generate(text) {
    return '჻' + text.split('').join('჻') + '჻';
  }
};

