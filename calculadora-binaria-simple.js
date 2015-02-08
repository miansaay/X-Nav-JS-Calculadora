

//Miguel Ángel Sainz Ayuso


function uno(){

    document.getElementById("display").innerHTML = "1";
}

function cero(){

    document.getElementById("display").innerHTML = "0";
}

function sumar(){
    var operando1 = document.getElementById("display").innerHTML;
    op1 = operando1;
    
    if (operando1 == "1" || operando1 == "0"){
        document.getElementById("display").innerHTML = " ";
    } else {
        alert("Por favor, introduce 0 o 1 en el display");
    }
}

function resultado(){

    var operando2 = document.getElementById("display").innerHTML;
    
    if ((operando2 == "0" || operando2 == "1") && op1 != undefined) {

        if (op1 == "1" && operando2 == "1") {
            result = 0;
        } else {
            result = parseInt(op1) + parseInt(operando2);
            console.log(result);
        }
        document.getElementById("display").innerHTML = result.toString();
    } else {
        alert("Por favor, introduce 0 o 1 en el display");
    }
        
}
