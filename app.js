//single state object

var state = {
	questions: [
	{ 
		question: 'Approximately how many degrees can a three-toed sloth rotate its head?',
    	answers: [ '90&deg', '150&deg', '210&deg', '270&deg' ],
   		answerCorrect: 3 },
  	{ 
  		question: 'How many toes does a two-toed sloth have?',
    	answers: [ 'none', 1, 2, 3 ],
    	answerCorrect: 3 },
  	{ 
  		question: 'Which of these activies does a sloth do faster?',
    	answers: [ 'climbing', 'swimming', 'crawling', 'rolling' ],
    	answerCorrect: 1 },
  	{ 
  		question: 'Approximately how many hours a day does a sloth sleep?',
    	answers: [ 10, 13, 16, 19 ],
    	answerCorrect: 0 },
 	{ 
 		question: 'What does the diet of a sloth mainly consist of?',
    	answers: [ 'bark', 'leaves', 'insects', 'rodents' ],
    	answerCorrect: 1 },
  	{ 
  		question: 'Which animal class does the sloth belong to?',
    	answers: [ 'reptiles', 'cnidarians', 'marsupials', 'mammals' ],
    	answerCorrect: 3 },
  	{ 
  		question: 'How much does a two-toed sloth weigh?',
    	answers: [ '2-6 kg', '4-9 kg', '6-12 kg', '9-15 kg' ],
    	answerCorrect: 1 },
  	{ 
  		question: 'In what part of the world do sloths live?',
    	answers: 
     		[ 'Central and North America',
       		'Australia',
       		'Central and South America',
       		'South East Asia' ],
    	answerCorrect: 2 },
  	{ 
  		question: 'What does the scientific name for sloths - Bradypus - mean?',
    	answers: [ 'happy feet', 'slow feet', 'sharp toes', 'always smiling' ],
    	answerCorrect: 1 },
  	{ 
  		question: 'Where do sloths spend most of their time?',
    	answers: [ 'In caves', 'Under trees', 'In the ocean', 'In trees' ],
    	answerCorrect: 3 } ],

	currentQuestion: 0,
	userScore: 0
}

function clickStart() {
	$('.js-startPage').on('click', 'button', function(event) {
		event.preventDefault();
		$('.js-startPage').remove();
		$('#yup').removeClass('hidden');
	})
};

function clickAnswer(){
	$('#yup').on('click', 'button', function(event){
		
		event.preventDefault();
		var chosenAnswer = $(this).val();

		console.log(chosenAnswer);

		if(chosenAnswer == state.questions[state.currentQuestion].answerCorrect) {
			
			state.userScore += 1;
			$('.response1').text('Correct!');
			$('.response2').text('');

		} else {
			$('.response1').text('Wrong :(');
			$('.response2').text('The correct answer is highlighted!');
		}

		$('.button' + state.questions[state.currentQuestion].answerCorrect).addClass('button-correct');
		$(this).addClass('button-chosen');
		$('button').removeClass('hover');

		$('.result').removeClass('hidden');
		console.log(state.userScore);

		$('.js-continue').removeClass('hidden');

		$('.js-answer').attr('disabled', true);
	});
}

function clickContinue(){
	$('div').on('click', '.continue-container', function(event){
		event.preventDefault();

		state.currentQuestion += 1;

		$('.js-continue').addClass('hidden');
		$('.result').addClass('hidden');
		$('section').remove();

		if(state.currentQuestion > 9) {
			$('body').append('<h1 class="end">You\'re done!</h1><p class ="endScore">You scored ' + state.userScore + " out of " + state.currentQuestion);
			$('.js-count').remove();
			$('.js-score').remove();

		} else {


		$('#yup').append("<section class = 'question-container col-8'>" +
			"<p class='question'>" + state.questions[state.currentQuestion].question + "</p><br>" +
			"<button class='button0 js-answer hover' value = '0'>" + state.questions[state.currentQuestion].answers[0] + "</button><br>" +
			"<button class='button1 js-answer hover' value = '1'>" + state.questions[state.currentQuestion].answers[1] + "</button><br>" +
			"<button class='button2 js-answer hover' value = '2'>" + state.questions[state.currentQuestion].answers[2] + "</button><br>" +
			"<button class='button3 js-answer hover' value = '3'>" + state.questions[state.currentQuestion].answers[3] + "</button>" +
		"</section>");

		$('.js-count').text("Question: " + (state.currentQuestion + 1) + "/" + state.questions.length);
		$('.js-score').text("Correct: " + state.userScore + "/" + state.currentQuestion);
	}


	});
}

$(function(){
	clickStart();
  	clickContinue();
  	clickAnswer();

});

/*
//state modification functions
//Pass these into event listener functions?



//functions that render state
//one single function for each part of the page that one wants to update
function removeStartPage () {
	$(.'js-startPage').remove();
}

function postNextQuestion () {
	var questionPosition = state.questions[i];

		$('#questionPosition').append(
			"<div class = 'question-container col-8'>" +
			"<p class='question'>" + questionPosition.question + "</p><br>" +
			"<button class='button0 js-answer' value = '0'>" + .questionPosition.answers[0] + "</button><br>" +
			"<button class='button1 js-answer' value = '1'>" + .questionPosition.answers[1] + "</button><br>" +
			"<button class='button2 js-answer' value = '2'>" + .questionPosition.answers[2] + "</button><br>" +
			"<button class='button3 js-answer' value = '3'>" + .questionPosition.answers[3] + "</button>" +
		"</div>" +)
}

function showContinueButton() {
	$('.continue').removeClass('hidden');
}

/*
Render functions example from Thinkful

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
};*/



/*
function clickStart(){
	$('button')on('click', '.js-answer', function(event){
		//if right, alert right, else if wrong, alert wrong and show correct answer
		//show continue button
		//remove hidden class for page count and right answers?
});
}

function clickContinue(){
	$('button')on('click', '.js-continue', function(event){
		//some function that removes old question
		state.currentQuestion += 1;
		$()
		//some function that shows new question
		//increment count for question
	$('.js-continue').addClass('hidden');

	});
}

function clickAnswer(){
	$('button')on('click', '.js-answer', function(event){
		//if right alert right, else if wrong alert wrong and correct answer
		var chosenAnswer = $(this).val();
		if( chosenAnswer === answercorrect[i]) {
			//increment number of right or wromg answers
			state.userScore += 1;
		}

		$('.js-continue').removeClass('hidden');

		//show continue button
		//remove class hidden from continue button
});
}
*/
