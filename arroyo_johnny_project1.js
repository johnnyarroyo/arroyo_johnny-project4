//Validate a phone number
function formValidator()
{


   if(isNumeric(phone, "Please enter a valid phone number"))
   {
      if(lengthRestriction(phone, 10,10))
      {
       return true;
      }
   }
  return false;
}


function isNumeric(phone, helperMsg){
    var numericExpression = /^[0-9]+$/;
    if(phone.value.match(numericExpression)){
        return true;
    }else{
        alert(helperMsg);
        return false;
    }
}

function lengthRestriction(phone, min, max){
    var uInput = phone.value;
    if(uInput.length >= min && uInput.length <= max){
        return true;
    }else{
        alert("Please enter between " +min+ " and " +max+ " characters");
        return false;
    }
}

//Adding only the numbers in a string
var yankees = ["awesome", 100, "best", 62, true]
var totalGames = yankees[1] + yankees[3]
console.log(totalGames)



alert("JavaScript works!");