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

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    // input.value = "";

    li.addEventListener("click", function(){
        var done = this.classList.toggle("done");
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("removeButton");

        if(done){
            deleteButton.appendChild(document.createTextNode("remove"));
            deleteButton.classList = "removeButton";
            li.appendChild(deleteButton);

            deleteButton.addEventListener("click", function(){
                this.parentElement.remove();
            });
        }else{
            this.getElementsByClassName("removeButton")[0].remove();
        }
    })
    input.value="";
}

function addListAfterCLick(){
        if(inputLength() > 0){
            createListElement();
        }
}

function addListAfterPressKey(event){
        if(inputLength() > 0 && event.keyCode === 13){
            createListElement();
        }
}

button.addEventListener("click", addListAfterCLick);

input.addEventListener("keypress", addListAfterPressKey);
