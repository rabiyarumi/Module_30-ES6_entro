// normal type
const firstName = 'Sidra';
const lastName = 'Saouda';
const fullName1 = firstName +  lastName; //wrong
const fullName2 = firstName + "" + lastName; //wrong
const fullName3 = firstName + " " + lastName; //hard to write
console.log(fullName1, fullName2, fullName3);

//Dynamic type
const fullName4 = `${firstName} ${lastName}`
console.log(fullName4)

//--------------doimg math--------------\\

//normal type
const a =10;
const b = 20; 
const result = "the sum of the number " + a + " and " + b + " is " + (a+b);
console.log(result);

//dynamic type
const value = `the sum of the number ${a} and ${b} is ${a + b}`;
console.log(value);

//--------------Line break--------------------\\
//normal type
const email = 'Hi john \n' + 
'cena cena lage \n'+
'tumi mara mari korba naki'
;
console.log(email)

//dynamic type

const challenge = `John Cena
cena naki ochena
mair dimu prochur`;
console.log(challenge)

//---------object with dynamic-----------\\
const numbers = [45, 48, 98,78]
const math = `The sum of ${numbers[0]} and ${numbers[3]} is ${numbers[0] + numbers[3]}`
console.log(math);

const student = {name: 'john ochena', age: 5}
const sum = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`
console.log(math)
console.log(sum)