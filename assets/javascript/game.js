
//computer choices
var choices = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","y","z"]

//variables for wins, losses, etc

var wins= 0
var losses= 0
var GuessesLeft= 9
var computerChoice = choices[Math.floor(Math.random() * choices.length)]
var userLetters = []


//user guess and computer guess

//computer picks a random letter 
//user chooses a letter


//keeps track of score
function score(wins, losses, GuessesLeft, userLetters) {
	var allScore = 
	"wins: " + wins +
	"<br>losses: " + losses +
	"<br>Remaining Guesses: " + GuessesLeft +
	"<br>Your Guesses So far"

//identify ALL your HTML IDs and make sure to link them to Javascript
//connecting to HTML
	document.getElementById("score").innerHTML = allScore
	document.getElementById("user-letters").innerHTML = userLetters
}

//when the user presses on a letter- keycode are numbers representing alphabets
//reference stackoverflow: 65-90 are numbers for the alphabets
document.onkeyup = function (event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		var userGuess = event.key.toLowerCase()
		GuessesLeft--
//attaches user's guess to the array (which consists of nothing) VERY IMPORTANT
		userLetters.push(userGuess)
}

//restart function for when the play wins or loses
function reset() {
	userLetters.splice(0,userLetters.length)	
	GuessesLeft = 9
	computerChoice = choices[Math.floor(Math.random() * choices.length)]
	console.log(computerChoice)
}

//if user is correct
if(userGuess===computerChoice){
			wins++
			reset()
}
score(wins, losses, GuessesLeft, userLetters)
			

//if the number of gueses is 0
if (GuessesLeft<1){
			losses++
			reset()
}
score(wins, losses, GuessesLeft, userLetters)
			
}





