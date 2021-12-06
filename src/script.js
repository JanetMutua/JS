//let firstName = 'Janey';
//let $lastName = 'Mutua';
//let PI = 3.142;
//console.log(firstName, $lastName);
//console.log(PI);


//best practise is to use const to declare variables

//const firstJob = 'Andela';
//const secondJob = 'Microsoft';

//console.log(firstJob, secondJob);

//console.log(40 + 23 + 2 / 10);

//const age = 2021 - 1999;
//console.log(age);

//concatenation

//const $first = 'Janet';
//const $second = 'Mutua';
//console.log($first + ' '+ $second);

//const user_name = 'unique';
//const password = 'hidden text';
//console.log('your username should be '+ user_name + ' and your pass should be '+ password);


//coding challenge 1
// test data 1:

//const mark_weight = 78;
//const mark_height = 1.69;
//const john_weight = 92;
//const john_height = 1.95;
//const mark_bmi = mark_weight/ mark_height ** 2;
//const john_bmi = john_weight/ (john_height * john_height);
//console.log(mark_bmi, john_bmi);
//const markHigherBmi = mark_bmi > john_bmi;

//console.log(markHigherBmi)


//template literals
//using back ticks

//const fName = 'Janet';
//const sName = 'Ledra';
//const occupation = 'Developer';

//console.log(`my name is ${fName} ${sName} and i am a ${occupation}`)

//can also be used with normal strings

//console.log(`hey everyone i like using Vs code you know`)

//can also be used for multiple lines

//console.log(`hey
//please check your admin
//panel and your a/c
//balances`
//)

//if else statements
//control structures

//const my_age = 12;
//const legalAge = 18;
//if (my_age >= legalAge){
//  console.log(`you are legible for a driving license.`)
//} else{
//  console.log(`you are not legible for a driving license. Wait for ${legalAge - my_age} years`)
//}

//second if statement example
// logging variables

//const birthYr = 1990;
//let century;
//if (birthYr< 2000){
//    century = 20;
//    console.log(`${century}th century`);
//}else{
//    century = 21;
//    console.log(`${century}th century`)
//}

// coding challenge 2

//const mark_mass = 92;
//const marks_height = 1.95;
//const john_mass = 78;
//const johns_height = 1.69;
//const marks_bmi = mark_mass/ marks_height ** 2;
//const johns_bmi = john_mass/ (johns_height * johns_height);
//if (marks_bmi > johns_bmi){
//    console.log(`Mark's BMI ${marks_bmi} is higher than John's ${johns_bmi}`)
//}else{
//    console.log(`John's BMI (${johns_bmi}) is higher than Mark's (${marks_bmi})`)
//}


//type conversion 

//const ages = '19';

//console.log(Number(age) - 6)
//const sex = 45
//console.log(String(sex)+ 'sex')

//type coersion

//console.log(3 + 4 -6 +7 -'3')
//console.log(23 - 4 -7 + '1')

//truthy and falsy

//const age = 0;
//const time = undefined;
//const myName = '';
//const town = 'Me';
//const city = 23;
//console.log(Boolean(age));
//console.log(Boolean(time));
//console.log(Boolean(myName));
//console.log(Boolean(town));
//console.log(Boolean(city));


//const money = 0;
//if (money) {
//    console.log('Go for shopping')
//}else(console.log('You have no money'))
//const moneyBalance = 40;
//if (moneyBalance === 23) {
//    console.log('Correct number')
//}else  if(moneyBalance === 34){
//    console.log('Correct number')
//}else(console.log('Try again later'))


// coding challenge 3

// const minScore = 100;
// const dolAvg = (97 + 112 + 101)/3;
// const koalaAvg = (109 + 95+ 106)/ 3;
// const dolWins = dolAvg > koalaAvg;
// const koalaWins = koalaAvg > dolAvg;
// const draw = koalaAvg === dolAvg;

// if(dolWins && dolAvg >= minScore){
//     console.log('Dolphin team won!');
// }else if(draw && dolAvg > minScore && koalaAvg > minScore ){
//     console.log('The teams have drawn!');
// }else if (koalaWins && koalaAvg >= minScore){
//     console.log('Koala team won!');
// }else {
//     console.log('No team won!');
// }

//const day = prompt('Enter day:')

// switch(day){
//     case 'Monday':
//         console.log('Create food videos');
//         console.log('Code a system');
//         console.log('Do my project');
//         break;
//     case 'Tuesday':
//         console.log('Go for coding event');
//         console.log('Watch a show');
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log('Work on my code');
//         break;
//     default:
//         console.log('Not a valid day')
// }

// if (day === 'Monday'){
//     console.log('Create food videos');
//     console.log('Code a system');
//     console.log('Do my project');
// }else if (day === 'Tuesday'){
//     console.log('Go for coding event');
// }else if(day === 'Wednesday' || day === 'Friday'){
//     console.log('Work on my code');
// }else if(day === 'Thursday'){
//     console.log('Work on my project');
// }else {
//     console.log('Invalid day')
// }


//ternary operators
//they are an expression since they give a value

// const age = 30;
// age >= 18 ? console.log('Get me some whisky'): console.log('Get me Ribena juice');

// //using it to comnditionally declare variable:

// const choiceDrink = age >= 18 ? 'Whisky' : 'Ribena';
// console.log(choiceDrink);

// //using it for template literals:

// console.log(`I like to drink ${age>=18?'wine':'water'}`)


const bill = 275
const bill2 = 40
const tip = bill >= 50 && bill <=300 ? bill * 0.15: bill * 0.2;
const tip2= bill2 >= 50 && bill2 <=300 ? bill2 * 0.15: bill2 * 0.2;
const final = bill + tip;
const final2 = bill2 + tip2;
console.log(bill, tip, final )
console.log(bill2, tip2, final2 )