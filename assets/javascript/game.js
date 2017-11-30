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
		totalScore: 0,
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
				this.wins++;
				console.log(wins);
				$("#wins").text(playerInteract.wins);
				//reset game (new rand number and rand values on crystals)
				randNumber = this.gameNumber();
				$("#random-number").text(randNumber);
				this.totalScore = 0;
				//console.log(randNumber);
				
			}
			else if (this.totalScore > randNumber) {
				//display you lose message
				$("#win-lose-message").text(this.messages[1]);
				//++1 to losses
				this.losses++;
				console.log(this.losses);
				$("#losses").text(playerInteract.losses);
				//reset game (new rand number and rand values on crystals)
				randNumber = this.gameNumber();
				$("#random-number").text(randNumber);
				this.totalScore = 0;
				//console.log(randNumber);
				multi = playerInteract.crystalNumber();
				blue = playerInteract.crystalNumber();
				green = playerInteract.crystalNumber();
				purpleOrange = playerInteract.crystalNumber();
				
	
				console.log(multi);
				console.log(blue);
				console.log(green);
				console.log(purpleOrange);
			};
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
	
	//$("#multi-cry").data(multi);
	//$("#blue-cry").data(blue);
	//$("#green-cry").data(green);
	//$("#purple-cry").data(purpleOrange);
	
	//$("#purple-cry").text(multi);
	//console.log($("#purple-cry").val());
	
	
	
	
	//create on click event handler
	
	$( "#multi-cry" ).on( "click", function() {
		//console.log("test");
		playerInteract.totalScore = playerInteract.totalScore + multi;
		//console.log("new " +playerInteract.totalScore);
		$("#score").text(playerInteract.totalScore);
		playerInteract.scoreCheck();
	});
	$( "#blue-cry" ).on( "click", function() {
		//console.log("test1");
		playerInteract.totalScore = playerInteract.totalScore + blue;
		//console.log("new " +playerInteract.totalScore);
		$("#score").text(playerInteract.totalScore);
		playerInteract.scoreCheck();
	});
	$( "#green-cry" ).on( "click", function() {
		//console.log("test2");
		playerInteract.totalScore = playerInteract.totalScore + green;
		//console.log("new " +playerInteract.totalScore);
		$("#score").text(playerInteract.totalScore);
		playerInteract.scoreCheck();
	});
	$( "#purple-cry" ).on( "click", function() {
		//console.log("test3");
		playerInteract.totalScore = playerInteract.totalScore + purpleOrange;
		//console.log("new " +playerInteract.totalScore);
		$("#score").text(playerInteract.totalScore);
		playerInteract.scoreCheck();
	});
	
	//add crystal number click to total score
	
	
	
	
	//playerInteract.scoreCheck();
	
	
	//$("#score").text(playerInteract.totalScore);
	$("#random-number").text(randNumber);
	
	
});