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

//How many day until thanksgiving?!
today=new Date()
var thanksgiving=new Date(today.getFullYear(), 10, 24) 
if (today.getMonth()==10 && today.getDate()>24) 
	birthday.setFullYear(thanksgiving.getFullYear()+1) 
	var one_day=1000*60*60*24
	console.log(Math.ceil((thanksgiving.getTime()-today.getTime())/(one_day))+
	" days left until Thanksgiving!!");
	
//How to validate email
function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
};

//How to set number of decimal points
var tesNumber = 343427.1264827

//How to get number that is inside a certain percent of another number
console.log(tesNumber.fixed(2));

var x = 2;
var y= 10;
var gp = .35;
var p = x/y;
if (gp > p) {
	console.log("x falls within");
} else {
	return false;
};

//How to replace character in a string
var slash = "/";
var myOldString = "a,b,c";
var myNewString = myOldString.replace(/,/g, slash);

console.log("Old string =  " + myOldString); 
console.log("New string = " + myNewString);

//How to find the smallest integer larger than given number
var testNumbers = [2,6,4,1,3,9];
var givenNumber = 5
testNumbers.sort()

for (var counter = 0; counter < testNumbers.length; counter++) {
		if (testNumbers[counter] > givenNumber) {
			console.log(testNumbers[counter]); break;
		}
};	 
			
		

alert("JavaScript works!");