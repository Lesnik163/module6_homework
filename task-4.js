let increaseValue =function(start,stop) {
    let currentValue = start;
    let timer = setInterval(()=>{
        console.log(currentValue);
        if (currentValue == stop ) {
            clearInterval(timer)
        }
        currentValue ++;
    },1000)
}
increaseValue(5,15);