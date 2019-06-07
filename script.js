function sum() {

    //Получаем числа для сложения
    const number1 = +document.getElementById("inp1").value;
    const number2 = +document.getElementById("inp2").value;

    //Получаем разрядность числа, js же не умеет нормально складывать дроби
    const exp1 = f(number1);
    const exp2 = f(number2);

    let exp;

    //Выбираем максимальную разрядность
    if (exp1 > exp2) {
        exp = exp1; 
    } else {
        exp = exp2;
    }

    //Выводим корректную сумму
    return alert((number1 * 10**exp + number2 * 10**exp) / 10**exp);

}

//Функция для расчета разрядности, ничего лучше чем определение через строку не придумал
function f(num) {

    let exp = num.toString();

    if (exp.includes(".")) {
       return exp.split(".").pop().length;
    } else {
       return 0;
    }

}