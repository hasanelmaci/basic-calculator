const lowerDisplay = document.getElementById("lower_display");
const upperDisplay = document.getElementById("upper_display");
const divide = document.getElementsByClassName("btn btn2 divide")[0];
const times = document.getElementsByClassName("btn btn2 times")[0];
const plus = document.getElementsByClassName("btn btn2 plus")[0];
const minus = document.getElementsByClassName("btn btn2 minus")[0];
const equal = document.getElementsByClassName("btn btn2 equal")[0];
const ac = document.getElementsByClassName("btn btn2 ac")[0];
const percent = document.getElementsByClassName("btn btn2 percent")[0];
const backspace = document.getElementsByClassName("btn btn2 backspace")[0];


document.getElementById("buttons").addEventListener("click", clicked);
document.addEventListener("keydown",sendPress)
document.addEventListener("keydown",sendDownEffect);
document.addEventListener("keyup",sendUpEffect)


function clicked(event) {
    calculator.show(event.target.innerHTML);

}

function sendPress(event) {
    ui.press(event.key);
    console.log(event.key)

}

function sendDownEffect(event) {
    


    if(event.key == "1"){
        ui.downEffect("btn one")
    }

}

function sendUpEffect(event) {


    if(event.key == "C" || event.key =="c"){
        ui.downEffect("btn btn2 ac")
        ui.upEffect("btn btn2 ac")
    }
    if(event.key == "%"){
        ui.downEffect("btn btn2 percent")
        ui.upEffect("btn btn2 percent")
    }
    if(event.key == "Backspace"){
        ui.downEffect("btn btn2 backspace")
        ui.upEffect("btn btn2 backspace")
    }
    if(event.key == "/"){
        ui.downEffect("btn btn2 divide")
        ui.upEffect("btn btn2 divide")
    }
    if(event.key == "1"){
        ui.downEffect("btn one")
        ui.upEffect("btn one")
    }
    if(event.key == "2"){
        ui.downEffect("btn two")
        ui.upEffect("btn two")
    }
    if(event.key == "3"){
        ui.downEffect("btn three")
        ui.upEffect("btn three")
    }
    if(event.key == "*"){
        ui.downEffect("btn btn2 times")
        ui.upEffect("btn btn2 times")
    }
    if(event.key == "4"){
        ui.downEffect("btn four")
        ui.upEffect("btn four")
    }
    if(event.key == "5"){
        ui.downEffect("btn five")
        ui.upEffect("btn five")
    }
    if(event.key == "6"){
        ui.downEffect("btn six")
        ui.upEffect("btn six")
    }
    if(event.key == "+"){
        ui.downEffect("btn btn2 plus")
        ui.upEffect("btn btn2 plus")
    }
    if(event.key == "7"){
        ui.downEffect("btn seven")
        ui.upEffect("btn seven")
    }
    if(event.key == "8"){
        ui.downEffect("btn eight")
        ui.upEffect("btn eight")
    }
    if(event.key == "9"){
        ui.downEffect("btn nine")
        ui.upEffect("btn nine")
    }
    if(event.key == "-"){
        ui.downEffect("btn btn2 minus")
        ui.upEffect("btn btn2 minus")
    }
    if(event.key == "0"){
        ui.downEffect("btn zero")
        ui.upEffect("btn zero")
    }
    if(event.key == "."){
        ui.downEffect("btn comma")
        ui.upEffect("btn comma")
    }
    if(event.key == "="){
        ui.downEffect("btn btn2 equal")
        ui.upEffect("btn btn2 equal")
    }

    
}