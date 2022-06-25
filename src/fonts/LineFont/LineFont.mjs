import BlockFont from '../BlockFont/BlockFont.mjs';

export default class LineFont extends BlockFont {
    constructor(fontKey, fonts) {
        super(fontKey, fonts);
    }

    generate(text) {
        return super.generate(text, '')
    }
};
