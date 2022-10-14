// let a=3; Расскоментируй для проверки!
// let b=23;
function takeArgGiveSum(num1) {      
    return function(num2){    
        return(num1+num2);
    }
}
const equalReturnFunc = takeArgGiveSum(a);      
console.log(equalReturnFunc(b));   