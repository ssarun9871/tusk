//First example for call, bind and apply
let obj = {num:2};
var addToThis = function(a){
return this.num + a;
}

var addToThisMultiple = function(a,b,c){
    return this.num+a+b+c;
}

console.log(addToThis.call(obj,3));
console.log(addToThisMultiple.call(obj,2,3,4));

let arr=[2,3,4];
console.log(addToThisMultiple.apply(obj,arr));

let add = addToThis.bind(obj,3);
add()

let add2 = addToThis.bind(obj);
add(33);





//Second example for call, bind and apply
let user={
    firstName: "arun",
    lastName: "kumar"
}

let employee = {
    firstName:"harry",
    lastName:"botson"
}

function getEmail(){
    let email =`${this.firstName}${this.lastName}@gmail.com`;
    console.log(email);
    return this.email = email;//this will add a email property having in given object
}

getEmail.call(user);
getEmail.call(employee);

function chooseSubject(sub1,sub2){
 console.log(`${sub1} ${sub2}`);
}

chooseSubject.call(user,"maths","english");
chooseSubject.apply(user,["maths","english"]);

let bind = email.bind(user);

bind();



//Question 4
let student = {
    age:20
}
function getAge(){
    console.log(this.age);
}

let printAge = getAge.bind(student);

printAge();




/*Function Currying using bind*/
let multiply = function (x,y){
    console.log(x*y);
}

//method 1
let multiplyByTwo = multiply.bind(this,2)//x become fixed i.e. 2
multiplyByTwo(4);//here we are pasing y

//method 2
let multiplyByTwo = multiply.bind(this,2,3);//(this,x,y)
multiplyByTwo();


//method 3
let multiplyByTwo = multiply.bind(this);
multiplyByTwo(2,3);//(x,y)


/*Function Currying using Closure*/
let multiplyFunction = function(x){
    return function(y){
        console.log(x*y);
    }
}
    
let multiplyByTwo = multiplyFunction(3);
multiplyByTwo(2);
