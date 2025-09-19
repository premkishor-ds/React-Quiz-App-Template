import { Topic } from '.'

export const mixed: Topic = {
  topic: 'Mixed Quiz',
  level: 'Beginner to Intermediate',
  totalQuestions: 20,
  totalScore: 200,
  totalTime: 1200,
  questions: [
    // Mathematics
    {
      question: 'What is 15 × 8?',
      choices: ['120', '125', '115', '130'],
      type: 'MCQs',
      correctAnswers: ['120'],
      score: 10,
    },
    {
      question: 'What is the area of a rectangle with length 12 cm and width 5 cm?',
      choices: ['60 cm²', '50 cm²', '70 cm²', '55 cm²'],
      type: 'MCQs',
      correctAnswers: ['60 cm²'],
      score: 10,
    },
    // English
    {
      question: 'Choose the correct spelling:',
      choices: ['Recieve', 'Receive', 'Receeve', 'Receve'],
      type: 'MCQs',
      correctAnswers: ['Receive'],
      score: 10,
    },
    {
      question: 'What is the synonym of "Happy"?',
      choices: ['Sad', 'Joyful', 'Angry', 'Tired'],
      type: 'MCQs',
      correctAnswers: ['Joyful'],
      score: 10,
    },
    // General Knowledge
    {
      question: 'Who is the current Prime Minister of India?',
      choices: ['Narendra Modi', 'Rahul Gandhi', 'Amit Shah', 'Manmohan Singh'],
      type: 'MCQs',
      correctAnswers: ['Narendra Modi'],
      score: 10,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      type: 'MCQs',
      correctAnswers: ['Mars'],
      score: 10,
    },
    // Reasoning
    {
      question: 'Find the next number: 2, 4, 8, 16, ?',
      choices: ['24', '32', '20', '28'],
      type: 'MCQs',
      correctAnswers: ['32'],
      score: 10,
    },
    {
      question: 'Which is the odd one out?',
      choices: ['Apple', 'Banana', 'Carrot', 'Mango'],
      type: 'MCQs',
      correctAnswers: ['Carrot'],
      score: 10,
    },
    // Boolean questions
    {
      question: 'The Earth is round.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: 'Water boils at 90°C.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 10,
    },
    // Multiple Answer Questions
    {
      question: 'Which of the following are primary colors?',
      choices: ['Red', 'Blue', 'Green', 'Yellow'],
      type: 'MAQs',
      correctAnswers: ['Red', 'Blue', 'Yellow'],
      score: 10,
    },
    {
      question: 'Which of these are mammals?',
      choices: ['Dog', 'Fish', 'Cat', 'Bird'],
      type: 'MAQs',
      correctAnswers: ['Dog', 'Cat'],
      score: 10,
    },
    // More mixed questions
    {
      question: 'What is the capital of France?',
      choices: ['London', 'Berlin', 'Paris', 'Rome'],
      type: 'MCQs',
      correctAnswers: ['Paris'],
      score: 10,
    },
    {
      question: 'Complete the analogy: Book : Read :: Pen : ?',
      choices: ['Write', 'Paper', 'Ink', 'Draw'],
      type: 'MCQs',
      correctAnswers: ['Write'],
      score: 10,
    },
    {
      question: 'What is 25% of 80?',
      choices: ['15', '20', '25', '30'],
      type: 'MCQs',
      correctAnswers: ['20'],
      score: 10,
    },
    {
      question: 'The Sun rises in the East.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: 'Which of these are continents?',
      choices: ['Asia', 'Europe', 'India', 'Africa'],
      type: 'MAQs',
      correctAnswers: ['Asia', 'Europe', 'Africa'],
      score: 10,
    },
    {
      question: 'What comes next in the series: A, C, E, G, ?',
      choices: ['H', 'I', 'J', 'K'],
      type: 'MCQs',
      correctAnswers: ['I'],
      score: 10,
    },
    {
      question: 'Choose the correct past tense of "go":',
      choices: ['Goed', 'Went', 'Gone', 'Going'],
      type: 'MCQs',
      correctAnswers: ['Went'],
      score: 10,
    },
    {
      question: 'India has 28 states.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
  ],
}