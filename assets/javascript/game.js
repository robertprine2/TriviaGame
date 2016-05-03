// load js right away, possbily before html is finished loading

window.onload = function() {

	//game object to contain variables and methods

	var game = {

		// question slide object array that contains - question, answer1, answer2, answer3, answer4,

		questions:
			[
			{
			question: "What is a group of jellyfish called?",
			answer1: "A School",
			answer2: "A Smack",
			answer3: "A Herd",
			answer4: "A Murder",
			correct: "A Smack",
			image: "<img src='assets/images/jellyfish.gif'>"
			},
			{
			question: "In 1889, the queen of Italy, Margherita Savoy,...",
			answer1: "was the first person to have a pet giraffe.",
			answer2: "created the first margherita pizza.",
			answer3: "ordered the first pizza delivery.",
			answer4: "held the first cooking competition.",
			correct: "ordered the first pizza delivery.",
			image: "<img src='assets/images/pizza.gif'>"
			},
			{
			question: "How many calories do you burn an hour banging your head against a wall?",
			answer1: "150 calories",
			answer2: "25 calories",
			answer3: "75 calories",
			answer4: "2000 calories",
			correct: "150 calories",
			image: "<img src='assets/images/headwall.gif'>"
			},
			{
			question: "What can happen when a hippo is upset?",
			answer1: "Its sweat turns red.",
			answer2: "It will eat its troubles away.",
			answer3: "It runs away.",
			answer4: "It hums eye of the tiger as it starts to charge you.",
			correct: "Its sweat turns red.",
			image: "<img src='assets/images/hippo.gif'>"
			},
			{
			question: "What do billy goats do to attract females?",
			answer1: "They make a nest which attracts females.",
			answer2: "They sprout colorful feathers and show them off.",
			answer3: "They dance on their hind legs to impress them.",
			answer4: "They urinate on their own heads to smell better.",
			correct: "They urinate on their own heads to smell better.",
			image: "<img src='assets/images/goat.gif'>"
			},
			{
			question: "What did the person who invented the Frisbee have done to himself when he died?",
			answer1: "He had his ashes spread over a disc golf course.",
			answer2: "He had his ashes put in a bottle and thrown into the ocean.",
			answer3: "He had his ashes made into Frisbees.",
			answer4: "He had his ashes put into the foundation of the house he built for his grandchild.",
			correct: "He had his ashes made into Frisbees.",
			image: "<img src='assets/images/frisbee.gif'>"
			},
			{
			question: "During your lifetime, you will produce enough saliva to fill...",
			answer1: "six cups.",
			answer2: "the Great Salt Lake.",
			answer3: "three bathtubs.",
			answer4: "two swimming pools.",
			correct: "two swimming pools.",
			image: "<img src='assets/images/drool.gif'>"
			},
			{
			question: "Which of these is not a paradox?",
			answer1: 'If Pinocchio said, "My nose will grow now."',
			answer2: "Nobody goes to the restaurant because it is too crowded.",
			answer3: "You shouldn't go into the water until you know how to swim.",
			answer4: "Six fat chickens have feathers.",
			correct: "Six fat chickens have feathers.",
			image: "<img src='assets/images/nose.gif'>"
			}
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

		// Reset function

		reset: function() {
			game.time = 30;
			game.qNumber = 0;
			game.correct = 0;
			game.incorrect = 0;
			game.unanswered = 0;

			$("#time").html("");
			$("#question").html("");
			$("#buttons").html("<button id ='start'>Start</button>")
			$("#start").click(game.questionCycle);
		},

		// Start button click creates the time remaining object and calls the forloop to start 

		start: function() {
			$("#time").html("<p>Time Remaining: " + game.time + " Seconds</p>");
			game.countdown = setInterval(game.count, 1000);

		}, //end of start function

		//what the set interval does which is subtract one second from game.time

		count: function() {

			game.time--;
			
			// puts the current time left on the page

			$("#time").html("<p>Time Remaining: " + game.time + " Seconds</p>");

			// if the timer reaches 5 seconds call ticking sound

			if (game.time == 5) {
				new Audio("assets/sounds/tick.mp3").play();
			}

			// if the timer reaches 0 move to the correct answer slide and unanswered count ++

			if (game.time <= 0) {
				game.unanswered++;
				game.stop();

				$("#question").html("<p>Out of Time!</p>");
				$("#buttons").html("<p>The correct answer was: " + game.questions[game.qNumber].correct + "</p>");
				$("#buttons").append(game.questions[game.qNumber].image);

				game.qNumber++;
				game.time = 30;

				new Audio("assets/sounds/horn.mp3").play();

				// if statement to check when to go to the end slide
				
				if (game.qNumber == 8) {
					game.end();
				}

				else {
					game.timeout();
				}
			}

			
			

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

			$("#buttons").html("<button class='guess' data-answer='" + game.questions[game.qNumber].answer1 + "'>" + game.questions[game.qNumber].answer1 + "</button><br>");
			$("#buttons").append("<button class='guess' data-answer='" + game.questions[game.qNumber].answer2 + "'>" + game.questions[game.qNumber].answer2 + "</button><br>");
			$("#buttons").append("<button class='guess' data-answer='" + game.questions[game.qNumber].answer3 + "'>" + game.questions[game.qNumber].answer3 + "</button><br>");
			$("#buttons").append("<button class='guess' data-answer='" + game.questions[game.qNumber].answer4 + "'>" + game.questions[game.qNumber].answer4 + "</button>");

			// onclick buttons

			$(".guess").click(game.goodGuess);

		}, // End of function to cycle through questions

		// timer for correct answer slide, incorrect answer slide, and time out slide on zero moves to the next part of the array

		timeout: function() {
			var wait = setTimeout(game.questionCycle, 5000);
		},

		// Determines if the guess is right or wrong

		goodGuess: function() {

			// if statement for onclick buttons to have class correct, say "Correct", have the correct answer, pull image, andcorrect count ++

			if (($(this).data("answer")) === game.questions[game.qNumber].correct) {
				game.correct++;
				game.stop();

				new Audio("assets/sounds/clap.mp3").play();

				$("#question").html("<p>Correct!</p>");
				
				$("#buttons").html(game.questions[game.qNumber].image);

				game.qNumber++;
				game.time = 30;

				

				// if statement to check when to go to the end slide
				
				if (game.qNumber == 8) {
					game.end();
				}

				else {
					game.timeout();
				}
				

			} // End of if statment comparing data and correct answer

			// else statemen for onclick buttons to yield you got it wrong and show the right answer page incorrect count ++

			else {
				game.incorrect++;
				game.stop();

				new Audio("assets/sounds/wrong.wav").play();

				$("#question").html("<p>Nope!</p>");
				$("#buttons").html("<p>The correct answer was: " + game.questions[game.qNumber].correct + "</p>");
				$("#buttons").append(game.questions[game.qNumber].image);

				game.qNumber++;
				game.time = 30;
				
				// if statement to check when to go to the end slide
				
				if (game.qNumber == 8) {
					game.end();
				}

				else {
					game.timeout();
				}

			} // End of else statement comparing data and correct answer
			

		}, // End of correct function

		// End slide after for loop that contains: All done, here's how you did!, correct answers:, Incorrect Answers:, Unanswered:, Start Over? reset button that calls reset variable

		end: function() {

			game.stop();

			$("#question").html("<p>You did it! Here are your results:</p>");
			$("#buttons").html("<p>Correct Answers: " + game.correct + "</p>");
			$("#buttons").append("<p>Incorrect Answers: " + game.incorrect + "</p>");
			$("#buttons").append("<p>Unanswered: " + game.unanswered + "</p>");
			$("#buttons").append("<button id='reset'>Start Over?</button>");

			$("#reset").click(game.reset);

		} // End of end function

	}; // end game object

	// Start button click listener calls the start method

	$("#start").click(game.questionCycle);
	

}; // Ends window.onload function