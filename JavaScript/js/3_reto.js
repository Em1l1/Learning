var op1 = "piedra"
var op2 = "papel"
var op3 = "tijera"

var resultado = function(user, pc){
 if (user != pc){
        if(user === op1 && pc === op3){
            console.log ("ganó user con " + user)
        }else if (user === op2 && pc === op1){
            console.log ("ganó user con" + user)
        }else if (user === op3 && pc === op2){
            console.log ("ganó user con " + user)
        }else{
            console.log ("Ganó pc con " + pc)
    }
 }else {
        console.log ("empate")
}
};

resultado (op1,op3)