let student = {
    id : 101,
    name : "Aniket",
    age : 25,
    course : "python full stack",
    fees : 25000
}

console.log(student);
console.log(student.name);
console.log(student.course);

user = new Object();
user.username = "Aniketlahase20";
user.pass = "123456";
user.age = 45;
user.city = "pune"

console.log(user);

// constructor function 
 
function emp(id,name,dept){
    this.id = id
    this.name = name 
    this.dept = dept
}

e1 = new emp(101,"aniket","IT");

e2 = new emp(102,"om","computer");

console.log(e1);
console.log(e2);

student = {
    id : 101,
    name : "Aniket",
    age : 25,
    course : "python full stack",
    fees : 25000
}

// update
student.fees = 40000;
student.age = 23;

console.log(student);

// new value
student.city = "pune";
console.log(student);

// delete 
delete student.age;
console.log(student);

student = {
    id : 101,
    name : "Aniket",
    age : 25,
    course : "python full stack",
    fees : 25000,
    study : function(){
        console.log("student is studying")
    } 
}


console.log(student);
student.study();

bankAccount = {
    acHolderName : "Aniket Lahase",
    balc : 45000,

    deposit(amount){
        this.balc+=amount

    },

    withdraw(amount){
        this.balc-=amount
    },

    info(){
        console.log("Name : ",this.acHolderName);
        console.log("Balance : ",this.balc)
    }

}

bankAccount.deposit(5000);
bankAccount.info();

bankAccount.withdraw(40000);
bankAccount.info()


emp = {
    id : 101,
    name : "Aniket Lahase",
    add : {
     city : "pune",
     state : "MH",
     pincode : 425327

    }
}

console.log(emp);
console.log(emp.add.city);
emp.add.area = "shivaji nagar";
console.log(emp);


// array of object 

student = [
    {
        id : 101,
        name : "Aniket Lahase",
        city : "pune",
        age : 24
    },
     {
        id : 102,
        name : "om patil",
        city : "mumbai",
        age : 22
    },
     {
        id : 101,
        name : "vaibhav patil",
        city : "nashik",
        age : 21
    },
     {
        id : 101,
        name : "rahul hivre",
        city : "pune",
        age : 24
    }
]

console.log(student);
console.log(student[0]);
console.log(student[3].name);


student = {
    id : 101,
    name : "Aniket",
    age : 25,
    course : "python full stack",
    fees : 25000
}

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// for in 
for(let data in student){
    console.log(data, student[data])
}



student = [
    {
        id : 101,
        name : "Aniket Lahase",
        city : "pune",
        mark : 56
    },
     {
        id : 102,
        name : "om patil",
        city : "mumbai",
        mark : 75
    },
     {
        id : 101,
        name : "vaibhav patil",
        city : "nashik",
        mark : 65
    },
     {
        id : 101,
        name : "rahul hivre",
        city : "pune",
        mark : 57
    }
]


filterStudent = student.filter(function(x){
    return x.mark > 70
})

console.log(filterStudent);

newStudent = student.map(function(student){
    return student.mark
})

console.log(newStudent);

num = [1,2,3,4,5];

sqrt = num.map((num) => num*num);
console.log(sqrt)

