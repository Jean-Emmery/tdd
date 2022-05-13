export const absVal = (n) => {
    return Math.abs(n);
};

export const isEven = (n) => {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

export const removeVowels = (text) => {
    const replace = text.replace(/['aeiouy']/gi, "");

    return replace;
};

export const filterInteger = (array) => {
    return array.filter((e) => {
        if (Number.isInteger(e) && e > 0) {
            return e;
        }
    });
};

export const square = (n) => {
    return n * n;
};

export const sub = (n, m) => {
    return n - m;
};

export const countLetterE = (text) => {
    let nbrE = (text.match(/e/g) || []).length;

    if (nbrE == 0) {
        throw new Error("no e");
    } else {
        return nbrE;
    }
};

export const cesar = (txt, dec) => {
    let resultArr = [];
    for (let i = 0; i < txt.length; i++) {
        let code = txt.charCodeAt(i) + dec;
        while (code > 122) {
            code = code - 26;
        }
        resultArr.push(String.fromCharCode(code));
    }
    return resultArr.join("");
};

export const isLeapYear = (year) => {
    if (!Number.isInteger(year) || year <= 0) throw Error('Not a number');
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
        return true;
    }
    return false;
};
