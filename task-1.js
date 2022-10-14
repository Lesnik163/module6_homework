let randomArr = [3, 56, ,null, "надоело выдумывать строки",0, NaN,0, {name:"Dmytri"}, 28,0];
function countOddEvenZeroElements() {
    let odd = 0;
    let even = 0;
    let zeroQuantity = 0;
    randomArr.map((elem,ind,arr)=>{
        if (typeof elem == 'number') {
            if (elem) {
              if (elem % 2 == 0) {
                even += 1;
              } 
              else if (elem % 2 != 0) {
                odd += 1;
                }  
              }  
        }
        if (arr[ind] == 0) {
            zeroQuantity += 1;
        }
    })
    console.log(`Количество чётных элементов = ${even}`);
    console.log(`Количество нечётных элементов = ${odd}`);
    console.log(`В массиве присутствует ${zeroQuantity} нуля`);
}
countOddEvenZeroElements();