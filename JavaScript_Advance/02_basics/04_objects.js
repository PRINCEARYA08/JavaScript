// const tinderUser = new object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false



// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"prince",
            lastname:"arya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c", 4:"d"}
const obj4 ={5:"e", 6:"f"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 ={...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email:"P@gmail.com",
    },
    {
        id: 1,
        email:"P@gmail.com",
    },
    {
        id: 1,
        email:"P@gmail.com",
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename:"JavaScript in hindi",
    price:"777",
    courseInstuctor:"hitesh"

}

// course.courseInstructor

// const {courseInstuctor}= course
const {courseInstuctor: instructor}= course

// console.log(courseInstuctor);
console.log(instructor);

{
    // "name": "prince",
    // "coursename": "javascript",
    // "price": "free"
}

[

{},
{},
{}
]