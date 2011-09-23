//Validate a phone number.
function formValidator()
{


   if(isNumeric(phone, "Please enter a valid phone number"))//must meet length requirement and only be numbers.
   {
      if(lengthRestriction(phone, 10,10))
      {
       return true;
      }
   }
  return false;
}


function isNumeric(phone, helperMsg){
    var numericExpression = /^[0-9]+$/;//couldn't figure out how to add the dashes and where they should be places
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
        alert("Please enter"  + max + " characters");//String concatination!
        return false;
    }
}

//Adding only the numbers in a string
var yankees = ["awesome", 100, "best", 62, true]//sorry this was the best i could figure out.
var totalGames = yankees[1] + yankees[3]
console.log(totalGames)

//How many day until thanksgiving?!
today=new Date()//this one was pretty hard for me, I had to look up this function because I couldn't get it, but after doing so, I do understand it.
var thanksgiving=new Date(today.getFullYear(), 10, 24) 
if (today.getMonth()==10 && today.getDate()>24) 
	birthday.setFullYear(thanksgiving.getFullYear()+1) 
	var one_day=1000*60*60*24//(never would of thought to do this!!)
	console.log(Math.ceil((thanksgiving.getTime()-today.getTime())/(one_day))+
	" days left until Thanksgiving!!");
	
//How to validate email
function emailValidator(elem, helperMsg){	//I had help with this one, coudln't figure out how to validate using just JS but here is the script.
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;// I had to look up the regular expression because I couldn't figure it out.
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
console.log(tesNumber.fixed(2));

//How to get number that is inside a certain percent of another number

var x = 2;
var y= 10;
var gp = .35;
var p = x/y;
if (gp > p) {
	console.log("x falls within 35% of y!");
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
			
//How to return number from a string	
var testString = "35 apples";
numvar = parseInt(testString);

console.log(numvar);

//How to title-case a string. I got help with this one but couldn't figure out how to check it in javascript. I used a input field in the html to verify
/*
<html>
<head>
<script type="text/javascript">
*/function displayResult()
{
document.getElementById("p1").style.textTransform="capitalize";
}
/*</script>
</head>
<body>

<p id="p1">"This is pretty cool."</p>
<br />

<button type="button" onclick="displayResult()">Convert text</button>

</body>
</html>*/

//How to validate URL
function validate(form) { 
	var form = "http://www.facebook.com";
    var v = new RegExp(); 
    v.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");//I needed help with this too. I get the concept of reg expressions but still have trouble putting them together.
    if (!v.test(form["URL"].value)) { 
        alert("You must supply a valid URL."); 
        return false; 
           
    };
} 
console.log(validate());

alert("JavaScript works!");