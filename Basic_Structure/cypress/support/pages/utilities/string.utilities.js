export class StringUtilities {
    static getCamelCaseText(text) {
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    static removeSpecialChars(text) {
        return text.replace(/[^A-Z0-9]+/ig, '');
    }

    static removeSpace(text) {
        return text.replace(/\s/g,'')
    }

}
