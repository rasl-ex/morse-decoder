const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let x = 0;
    let morse = "";
    let result = "";
    for (let i = 0; i < expr.length / 10; i++) {
        arr[i] = expr.substr(x, 10);

        if (arr[i] == "**********") {
            result += " ";
        } else {
            let str = "";
            for (let j = 0; j < 10;) {
                morse = arr[i].slice(0, 2);
                if (morse == "00") {
                    str += str;
                } else if (morse == "10") {
                    str += '.';
                } else if (morse == "11") {
                    str += '-';
                }
                arr[i] = arr[i].slice(2);
                j = j + 2;
            }
            result += MORSE_TABLE[str];
        }
        x += 10;
    }
    return (result);
}

module.exports = {
    decode
}