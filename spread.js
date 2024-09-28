//to show the biggest number
const max = Math.max(6, 23, 45, 1, 89, 23)
console.log(max); 

const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// const arrayMax = Math.max(numbers); //wrong
const arrayMax = Math.max(...numbers);
console.log(arrayMax)

console.log(numbers) //get the full arrey
console.log(...numbers) // get the number value of array

// use spread operator to copy
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends] // copy
console.log(dosto)

friends.push(100)
console.log(bondhu)
console.log(friends)
console.log(dosto)


// advanced 
const sonkha = [...friends, 9999] // add extra elements while copy
console.log(sonkha)