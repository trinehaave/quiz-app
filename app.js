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
  		question: 'What animal class does the sloth belong to?',
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
function clickAnswer(){
	$('#yup').on('click', 'button', function(event){
		event.preventDefault();
		//if right alert right, else if wrong alert wrong and correct answer
		console.log('hi!');
		var chosenAnswer = $(this).val();

		console.log(chosenAnswer);

		if(chosenAnswer == state.questions[state.currentQuestion].answerCorrect) {
			//increment number of right or wromg answers
			state.userScore += 1;
		}

		console.log(state.userScore);

		$('.continue-container').removeClass('hidden');

		//show continue button
		//remove class hidden from continue button
	});
}

function clickContinue(){
	$('div').on('click', '.continue-container', function(event){
		event.preventDefault();

		state.currentQuestion += 1;

		$(this).addClass('hidden');
		$('section').remove();
		
		$('#yup').append("<section class = 'question-container col-8'>" +
			"<p class='question'>" + state.questions[state.currentQuestion].question + "</p><br>" +
			"<button class='button0 js-answer' value = '0'>" + state.questions[state.currentQuestion].answers[0] + "</button><br>" +
			"<button class='button1 js-answer' value = '1'>" + state.questions[state.currentQuestion].answers[1] + "</button><br>" +
			"<button class='button2 js-answer' value = '2'>" + state.questions[state.currentQuestion].answers[2] + "</button><br>" +
			"<button class='button3 js-answer' value = '3'>" + state.questions[state.currentQuestion].answers[3] + "</button>" +
		"</section>");

	});
}

$(function(){
  
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
