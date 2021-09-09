// console.log("Hello, World!");
// alert("Example")

//var b = "smoothie"; Can use any data type
//console.log(b);

// var age = prompt("What is your age?"); //Allows JS to hold user-inputted values

// document.getElementById("someText").innerHTML = "You are " + age; //Allows JS to change text

// Can use % * / + - ++ -- operators

// this is the equivalent of self in python

let users = ["tgsmith", "bouchard"];
var currentUser;

var getUser = prompt("Username: ");
if(getUser != null && getUser != "") {
    for(var i = 0; i <= users.length; i++) {
        if(users[i] == getUser) {
            var tmp = prompt("What would you like your screen name to be?\n(This won't change your username)");
            currentUser = tmp;
        }
    }
    document.getElementById("someText").innerHTML = "Hello, " + currentUser;
}

// function fun()
// {
//     alert("This is a trigger");
// }

// fun();
