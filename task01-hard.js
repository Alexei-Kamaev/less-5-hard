'use strict';
{
//решается алгоритмом Евклида
function calculateOns(a, b) {
    let result = a / b;
    let ostatokResult = a - b * Math.trunc(result);
    if (a % b != 0) {
        calculateOns (b, ostatokResult);
     } else console.log(`Общий наибольший делитель ${b}`);
}
const oneNumber = +prompt('Первое число:');
const twoNumber = +prompt('Второе число');
Number.isNaN(oneNumber) || Number.isNaN(twoNumber) ? console.log ('Повторите ввод данных. Ошибка') : calculateOns(Math.max(oneNumber, twoNumber), Math.min(oneNumber, twoNumber));
}