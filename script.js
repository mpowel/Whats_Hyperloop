
//Function to run calculations in calculoop.html and populate results in the table.
var count = "";
var diamond = 0;

function createTable() {
		var table = document.getElementById("myTable");
		var x, text;
			x = document.getElementById("miles").value;
			
		    if (!isNaN(x)) {
			    count = count + " " + x;
			document.getElementById("history").innerHTML = "History: " + count;
			    diamond = diamond + 1;
			document.getElementById("times").innerHTML = "Times: " + diamond;
			}
			old = x;
			x = x.replace(",","");
			
			mCostHyper = x * (20/346);
			text1aa = "$" + mCostHyper.toFixed(2);
			document.getElementById("text1a").innerHTML = text1aa;
			iCostHyper = x * (4060000000/346);
			text2aa = "$" + iCostHyper.toFixed(2);
			document.getElementById("text2a").innerHTML = text2aa;
			speedHyper = 760;
			text3aa = speedHyper + " mph";
			document.getElementById("text3a").innerHTML = text3aa;
			commuteHyper = x / 760;
			text4aa =commuteHyper.toFixed(2) + " hours";
			document.getElementById("text4a").innerHTML = text4aa;
			
			mCostTrain = x * (160/346);
			text1bb = "$" + mCostTrain.toFixed(2);
			document.getElementById("text1b").innerHTML = text1bb;
			iCostTrain = x * (68400000000/346);
			text2bb = "$" + iCostTrain.toFixed(2);
			document.getElementById("text2b").innerHTML = text2bb;
			speedTrain = 220;
			text3bb = speedTrain + " mph";
			document.getElementById("text3b").innerHTML = text3bb;
			commuteTrain = x / speedTrain;
			text4bb =commuteTrain.toFixed(2) + " hours";
			document.getElementById("text4b").innerHTML = text4bb;
			
			//close coach text
			document.getElementById('goOn').style.display='none'
			}

//Undo button to revert back to the last entry for calculoop.html
function myUndo() {
	document.getElementById("miles").value = old;
}

//Overflow menu button to expose the 3 options (speedoflight.html)
function userOptions() {
	document.getElementById('settingsselect').style.display='block';
	}

//Overflow menu options
function optionSelect() {
	var opt1, opt2, opt3;
	opt1 = document.getElementById("set1").checked;
	opt2 = document.getElementById("set2").checked;
	opt3 = document.getElementById("set3").checked;
		if (opt1) {
			window.open("calculoop.html");	
		}
		else if (opt2){
			window.open("about_hyperloop.html");
		}
		else if (opt3) {
			window.open("cmuhyperloop_quiz.html");
		 
		}
			
	}

//Hint text gets triggers by onmouseover in calculoop.html
function myHint() {
		document.getElementById("hint").innerHTML = "Try typing 346, which is the distance in miles from SF to LA.";
	}

//Hint text is hidden onmouseover of Compare Stats button in calculoop.html	
function myNoHint() {
		document.getElementById("hint").innerHTML = " ";
	}

//In line number validation for calculoop.html
function inLine() {
		var x;
		x = document.getElementById("miles").value;
		x = x.replace(",","");
		if (isNaN(x)) {
		        document.getElementById("validate").innerHTML = "Input not valid";
		    } 
			else if (x < 100) {
			    document.getElementById("validate").innerHTML = "Try an even bigger number! Then click Compare Stats when you're ready";
			}
			else {
		        document.getElementById("validate").innerHTML = "Nice. Click Compare Stats to see calculations for hyperloop vs train traveling a distance of " + x + " miles";
		    }
	    }

//Forgiving format for calculoop.html
function noInput() {
			var x;
			x = document.getElementById("miles").value;
			
			x = x.replace(",","");
			
			if (x == "") {
			    document.getElementById("validate").innerHTML = "You gotta enter a number first!";
		 	} else if (isNaN(x)) {
			    document.getElementById("validate").innerHTML = "Check your entry. Please enter only numbers.";
			} else {
				document.getElementById("validate").innerHTML = "Calculations for hyperloop vs train traveling a distance of " + x + " miles";
   	  }
	}

//Coach when "Help" button is pushed for calculoop.html
function helpPrompt() {
    alert("Type in a number in the white box where it says \n\n\"Enter ______# of miles\". \n\nThis number represents a distance in miles. To get an accurate calculation for your commute or trip, try getting your distance from Google maps: https://www.google.com/maps");
}

//Featured content, triggered by the large button in calculoop.html (set to disappear once triggered)
function sanFranToLosAng() {
	document.getElementById("miles").value=346;
	createTable();
}





// ALL FUNCTIONS BELOW ARE RELATED TO hyperloop_quiz.html \\

function question1() {
	var x, text;
	x = document.forms["formOne"]["isTrue"].value;
	text = "Correct! <br/><br/>";
	if (x == 1){
		document.getElementById("answer").innerHTML = "Sorry, that's not correct";
	} else {
		var text = text + document.getElementById("a1").innerHTML;
			document.getElementById("answer").innerHTML = text;
	}
   	document.getElementById("nextStep").innerHTML = "<b>Click 'next' to go on to the next question.</b>";
	
 }

 function question2() {
 	var x, text;
 	x = document.forms["formOne"]["isTrue"].value;
 	text = "Correct! <br/><br/>";
 	if (x == 1){
 		document.getElementById("answer").innerHTML = "Sorry, that's not correct";
 	} else {
 		var text = text + document.getElementById("a2").innerHTML;
 			document.getElementById("answer").innerHTML = text;
 	}

  }
  
  function question3() {
  	var x, y, text;
	x = document.forms["formOne"]["members"].value;
	y = parseInt(x);
  	document.getElementById("answer").innerHTML = y;
	text = "Correct! <br/><br/>";
  	if (y < 5){
  		document.getElementById("answer").innerHTML = "Try a little higher!";
  	} else if (y > 5){
  		document.getElementById("answer").innerHTML = "A little lower";
  	} else if (y == 5){
  		var text = text + document.getElementById("a3").innerHTML;
  			document.getElementById("answer").innerHTML = text;
  	} else if (x == "a lot" || x == "a bunch" || x == "many"){
  		var text = text + document.getElementById("a3").innerHTML;
  			document.getElementById("answer").innerHTML = text;
  	}
  	document.getElementById("backHomeButton").style.display = "block";

   }
 
 function showOne() {
  	 document.getElementById("hideOne").style.display = "block";
  	 document.getElementById("nextStep").innerHTML = "";
    }
	
 function hideOne() {
	 document.getElementById("hideOne").style.display = "none";
	 document.getElementById("answer").innerHTML = "";
	 document.getElementById("ans3").checked = true;
 }
 
 function showTwo() {
	 document.getElementById("hideTwo").style.display = "block";
	 document.getElementById("nextStep").innerHTML = "";
	 document.getElementById("ans3").checked = true;
  }

  function hideTwo() {
 	 document.getElementById("hideTwo").style.display = "none";
 	 document.getElementById("answer").innerHTML = "";
  }
 
  function hideThree() {
 	 document.getElementById("hideThree").style.display = "none";
 	 document.getElementById("answer").innerHTML = "";
  }
  function showThree() {
 	 document.getElementById("hideThree").style.display = "block";
   }
  
  function backHome() {
  	 window.open("speedoflight.html");
    }
	
	function helpPrompt() {
	    var v = prompt("Type a number between 1 and 10 in the box below. For a list of all CMU colleges see: http://www.cmu.edu/academics/");
    
	    if (v != null) {
			document.getElementById("schools").value=v;
			question3();
	    }
	}









	