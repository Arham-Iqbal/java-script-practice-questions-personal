const obj1={
    name:"Arham",
    Age:20,
    email:"iarham924@gmail.com"   // if it has been written like this "email":"iarham924@gmail.com"  then we cannot access it using . operator we have to use "email is ",obj1["email"]);
};
console.log("Name is ",obj1.name);
console.log("email is ",obj1["email"]);
console.log('hello ji  ,${this.name}');
console.log(`hello ji, ${obj1.name}`);
console.log(`hello ji, ${this.name}`);
