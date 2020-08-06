class Calculator {
    constructor(value){
        this.value = value
    }

    
    show(value){

        if(value == "AC" || value == "%" || value == "<a></a>" || value == "1" || value == '<i class="fa fa-long-arrow-left"><a></a></i>' ||
        value == "/" || value == "1" || value == "2" || value == "3" || value == "4" || 
        value == "5" || value == "6" ||value == "7" || value == "8" || value == "9" || value == "0" ||
        value == "00" || value == "." ||value == "=" || value == "-" || value == "+" ||
        value == "*" || value == "*" || value =="Backspace" || value == "c" || value == "C" || value == "Enter"){

        if((Number(value) < 9 && Number(value) > -1 && upperDisplay.innerHTML.includes("%")==false)){
            upperDisplay.innerHTML += value;
            this.calculate(upperDisplay.innerHTML)
        }

        else if(value == "=" || value == "Enter"){ 
            upperDisplay.innerHTML = lowerDisplay.innerHTML
        }


        else if(value == "<a></a>" || value =='<i class="fa fa-long-arrow-left"><a></a></i>' || value =="Backspace"){
            var newVal = upperDisplay.innerHTML
            var newval2 = newVal.slice(0,-1);
            upperDisplay.innerHTML = newval2;
            this.calculate(upperDisplay.innerHTML)
        }


        else if(value =="AC" || value =="c" || value == "C") {
            upperDisplay.innerHTML = ""
            lowerDisplay.innerHTML = ""
        }

        else if(upperDisplay.innerHTML.includes("%")==true){

            upperDisplay.innerHTML += value
            upperDisplay.innerHTML.substring(upperDisplay.innerHTML.length -1) == "%"
            var exactNums = upperDisplay.innerHTML.split("%")[1];
            var percentResult = Number(eval(upperDisplay.innerHTML.split("%")[0])) * (Number(exactNums) / 100);
            lowerDisplay.innerHTML = percentResult;

        }


        else{
            
            upperDisplay.innerHTML += value;
            
            
        }
    }
    }
      


    calculate(value){

        lowerDisplay.innerHTML = eval(value)
        
    }
}

 let calculator = new Calculator();
 