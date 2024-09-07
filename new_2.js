//object creation
Employee={
    name:"suresh",
    id:"123",
    details:function()
    {
        console.log("sare details yaha hai")
    }
}
// console.log(Employee)
// console.log(Employee.details())

//object creation by factory function

function createEmployee()
{
 return  Employee=
    {
        name:"lol",
        id:"1234",
        details:function()
        {
            console.log("factory function")
        }

    }
}


// let obj1=createEmployee()
// console.log(obj1)
// console.log(obj1.details())

//constructor function

function Createmajdoor(name,id)
{
    this.name=name,
    this.id=id,
    this.details=function()
    {
        console.log("constructor function")
    }
}
let obj3=new Createmajdoor("ramu",122332)
console.log(obj3)
console.log(obj3.details())