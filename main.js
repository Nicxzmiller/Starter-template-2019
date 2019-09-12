// var user = {
//     username:"nicholas",
//     password:"secret"
    
// };

// var database = [
//     {
//         username:"nicholas",
//         password:"secret"
//     },
//     {
//         username:"Sally",
//         password:"pass"
//     },
//     {
//         username:"Bobby",
//         password:"777"
//     }
// ]

// var newsFeed = [
//     {
//         username:"nicholas",
//         timeline:"on a trip to Las Vegas"
//     },
//     {
//         username:"David",
//         timeline:"Javascript is getting cooler"
//     },
//     {
//         username:"Basu",
//         timeline:"You need to try the new restaurant in town"
//     }
// ];

// var usernamePrompt = prompt("What\'s your username?");
// var passwordPrompt = prompt("what\'s your password?");

// function isUserValid(user, pass){
//         for(var i=0; i < database.length; i++){
//             if(database[i].username === user &&
//                 database[i].password === pass){
//                 return true;
//         }
//     }
//     return false;
// }

// function signIn(user, pass){

//     if(isUserValid(user, pass)){
//         console.log(newsFeed);
//     }else if(!isUserValid(pass)){
//         alert("wrong password");
//     }else if(!isUserValid(user)){
//         alert("user does not exist");
//     }    
// }
// ------------------------------------------
// signIn(usernamePrompt, passwordPrompt);

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function(){
//     console.log("Clicked!!!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    if(input.value.length > 0){
        var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})

input.addEventListener("keypress", function(){
    if(input.value.length > 0 && event.keyCode === 13){
        var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})
