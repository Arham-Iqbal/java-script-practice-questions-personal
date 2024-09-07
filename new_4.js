//simple function
function sum()
{
    return 1+2
}
console.log(sum())

//parameter function

function sum1(num1,num2)
{
    return num1+num2
}
console.log(sum1(1,2))
let add=sum
console.log(add())

function summed(num1,num2,...args)
{
   console.log(args)
}
summed(1,2,3,4,5,6,7,8,9)
