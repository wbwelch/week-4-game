// JavaScript Document
$(document).ready(function() {

	//$('#wins').text('hi')
	//$('#losses').text('hi')
	//$('#score').text('hi')
	//$('#random-number').text('hi')
	//$('#win-lose-message').text('hi')
	
	var multi = 0;
	var blue = 0;
	var green = 0;
	var purpleOrange = 0;
	var randNumber = 0;
	
	var playerInteract = {
		wins: 0,
		losses: 0,
		totalScore: 31,
		messages: ["You win!", "You lose!"],

		
		scoreCheck: function() {
			if (this.totalScore === randNumber) {
				//display you win message
				$("#win-lose-message").text(this.messages[0]);
				//++1 to wins
				++this.wins;
				//reset game (new rand number and rand values on crystals)
			}
			else if (this.totalScore > randNumber) {
				//display you lose message
				$("#win-lose-message").text(this.messages[1]);
				//++1 to losses
				++this.losses;
				//reset game (new rand number and rand values on crystals)
			}
			//else {
				//do nothing
			//}
		},
		
		gameNumber: function () {
			return Math.floor(Math.random() * (120 - 18 + 1)) + 18;
		},
		
		crystalNumber: function () {
			return Math.floor(Math.random() * (12 - 1+ 1)) + 1;
		}
	};
	//end of object
	
	//console tests
	console.log(playerInteract.wins);
	
	
	
	//generate a random number between 18 and 120 
	
	randNumber = playerInteract.gameNumber();
	
	console.log(randNumber);
	
	//generate a random number between 1 and 12
	//creat a for loop to assign random number between 1 and 12 to each image
	
	multi = playerInteract.crystalNumber();
	blue = playerInteract.crystalNumber();
	green = playerInteract.crystalNumber();
	purpleOrange = playerInteract.crystalNumber();
	
	console.log(multi);
	console.log(blue);
	console.log(green);
	console.log(purpleOrange);
	
	//assign crystal numbers to images
	
	//create on click event handler
	
	//add crystal number click to total score
	
	playerInteract.scoreCheck();
	
	$("#wins").text(playerInteract.wins);
	$("#losses").text(playerInteract.losses);
	$("#score").text(playerInteract.totalScore);
});