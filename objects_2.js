console.log("neww");
const userName={
    Name:"Arham",
    email:"sghjsbvbv",
    phonenum:9654,
    ed:{
        school:"jvm",
        college:"amity",
    }

}
const userName2={
    name:"saman",
    Email:"sgsghsh",
    phonenum1:7287298,
    ed1:{
        school:"Jvm",
        college:"amity",

    }
}


// console.log(userName);
// console.log(userName2);
const obj={...userName,...userName2};
console.log(obj)