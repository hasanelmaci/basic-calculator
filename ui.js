

class UI {
    press(event){
        calculator.show(event)

    }


    downEffect(event){
        document.getElementsByClassName(event)[0].style.background = "#8B8B8B"

    }


    upEffect(event){

        if(event =="btn btn2 ac" || event=="btn btn2 percent" || event=="btn btn2 backspace" || event=="btn btn2 divide" || event =="btn btn2 times" ||
        event =="btn btn2 plus" || event == "btn btn2 minus" || event =="btn btn2 equal"){

            setTimeout(function() {
                document.getElementsByClassName(event)[0].style.background = "#2E2E2E"
            },300)
            

        }

        else{
        setTimeout(function() {
            document.getElementsByClassName(event)[0].style.background = "black"
        },300)
    }

    }
    

}


var ui = new UI();