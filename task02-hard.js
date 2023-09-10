'use strict';


//решается через модуль чисел
{
    const oneNumber = +prompt('Введите первое число:');
    const twoNumber = +prompt('Введите второе число:');
    Number.isNaN(oneNumber) || Number.isNaN(twoNumber) ?
    console.log ('Повторите ввод данных. Ошибка') :
    console.log(`Наименьшее число из ${oneNumber} и ${twoNumber} является число: ${searchMin(oneNumber, twoNumber)}`);
    function searchMin(a, b) {
        return((a+b - Math.abs(a-b)) / 2);
    }
}