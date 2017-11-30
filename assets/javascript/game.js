// JavaScript Document
$(document).ready(function() {

	//$('#wins').text('hi')
	//$('#losses').text('hi')
	//$('#score').text('hi')
	//$('#random-number').text('hi')
	//$('#win-lose-message').text('hi')
	
	var playerInteract = {
		wins: 0,
		losses: 0,
		totalScore: 51,
		messages: ["You win!", "You lose!"],
		randNumber: 51,
		
		scoreCheck: function() {
			if (this.totalScore === this.randNumber) {
				//display you win message
				$("#win-lose-message").text(this.messages[0]);
				//++1 to wins
				++this.wins;
				//reset game (new rand number and rand values on crystals)
			}
			else if (this.totalScore > this.randNumber) {
				//display you lose message
				$("#win-lose-message").text(this.messages[0]);
				//++1 to losses
				++this.losses;
				//reset game (new rand number and rand values on crystals)
			}
			//else {
				//do nothing
			//}
		}
	};
	
	$("#wins").text(playerInteract.wins);
						//console.log(playerInteract.wins)
	$("#losses").text(playerInteract.losses);
	$("#score").text(playerInteract.totalScore);
	playerInteract.scoreCheck();
	
	//console tests
	console.log(playerInteract.wins);
	
	
	
	//generate a random number between 18 and 120 
	
	//generate a random number between 1 and 12
	//creat a for loop to assign random number between 1 and 12 to each image
	//create on click event handler
	//add random number click to total score
	
});