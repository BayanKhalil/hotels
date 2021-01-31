
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

// we can call them here or in the HTML page
// welcomeMessage()




// function expression:

var showImage = function() {
    // for image

    // input
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
    
    // output
    return document.write(result);


}

// showImage();



// function sum(){
//     var num1 = 50;
//     var num2 = 10;
//     var sumNumbers = num1 + num2;

//     return sumNumbers
// }

// console.log( sum() );






