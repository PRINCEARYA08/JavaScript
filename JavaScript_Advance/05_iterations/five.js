const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, array)=>{
// console.log(item, index, array);
// })

const myCoding =[
    {
        languageName:"javascript",
        languagefileName:"js"
    },
    {
        languageName:"java",
        languagefileName:"java"
    },
    {
        languageName:"python",
        languagefileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})

// myCoding.forEach((item)=>{
//      console.log(`${item.languageName} and there file name is ${item.languagefileName}`)
// })