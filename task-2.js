function isPrimeNumber(num) {
    let test;
    if (num <= 1000) {
        if (num >= 0 && num <= 1) {
            test = 'Вы ввели натуральное число меньше двух - оно не может быть простым';
        }
        else if (num == 2) {
            test =  'число  является простым числом';
        }
        else if (num > 2) {
            test =  'число  является простым числом';
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    test =  'число не является простым числом';
                }   
            } 
        }
        else if (num < 0) {
            test = 'Введёные данные не верны';//не все знают, что отрицательные числа не могут быть простыми - это для них проверка!
        }   
    }   
    else{
        test = 'Введёные данные не верны';
    } 
    return test;   
}
console.log(isPrimeNumber());
