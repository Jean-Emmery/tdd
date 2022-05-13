export class StringCalculator {
    add(str) {
        const firstPart = str.split('\n')[0];
        let delimiters = [];

        if (firstPart && firstPart.includes('//')) {
            str = str.replace(firstPart + '\n', '');

            delimiters = firstPart
                        .replace('//', '')
                        .split('][')
                        .map((char) => char.replace('[', '').replace(']', ''));
        }

        delimiters.forEach((del) => {
            str = str.replaceAll(del, ',').replace('//', '');
        });

        str = str.replace('\n', ',');

        const numbers = str.split(',');
        const negatives = numbers.filter((n) => +n < 0);
        if (negatives.length >= 1) {
            throw Error(`Negatives not allowed ${negatives}`);
        }

        return numbers.reduce((acc, i) => {
            if (i >= 1000) {
                return acc;
            }
            return +acc + +i;
        }, 0);
    }
}
