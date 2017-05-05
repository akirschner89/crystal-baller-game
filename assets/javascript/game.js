// Use Mathfloor/math random to pull up the target number, use var to save it for that round


var targetNumber = 0;
var wins = 0;
var losses = 0;
var score = 0;

var audio = new Audio('audio_file.mp3');
audio.play();
// to randomly select a target number each round

// if (wins++ || losses++) {
// 	reset();
// };

	targetNumber = 18 + Math.floor(Math.random() * 102);
 	$("#targetNumber").text(targetNumber);
 	console.log(targetNumber);

// options for each crytal, defined in an object, looped, then plugged in when you click on each
var crystalValue = [1,2,3,4,5,6,7,8,9,10,11,12];


setGame();


function setGame(){	for (var i = 0; i < 4; i++) {
		crystalValue[i] = 1 + Math.round(Math.random() * 11);
		console.log(crystalValue[i]);
	}};


	 	$("#crystal1").on("click", function (){
	 			score+= crystalValue[0];
	 			// alert("Magic " + score + " times!");
	 			// console.log(score)
	 			$("#totalScore").text(score);
	 			gameOver();

	 		});

	 	$("#crystal2").on("click", function (){
	 			score += crystalValue[1];
	 			// alert("Magic " + score + " times!");
	 			// console.log(score)
	 			$("#totalScore").text(score);
	 			gameOver();

	 		});

	 	$("#crystal3").on("click", function (){
	 			score += crystalValue[2];
	 			// alert("Magic " + score + " times!");
	 			// console.log(score)
	 			$("#totalScore").text(score);
	 			gameOver();

	 		});

	 	$("#crystal4").on("click", function (){
	 			score += crystalValue[3];
	 			// alert("Magic " + score + " times!");
	 			// console.log(score)
	 			$("#totalScore").text(score);
	 			gameOver();

	 		}
	 	);

		function gameOver() {if (score > targetNumber) {
			console.log("You Lose!");
			losses++;
			$("#lossesCounter").html(losses);
			reset();
			score = 0;
			$("#totalScore").text(score);
		}

		else if (score === targetNumber) {
			console.log("You Win");
			wins++;
			$("#winsCounter").html(wins);
			reset();
			score = 0;
			$("#totalScore").text(score);
		}
	};



// placeholder space for a reset type of function if someone wins or loses

function reset() {
	targetNumber = 18 + Math.floor(Math.random() * 102);
 	$("#targetNumber").text(targetNumber);
 	setGame();


};







// target # between 18-120

// declare a new object for the 4 crystals to mathfloor/math random number 1-12
// save that number for each round


// use another switch case (or if statement?) to make sure you're restarting the game  at 0 if you go over the target number and increasing your losses

// and last one, if the concatenate values of the crytal clicks are equal to the target object number, you win and it picks a new number