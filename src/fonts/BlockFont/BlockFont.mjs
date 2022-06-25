import AbstractFont from '../../lib/AbstractFont.mjs';

export default class BlockFont extends AbstractFont {
    constructor(fontKey, fonts) {
        super();

        this.fontKey = fontKey;

        const file = fonts[fontKey]

        this.font = {};
        this.height = file.height
        this.title = file.title;
        this.author = file.author.name;

        file.font.forEach((element) => {
            this.font[element.letter] = this.buildLetter(element.art);
        });

        this.font[' '] = ' \n'.repeat(this.height)
    }

    buildLetter(art) {
        const lines = art.split('\n').slice(1, 1 + this.height);
        const maxLength = lines.map((letterStr) => letterStr.length).sort().slice(-1)[0];
        const paddedLines = lines.map((letterStr) => letterStr.length < maxLength ? letterStr + ' '.repeat(maxLength - letterStr.length) : letterStr);
        const trailingLeft = paddedLines.map((letterStr) => letterStr.length - letterStr.trimStart().length).sort((a, b) => a - b)[0];
        const trailingRight = paddedLines.map((letterStr) => letterStr.length - letterStr.trimEnd().length).sort((a, b) => a - b)[0];
        const trimmedLines = paddedLines
            .map((letterStr) => letterStr.substring(trailingLeft))
            .map((letterStr) => letterStr.substring(0, letterStr.length - trailingRight));

        const trimmedLetter = trimmedLines.join('\n');

        return trimmedLetter;
    }


    generate(text, separator=' ') {
        text = text.toUpperCase()
        const letters = text.split('').map(
            (l) => l in this.font
                ? this.font[l].split('\n')
                : '\n'.repeat(this.height).split('\n')
        );

        let wordArt = '';
        for (let j = 0; j < letters[0].length; j++) {
            for (let i = 0; i < letters.length; i++) {
                wordArt += letters[i][j] + separator;
            }
            wordArt += '\n';
        }

        return wordArt;
    }
};
