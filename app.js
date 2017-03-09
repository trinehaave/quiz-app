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
  		question: 'Which of these activities does a sloth do faster?',
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

//register when start button is clicked and removes div with heading 
//and start button 
function clickStart() {
	$('.js-startPage').on('click', 'button', function(event) {
		
		$('.js-startPage').remove();
		$('#question-container').removeClass('hidden');
	})
};

//register when an answer/button has been clicked/chosen by the user
function clickAnswer(chosenElement, state){
		
		var chosenAnswer = $(chosenElement).val();

//if the chosen answer is correct, then tell the user "correct", otherwise "wrong :("
		if(chosenAnswer == state.questions[state.currentQuestion].answerCorrect) {
			
			state.userScore += 1;
			$('.response1').text('Correct!');
		} else {
			$('.response1').text('Wrong :(');
//add class "wrong answer" so that the button that was clicked can be
//marked with a red colour
			$(chosenElement).addClass('wrong-answer');
		}

//add class to the correct answer so that this can be highlighted in green
		$('.button' + state.questions[state.currentQuestion].answerCorrect).addClass('button-correct');

//remove hover class from button so the highlighted answers will still stay red and green
//when you hover over them	
		$('button').removeClass('hover');

//show result
		$('.result').removeClass('hidden');
//show continue button
		$('.js-continue').removeClass('hidden');
//disable the answer buttons so user cannot continue clicking them
		$('.js-answer').attr('disabled', true);

		return state;
}


function clickContinue(state){
//increment which question user is on by one when continue is clicked 
		state.currentQuestion += 1;
//hide continue button and result again, remove questions and answer
		$('.js-continue').addClass('hidden');
		$('.result').addClass('hidden');
		$('section').remove();

//if quiz is done insert "you're done" and user's score
//remove count and score from bottom of page
		if(state.currentQuestion > 9) {
			$('body').append('<h1 class="end">You\'re done!</h1><p class ="endScore">You scored ' + state.userScore + " out of " + state.currentQuestion);
			$('.js-count').remove();
			$('.js-score').remove();

		} else {
//if quiz is not done insert new question and answers and update user score and question count
		$('#question-container').append("<section class = 'question-container col-8'>" +
			"<p class='question'>" + state.questions[state.currentQuestion].question + "</p><br>" +
			"<button class='button0 js-answer hover' value = '0'>" + state.questions[state.currentQuestion].answers[0] + "</button><br>" +
			"<button class='button1 js-answer hover' value = '1'>" + state.questions[state.currentQuestion].answers[1] + "</button><br>" +
			"<button class='button2 js-answer hover' value = '2'>" + state.questions[state.currentQuestion].answers[2] + "</button><br>" +
			"<button class='button3 js-answer hover' value = '3'>" + state.questions[state.currentQuestion].answers[3] + "</button>" +
		"</section>");

		$('.js-count').text("Question: " + (state.currentQuestion + 1) + "/" + state.questions.length);
		$('.js-score').text("Correct: " + state.userScore + "/" + state.currentQuestion);
	}
//TODO: disable continue button
}

$(function(){
	clickStart();
	$('#question-container').on('click', 'button', function(event){
		
		clickAnswer($(this), state);
	});

  	$('div').on('click', '.continue-container', function(event){
		
		clickContinue(state);
	});

});
