//-----------------activating strict mode for error detection----------------------------


'use strict';

//------------------------------functions----------------------------


// function expenditureCalc(previous, current){
//     console.log(`your previous balance is ${previous} and current balance is ${current}`);
//     const balance = previous - current;
//     return balance;
// }
// const prev = prompt('Enter previous balance:');
// const curr = prompt('Enter current balance:');
// const expenditure = expenditureCalc(prev, curr);
// console.log(`This is your expenditure ${expenditure}`);


//------------------------finction that takes no parameters---------------------


// function marks(){
//     console.log(`Average marks for the students is 345`);
// }
// marks()


//---------------------function declaration----------------------
//------------------------------we can use either----------------
//----------.declararions can be called before funcction inititalization-------------


// const age = ageFinder(1999);
// console.log(age);

// function ageFinder(birthYear){
//     return 2022-birthYear;
// }


//-------------------------------------function expression-------------------------


// const ageCalc = function (birthdate){
//     return 2022 - birthdate;
// }

// const myAge = ageCalc(1999);
// console.log(myAge);


//------------------------arrow functions-----------------------------------------


// const ageFinder = birthYear => 2021 - birthYear;
// const myAge = ageFinder(1999);
// console.log(myAge);


// const emailGen = myname => `${myname}@gmail.com`;
// const myEmail = emailGen('janetmutua');
// console.log(myEmail);


//----------------more complex arrow funcions------------


// const retirementAge = (birthDate, firstName) => {
//     const age = 2021 - birthDate;
//     const retire = 65 - age;
//     return `${firstName} will retire in ${retire} years`;
// }

// const findRetirement = retirementAge(1999, 'Janet');
// console.log(findRetirement);


//---------------------------functions calling other functions--------------------