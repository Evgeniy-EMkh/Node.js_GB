
// Диапазон, куда попадут числа, указывается при запуске программы (например node index.js 0 100).
// Если простых чисел в диапазоне нет, нужно, чтобы программа сообщила об этом в терминале красным цветом.
// Если аргумент, переданный при запуске, не считается числом — сообщите об этом ошибкой и завершите программу.

import colors from 'colors';

const [firstNum, lastNum] = process.argv.slice(2);

if (Number.isInteger(+firstNum) && Number.isInteger(+lastNum) && +firstNum >= 0 && +lastNum >= 0) {

    let getColor = 1;
    let result = [];

    for (let i = +firstNum; i <= +lastNum; i++) {
        let flag = 1;
        if (i > 2 && i % 2 != 0) {
            for (let j = 3; j * j <= i; j = j + 2) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
            };
        }
        else if (i != 2) flag = 0;

        if (flag == 1) {
            result.push(i);
        }
    };

    if (result.length == 0) {
        console.log(colors.red('В диапазоне нет простых чисел'));
    } else {
        result.forEach((e) => {
            if (getColor == 1) {
                console.log(colors.green(e));
                getColor = getColor + 1;
            } else if (getColor == 2) {
                console.log(colors.yellow(e));
                getColor = getColor + 1;
            } else {
                console.log(colors.red(e));
                getColor = 1;
            };
        })
    };
} else {
    console.log(colors.red('Введенные данные отрицательные или не являются числом'));
};