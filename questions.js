function Question(question, ans1, ans2, ans3, ans4, correct) {
  this.question = question;
  this.answers = [ans1, ans2, ans3, ans4];
  this.answerCorrect = correct;
}

var q1 = new Question('Approximately how many degrees can a three-toed sloth rotate its head?', '90&deg', '150&deg', '210&deg', '270&deg', 3);
var q2 = new Question('How many toes does a two-toed sloth have?', 'none', 1, 2, 3, 3);
var q3 = new Question('Which of these activies does a sloth do faster?', 'climbing', 'swimming', 'crawling', 'rolling', 1);
var q4 = new Question('Approximately how many hours a day does a sloth sleep?', 10, 13, 16, 19, 0);
var q5 = new Question('What does the diet of a sloth mainly consist of?', 'bark', 'leaves', 'insects', 'rodents', 1);
var q6 = new Question('What animal class does the sloth belong to?', 'reptiles', 'cnidarians', 'marsupials', 'mammals', 3);
var q7 = new Question('How much does a two-toed sloth weigh?', '2-6 kg', '4-9 kg', '6-12 kg', '9-15 kg', 1);
var q8 = new Question('In what part of the world do sloths live', 'Central and North America', 'Australia', 'Central and South America', 'South East Asia', 2);
var q9 = new Question('What does the scientific name for sloths - Bradypus - mean?', 'happy feet', 'slow feet', 'sharp toes', 'always smiling', 1);
var q10 = new Question('Where do sloths spend most of their time?', 'In caves', 'Under trees', 'In the ocean', 'In trees', 3);

var list = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
