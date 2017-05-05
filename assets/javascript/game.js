// Use Mathfloor/math random to pull up the target number, use var to save it for that round


var targetNumber = 0;
var wins = 0;
var losses = 0;
var score = 0;

if (score > targetNumber) {
	alert("You Lose!");
	losses++;
	$("#lossesCounter").html(losses);
}

else if (score === targetNumber && targetNumber !== 0) {
	alert("You Win");
	wins++;
	$("#winsCounter").html(wins);
};
// to randomly select a target number each round


	var randomNumber = 18 + Math.floor(Math.random() * 102);
	targetNumber+=randomNumber;
 	$("#targetNumber").text(targetNumber);
 	console.log(targetNumber);

// options for each crytal, defined in an object, looped, then plugged in when you click on each
var crystalValue = [1,2,3,4,5,6,7,8,9,10,11,12];



for (var i = 0; i < 4; i++) {
	crystalValue[i] = Math.round(Math.random() * crystalValue.length);
	console.log(crystalValue[i]);
};






 	$("#crystal1").on("click", function (){
 			score += crystalValue[0];
 			// alert("Magic " + score + " times!");
 			console.log(score)
 			$("#totalScore").text(score);

 		});

 	$("#crystal2").on("click", function (){
 			score += crystalValue[1];
 			// alert("Magic " + score + " times!");
 			console.log(score)
 			$("#totalScore").text(score);

 		});

 	$("#crystal3").on("click", function (){
 			score += crystalValue[2];
 			// alert("Magic " + score + " times!");
 			console.log(score)
 			$("#totalScore").text(score);

 		});

 	$("#crystal4").on("click", function (){
 			score += crystalValue[3];
 			// alert("Magic " + score + " times!");
 			console.log(score)
 			$("#totalScore").text(score);

 		});

// placeholder space for a reset type of function if someone wins or loses


// use a switch case or if else statement? NEITHER WORKS WHYYYYY

// switch (score += crystalValue[i]) {
// 	case "score > targetNumber": 
// 		alert("You Lose!");
// 		losses++;
// 		$("lossesCounter").text(losses);
// 	break;

// 	case "score = targetNumber":
// 		alert("You Win");
// 		wins++;
// 		$("winsCounter").text(wins);
// }




// if (score > targetNumber) {
// 	alert("You Lose!");
// 	losses++;
// 	$("lossesCounter").text(losses);
// }

// else if (score == targetNumber) {
// 	alert("You Win");
// 	wins++;
// 	$("winsCounter").text(wins);
// };


// && targetNumber !== 0

// if this happens outside of document.ready, you win at first b/c score & target are both 0 - scraped document.ready
// it doesn't work inside of the document.ready because it can't bring those values outside of this function - scraped document.ready


// if (score === targetNumber && score > 0) {
// 	alert("You Win");
// 	wins++;
// 	$("winsCounter").html(wins);
// }

// else if (score > targetNumber && score > 0) {
// 	alert("You Lose!");
// 	losses++;
// 	$("lossesCounter").html(losses);
// };


// });




// target # between 18-120

// declare a new object for the 4 crystals to mathfloor/math random number 1-12
// save that number for each round

// Use a Switch case to concatenate the values when clicking on different crystals - unneccesaary

// use another switch case (or if statement?) to make sure you're restarting the game  at 0 if you go over the target number and increasing your losses

// and last one, if the concatenate values of the crytal clicks are equal to the target object number, you win and it picks a new number