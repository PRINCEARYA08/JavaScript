let array = [1,2,3,4,5,6]

for (let index = 1; index <= array.length; index++) {
    const element = array[index];
    
    // if (index == 2) {
    //     console.log(`The number ${index}`)
    // }
    // else{console.log(index)}
    

    switch (index) {
        case 1:
            console.log("number is ", index)
            break;
        case 2:
            console.log("number is ", index)
            break;
        case 3:
            console.log("number is ", index)
            break;
         case 4:
            console.log("number is ", index)
            break;
             case 5:
            console.log("number is ", index)
            break;
             case 6:
            console.log("number is ", index)
            break;
        default:
            console.log("number is more than", index)
            break;
    }
}