/*
Logical operators:
&& AND
condition 1 is true and condition 2 is also true 

|| OR
condition 1 is true OR condition 2 is true

*/


// example:

// var age = prompt('what is your age');

// console.log(age);

// if (age >= 18 && age<=35){
//     document.write('welcome ');
// }else if(age < 18 || age>35){
//     document.write('sorry you can\'t enter');
// }else{
//     document.write('not allowed');
// }


// ****** DEMO ******


/*

To do list:

-add image based on user input ask the user what size he wants

-keep asking the user for a valid input he can only answer with big or small

-Ask how many pictures does he/she wants and show them on the page

*/


// for(var i = 0 ; i<= 10 ; i=i+2){
//     // i = 0

//     document.write('<br>'+'hello ');
// }

// var i = 0;
// while(i < 5){

//     document.write('hello')
//      i = i +1;
//     //  i++
// }



// function declaration

function welcomeMessage() {
    // for prinitng message

    var message = '';
    // input
    var hourNow = prompt('what time is it ?');
    console.log(hourNow);


    // code
    if (hourNow > 18) {
        message = 'Good evening';

    } else if (hourNow > 12) {
        message = 'good afternoon';
    } else if (hourNow >= 0) {
        message = 'good morning';
    } else {
        message = 'welcome'
    }

    // output
    return document.write('<h3>' + message + '</h3>');

}


// console.log(message);






// function expression:
var showImage = function() {
    var order = prompt('what size do you want big or small?');
    
    while (order !== 'big' && order !== 'small') {
        order = prompt('please write only big or small ')
    }
    
    var room = '';
    
    if (order === 'big') {
        room = '<img src="images/big.jpg" />';
    } else if (order === 'small') {
        room = '<img src="images/small.jpg" />';
    }
    
    var result = '';
    
    // result = room;
    
    var numRooms = prompt('how many rooms do you want');
    
    for (var i = 0; i < numRooms; i++) {
        console.log(i);
        // document.write(result);
        result = result + room;
    }
    
    
    return document.write(result);


}


// for image




// function sum(){
//     var num1 = 50;
//     var num2 = 10;
//     var sumNumbers = num1 + num2;

//     return sumNumbers
// }

// console.log( sum() );




