// creating object

Student={

    name :"Arham",
    Id :564,
    details:function(){
        console.log("sare bacche")
    }
}
// console.log(Student)
// console.log(Student.name)
// console.log(Student.Id)

//factory function

function createStudent ()
{
    const Student ={
        name:"Arham",
        Id:56499,
        details()
        {
            console.log("Sare students")
        }
    };
    return Student ;
    }
// let obj1=createStudent()
// console.log(obj1)
// console.log(obj1.Id)
// console.log(obj1.details())

//constructor function

function Createstudents(name,id)
{
    this.name=name
    this.id=id
    this.details=function()
    {
        console.log("sare students")
    }
}

// obj2=new Createstudents("Jaypeeyapaam",99788)
// console.log(obj2)
// console.log(obj2.details())
// obj3=new Createstudents("anamanana",877667)
// obj3.Gender="male"
// console.log(obj3)

let x=8
let y=x
x++
console.log(x)
console.log(y)

let a={name:6}
b=a
a.name++
console.log(a)
console.log(b)
