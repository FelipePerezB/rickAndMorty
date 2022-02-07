const rest = (num1,num2) => num1 - num2
const calc = (num1,num2,callback) => callback(num1,num2)
console.log(calc(2,2,rest))


function date(callback){
    console.log(new Date)
    setTimeout(
        function(){let date = new Date;callback(date)}
        ,3000
)}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)