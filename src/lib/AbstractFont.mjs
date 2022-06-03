export default class AbstractFont {
  constructor(title='', author='') {
    if (this.constructor == AbstractFont) {
      throw new Error('Object of Abstract Class cannot be created');
    }

    this.title = '';
    this.author = '';
  }

  generate(text) {
    throw new Error('Abstract Method has no implementation');
  }

  info() {
    return {
      'title': this.title,
      'author': this.author,
    };
  }
}

