//waits for js to start until after html has loaded

$(document).ready(function(){

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
			image: "<img src='jellyfish.gif'"
			},
			{
			question: "In 1889, the queen of italy, Margherita Savoy,...",
			answer1: "was the first to have a pet giraffe.",
			answer2: "created the diving board.",
			answer3: "ordered the first pizza delivery.",
			answer4: "held the first cooking competition.",
			image: "<img src='pizza.gif'"
			},
			{
			question: ,
			answer1: ,
			answer2: ,
			answer3: ,
			answer4: ,
			image: 
			},
			{
			question: ,
			answer1: ,
			answer2: ,
			answer3: ,
			answer4: ,
			image: 
			},
			{
			question: ,
			answer1: ,
			answer2: ,
			answer3: ,
			answer4: ,
			image: 
			},
			{
			question: ,
			answer1: ,
			answer2: ,
			answer3: ,
			answer4: ,
			image: 
			},
			{
			question: ,
			answer1: ,
			answer2: ,
			answer3: ,
			answer4: ,
			image: 
			},
			{
			question: ,
			answer1: ,
			answer2: ,
			answer3: ,
			answer4: ,
			image: 
			}]
		},

		// correct slide object array contains - Correct!, 

		// incorrect slide object array contains - 

		// variable correct answers

		// variable incorrect answers

		// variable unanswered questions

		// variable reset

		// fill reset variable

		// Start button onclick creates the time remaining object and calls the forloop to start 

		// for loop that contains all the objects

		// timer for each slide

		// if the timer reaches 0 move to the correct answer slide and unanswered count ++

		// timer for correct answer slide, incorrect answer slide, and time out slide on zero moves to the next part of the array

		// if statement for onclick buttons to have class correct, say "Correct", have the correct answer, pull image, andcorrect count ++

		// else statemen for onclick buttons to yield you got it wrong and show the right answer page incorrect count ++

		// End slide after for loop that contains: All done, here's how you did!, correct answers:, Incorrect Answers:, Unanswered:, Start Over? (reset button)

		// reset button that calls reset variable


	} // end game object

}) //ends ready function