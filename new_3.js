// // console.log("hello ji")
// // let first_name="Arham "
// // let last_name="Iqbal "
// // let greetings=`hello ${first_name}`
// // console.log(greetings)
// // message="truebaba hai"
// // console.log(message.split())
// // let date=new Date()
// // console.log(date)
// let numbers=[1,2,3,4]
// console.log(numbers)
// numbers.push(4)
// console.log(numbers)
// numbers.unshift(22)
// console.log(numbers)
// numbers.splice(0,0,19)
// console.log(numbers)
// let naam=[{
//     name:"babban",
//     id:12
// },
// {
//     name:"aran",
//     id:22
// }
// ];
// console.log(naam)
// console.log(naam.includes({name:"babban",id:12}))
let num1=[1,2,3]
let num2=[4,5,6]
let combined=num1.concat(num2)
console.log(combined)

let a=[11,22,33]
let b=[22,33,44]
let combined2=[...a,...b]
console.log(combined2)

let numbers=[1,23,44,5]
console.log(numbers.join("_"))

let numbers2=[1,-2,-3,5,7]
console.log(numbers2.filter(value=>value>=0))

//filter method 

let ages=[22,33,55,11,12,17]
let result=ages.filter(ages => ages>=18)
console.log(result)
// function checkadult(ages)
// {
//     return ages>=18
// }

