
// alert and prompt
/*console.log("Hello World!!!");
var firstName, lastName, age;
firstName = 'John';
lastName = 'Miller';
age = 28;
alert(firstName + ' ' + lastName + ' is ' + age + ' years old.');
console.log(firstName + ' ' + lastName + ' is ' + age + ' years old.');


firstName = prompt('What is your first Name?');
console.log(firstName); */





// conditional statement challenge

/*var johnMass, markMass, johnheight, markheight, bmi;
johnMass = 60;
markMass = 65;
johnheight = 2;
markheight = 1.5;
johnBmi = johnMass / johnheight^2;
markBmi = markMass / markheight^2;
console.log("John's Bmi: " + johnBmi);
console.log("Mark's Bmi: " + markBmi);

if(markBmi > johnBmi)
{
    console.log('Mark\'s Bmi is higher than John\'s');
}
else
{
    console.log('John\'s Bmi higher than Mark\'s');
}
*/




// conditional statement and logical boolean operator
/*
firstName = 'Bob';
age = 20;

if(age < 13){
    console.log(firstName + ' is a boy.');
}
else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');
}
else{
    console.log(firstName + ' is a man.')
}
*/



// ternary operator
/*
var firstName = 'John';
age = 16;

age >= 18 ? console.log(firstName + ' drinks beer!')
: console.log(firstName + ' drinks juice!')

var drink = age >= 18 ? 'beer!' : 'juice!';
console.log(firstName + ' drinks ' + drink); */





// switch case
/*
var day = prompt('find the day?');

switch(day)
{
    case '1':
    console.log('sunday');
    break;
    case '2':
    console.log('Monday');
    break;
    case '3':
    console.log('Tuesday');
    break;
    case '4':
    console.log('Wednesday');
    break;
    case '5':
    console.log('Thursday');
    break;
    case '6':
    console.log('Friday');
    break;
    case '7':
    console.log('Saturday');

}*/




// Chalange 2
/*
johnTeamScore = 89+120+103;
mikeTeamScore = 116+94+123;
maryTeamScore = 97+134+105;


johnTeamAvrg = johnTeamScore / 3; // 104

mikeTeamAvrg = mikeTeamScore / 3; // 111

maryTeamAvrg = maryTeamScore / 3; // 112

console.log("Mikes team Avrg score: " + mikeTeamAvrg + "  John's team avrg score: " + johnTeamAvrg + "  Mary's team avrg score: " + maryTeamAvrg);

if(johnTeamAvrg === mikeTeamAvrg ===maryTeamAvrg)
{
    console.log("Both team have same average score");
}
else if(johnTeamAvrg > mikeTeamAvrg && johnTeamAvrg > maryTeamAvrg)
{
    console.log("John's team is winner");
}
else if(maryTeamAvrg > johnTeamAvrg && maryTeamAvrg > mikeTeamAvrg)
{
    console.log("Mary's team is winner");
}
else
{
    console.log("Mike's team is winner");
} */



// Functiom, function statement and Expression
/*
function calculateAge(birthYear) {
    return 2019 -birthYear;
}

var age = calculateAge(1998);
console.log(age);

//fuction declaration---- function  calculator(num) {}

 var calculateAge = function(birthYear) {
    return 2019 -birthYear;
}

console.log(calculateAge(2000))
*/



// *************Array**************
/*
var john = ['John', 'Smith', 1998, 'teacher', false];

john.push('blue'); //insert value at the end
john.unshift('Mr.') //insert value from front
console.log(john)

john.pop(); // remove from the end
john.shift(); // remove from front
console.log(john);

console.log(john.indexOf(1998));

var isDesigner = (john.indexOf('designer') === -1 ? "John is not a designer!"
    : "John is a designer.");
console.log(isDesigner);
*/



// Coding challange3

//var bill = 124;
//var bill2 = 48;
//var bill3 = 268;
/*
function tipCalculator(bill)
{
    if(bill<50)
    {
        console.log("bill "+bill);
        tip = 20/100*bill;
    }
    else if(bill>=50 && bill<=200)
    {
        console.log("bill "+bill);
        tip = 15/100*bill;
    }
    else
    {
        console.log("bill "+bill);
        tip = 10/100*bill;
    }

    return tip;
}

console.log(tipCalculator(48));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

console.log(tips);

var finalValue = [bills[0]+tips[0],
                  bills[1]+tips[1],
                  bills[2]+tips[2]];

console.log(finalValue);
*/



// Objects and properties
// object literal
/*
var john = {firstname: 'John',
            lastname: 'smith',
            birthyear: 1998
        };

console.log(john);
console.log(john.firstname);
console.log(john['lastname']);
var x = 'birthyear';
console.log(john[x]);

// new object syntax

var Jane = new Object();
Jane.firstname = 'Jane';
Jane.lastname = 'luis';
Jane['birthyear'] = 2000;

console.log(Jane);
*/

/*
var john = {firstname: 'John',
            lastname: 'smith',
            birthyear: 1998,
            calcAge: function(){
                this.age = 2019 - this.birthyear;
            }
        };


john.calcAge();
console.log(john);
*/



//coding chalange4 Sol
/*
var john = {
    fullName: 'John smith',
    mass: 65,
    height: 1.8,
    calcBMI: function(){
        this.bmi = this.mass / this.height^2;
        return this.bmi;
    }
}


//john.calcBMI();
//console.log(john);


var mark = {
    fullName: 'Mark smith',
    mass: 60,
    height: 1.9,
    calcBMI: function(){
        this.bmi = this.mass / this.height^2;
        return this.bmi;
    }
}


//mark.calcBMI();
//console.log(mark)



if (john.calcBMI() > mark.calcBMI())
{
console.log('John has highest bmi: '+ john['bmi'])
}
else if (john.bmi < mark.bmi)
{
    console.log('Mark has highest bmi: '+ mark['bmi']);
}
else
{
    console.log('John and Mark both have equal bmi');

}
*/



// Loop and iterations
/*
// for loop
for (var i=0; i<10; i++)
{
    console.log(i);
}

// While loop
var i = 0;
while(i < 10)
{
    console.log(i);
    i++;
}
*/

// continue and break statements
/*
var john = ['John', 'smith', 1998, 'developer', false];

for (var i=0; i<john.length; i++)
{
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}



var john = ['John', 'smith', 1998, 'developer', false];

for (var i=0; i<john.length; i++)
{
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


var john = ['John', 'smith', 1998, 'developer', false];

for (var i=john.length-1; i>=0; i--)
{
    console.log(john[i]);
}

*/


// Coding Challenge-5 Sol
/*

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tipCal: function()
    {


        this.tips = [];
        this.finalValue = [];
        for(var i=0; i<this.bills.length; i++)
        {

            var bill = this.bills[i];


            if(bill < 50)
            {
                tip = .2*bill;
            }

            else if(bill>=50 && bill<=200)
            {
                tip = .15*bill;
            }

            else
            {
                tip = .1*bill;
            }

            this.tips[i] = tip;
            this.finalValue[i] = bill + tip;

        }

    }
}



john.tipCal()
console.log(john);






// Part 2

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 320, 63, 110, 45],
    tipCal: function()
    {


        this.tips = [];
        this.finalValue = [];
        for(var i=0; i<this.bills.length; i++)
        {

            var bill = this.bills[i];


            if(bill < 100)
            {
                tip = .2*bill;
            }

            else if(bill>=100 && bill<=300)
            {
                tip = .1*bill;
            }

            else
            {
                tip = .25*bill;
            }

            this.tips[i] = tip;
            this.finalValue[i] = bill + tip;

        }

    }
}


function calcAverage(tips)
{
    var sum = 0;
    for (var i=0; i<tips.length; i++)
    {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}



mark.tipCal()
console.log(mark);

mark.avrg = calcAverage(mark.tips);
john.avrg = calcAverage(john.tips);

if (john.avrg > mark.avrg)
{
    console.log(john.fullName + '\'s family pays higher tips, with an avrg of $' + john.avrg);
}
else if(mark.avrg > john.avrg)
{
    console.log(mark.fullName + '\'s family pays higher tips, with an avrg of $' + mark.avrg);
}

/***********************************end of Basics**********************************************/
