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
	//var multiCry = $("multi-cry");
	//var blueCry = $("blue-cry");
	//var greenCry = $("green-cry");
	//var purpOrangeCry = $("purple-cry");
	
	var playerInteract = {
		wins: 0,
		losses: 0,
		totalScore: 91,
		messages: ["You win!", "You lose!"],

		gameNumber: function () {
			return Math.floor(Math.random() * (120 - 18 + 1)) + 18;
		},
		
		crystalNumber: function () {
			return Math.floor(Math.random() * (12 - 1+ 1)) + 1;
		},
		scoreCheck: function() {
			if (this.totalScore === randNumber) {
				//display you win message
				$("#win-lose-message").text(this.messages[0]);
				//++1 to wins
				++this.wins;
				//reset game (new rand number and rand values on crystals)
				randNumber = this.gameNumber();
				//console.log(randNumber);
				
			}
			else if (this.totalScore > randNumber) {
				//display you lose message
				$("#win-lose-message").text(this.messages[1]);
				//++1 to losses
				++this.losses;
				//reset game (new rand number and rand values on crystals)
				randNumber = this.gameNumber();
				//console.log(randNumber);
				multi = playerInteract.crystalNumber();
				blue = playerInteract.crystalNumber();
				green = playerInteract.crystalNumber();
				purpleOrange = playerInteract.crystalNumber();
	
				console.log(multi);
				console.log(blue);
				console.log(green);
				console.log(purpleOrange);
			}
		}	//end of scorecheck method
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
	
	$("#multi-cry").text(multi);
	$("#blue-cry").html(blue);
	$("#green-cry").html(green);
	$("#purple-cry").html(purpleOrange);
	
	//create on click event handler
	
	$( "#multi-cry" ).on( "click", function() {
		console.log("test");
	});
	$( "#blue-cry" ).on( "click", function() {
		console.log("test1");
	});
	$( "#green-cry" ).on( "click", function() {
		console.log("test2");
	});
	$( "#purple-cry" ).on( "click", function() {
		console.log("test3");
	});
	
	//add crystal number click to total score
	
	
	
	
	playerInteract.scoreCheck();
	
	$("#wins").text(playerInteract.wins);
	$("#losses").text(playerInteract.losses);
	$("#score").text(playerInteract.totalScore);
});