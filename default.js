// default --> if value is not provided, take this as a default.
function add(num1, num2){
    const result = num1 + num2 ;
    console.log(num1, num2, result);
    return  result;
}
// const sum = add(5, 7);
// const sum = add(5);

//here the number2 value will be undefined and NaN
const sum = add(5);
const sum2 = add();

// default --> if value is not provided, take this as a default.
function add(num1 = 99, num2 = 0){
    const result = num1 + num2 + num3;
    console.log(num1, num2, result);
    return  result;
}


//if we ecpect a string value than use empty string without gap as a defoult value
function fullName(first, last =''){
    const full = first + ' ' + last;
    return full;
}

// /if we espect a array value than use empty string
function friends(numbs = []){

}

// /if we ecpect an object value than use empty string
function person(human = {}){
    
}

