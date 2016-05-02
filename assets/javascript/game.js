// load js right away, possbily before html is finished loading

window.onload = function() {

	//game object to contain variables and methods

	var game = {

		// question slide object array that contains - question, answer1, answer2, answer3, answer4,

		questions:
			[{
			question: "What is a group of jellyfish called?",
			answer1: "A School",
			answer2: "A Smack",
			answer3: "A Herd",
			answer4: "A Murder",
			correct: "A Smack",
			image: "<img src='jellyfish.gif'"
			},
			{
			question: "In 1889, the queen of italy, Margherita Savoy,...",
			answer1: "was the first person to have a pet giraffe.",
			answer2: "created the first margherita pizza.",
			answer3: "ordered the first pizza delivery.",
			answer4: "held the first cooking competition.",
			correct: "ordered the first pizza delivery.",
			image: "<img src='pizza.gif'"
			},
			// {
			// question: ,
			// answer1: ,
			// answer2: ,
			// answer3: ,
			// answer4: ,
			// image: 
			// },
			// {
			// question: ,
			// answer1: ,
			// answer2: ,
			// answer3: ,
			// answer4: ,
			// image: 
			// },
			// {
			// question: ,
			// answer1: ,
			// answer2: ,
			// answer3: ,
			// answer4: ,
			// image: 
			// },
			// {
			// question: ,
			// answer1: ,
			// answer2: ,
			// answer3: ,
			// answer4: ,
			// image: 
			// },
			// {
			// question: ,
			// answer1: ,
			// answer2: ,
			// answer3: ,
			// answer4: ,
			// image: 
			// },
			// {
			// question: ,
			// answer1: ,
			// answer2: ,
			// answer3: ,
			// answer4: ,
			// image: 
			// }
			],

		// variable for time

		time: 30,

		// variable for what the current question is

		qNumber: 0,

		// variable correct answers

		correct: 0,

		// variable incorrect answers

		incorrect: 0,

		// variable unanswered questions

		unanswered: 0,

		// *************reset function

		reset: function() {
			game.time = 30;
			game.qNumber = 1;
			game.correct = 0;
			game.incorrect = 0;
			game.unanswered = 0;

			$("#time").html("");
			$("#question").html("");
			$("#buttons").html("<button id ='start'>Start</button>")
		},

		// Start button click creates the time remaining object and calls the forloop to start 

		start: function() {
			$("#time").html(game.time);
			game.countdown = setInterval(game.count, 1000);

		}, //end of start function

		//what the set interval does which is subtract one second from game.time

		count: function() {

			game.time--;
			
			// if statement to check when time gets to zero

			if (game.time <= 0) {
				game.stop();
			}

			// puts the current time left on the page
			$("#time").html(game.time);
			

		}, // End of count function

		// stops the set interval

		stop: function() {
			clearInterval(game.countdown);
		}, // end of stop function

		// for loop that contains all the objects

		questionCycle: function() {

			// call function for time

			game.start();

			// get question from array

			$("#question").html(game.questions[game.qNumber].question);

			// get answer options

			$("#buttons").html("<button class='guess' data-answer='" + game.questions[game.qNumber].correct + "'>" + game.questions[game.qNumber].answer1 + "</button><br>");
			$("#buttons").append("<button class='guess' data-answer='" + game.questions[game.qNumber].correct + "'>" + game.questions[game.qNumber].answer2 + "</button><br>");
			$("#buttons").append("<button class='guess' data-answer='" + game.questions[game.qNumber].correct + "'>" + game.questions[game.qNumber].answer3 + "</button><br>");
			$("#buttons").append("<button class='guess' data-answer='" + game.questions[game.qNumber].correct + "'>" + game.questions[game.qNumber].answer4 + "</button>");

			// onclick buttons

			$(".guess").click(game.goodGuess);

		}, // End of for loop function to cycle through questions

		// if the timer reaches 0 move to the correct answer slide and unanswered count ++

		// timer for correct answer slide, incorrect answer slide, and time out slide on zero moves to the next part of the array

		goodGuess: function() {

			// if 

			// // ******Where does this go? Changes the question number

			// game.qNumber++;

		}, // End of correct function

		// if statement for onclick buttons to have class correct, say "Correct", have the correct answer, pull image, andcorrect count ++

		// else statemen for onclick buttons to yield you got it wrong and show the right answer page incorrect count ++

		// End slide after for loop that contains: All done, here's how you did!, correct answers:, Incorrect Answers:, Unanswered:, Start Over? reset button that calls reset variable


	}; // end game object

	// Start button click listener calls the start method

	$("#start").click(game.questionCycle);

}; // Ends window.onload function