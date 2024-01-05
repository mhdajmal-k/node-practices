// // settimeout(()=>{
// // console.log("settimeout")
// // },2000)

// // setTimeout(()=>{
// // console.log("setTimeOut")
// // },2000)

// setInte=setInterval(()=>{
//     console.log("heloo")
// },3000)

// setTimeout(()=>{
// clearInterval(setInte)
// },10000)


// const obj={
//     name:"muhammed ajmal k",
//     age:22
// }

// console.log(obj);
// obj.city="koduvally"
// obj.name="changed"
// console.log(obj);

// // Object.freeze(obj)
// Object.seal(obj)

// obj.adding="its added"
// console.log(obj)
// obj.city="changing"
// console.log(obj)


// class person{
//    constructor(name,price){
//     this.name=name;
//     this.price=price;
//    }
//    dispaly(){
//     console.log(`produce:${this.name} ${this.price}`)
//    }

//    calculate(sale){
//     return console.log(sale)
//    }


// }

// const product1=new person("muhammed ajmal",21)
// const product2=new person("hleoo",55)

// product1.dispaly()
// product2.dispaly()
// product1.calculate(55)\


class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    display(){
        console.log(`${this.name} was${this.age}`)
    }
}


class extra extends Person{
    dis(){
        console.log("i am a extends class")
    }
}

const person1=new Person("muhammed ajmal k",22)
const person2=new extra("extra",22)

person2.display()
person2.dis()



person1.display()
