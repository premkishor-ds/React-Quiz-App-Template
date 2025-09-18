import { Topic } from '.'

export const math: Topic = {
  topic: 'Mathematics',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: `What is 12 × 8?`,

      choices: ['96', '84', '108', '112'],
      type: 'MCQs',
      correctAnswers: ['96'],
      score: 10,
    },
    {
      question: `What is the square of 15?`,

      choices: ['225', '255', '210', '240'],
      type: 'MCQs',
      correctAnswers: ['225'],
      score: 10,
    },
    {
      question: `Find the value of: 81 ÷ 9`,

      choices: ['9', '8', '7', '6'],
      type: 'MCQs',
      correctAnswers: ['9'],
      score: 10,
    },
    {
      question: `What is 50% of 200?`,

      choices: ['100', '150', '50', '75'],
      type: 'MCQs',
      correctAnswers: ['100'],
      score: 10,
    },
    {
      question: `If a rectangle has length 12 and breadth 5, what is its area?`,

      choices: ['60', '30', '17', '45'],
      type: 'MCQs',
      correctAnswers: ['60'],
      score: 10,
    },
    {
      question: `Simplify: 3 + 6 × 2`,

      choices: ['15', '18', '21', '12'],
      type: 'MCQs',
      correctAnswers: ['15'],
      score: 10,
    },
    {
      question: `How many sides does a pentagon have?`,

      choices: ['5', '6', '7', '8'],
      type: 'MCQs',
      correctAnswers: ['5'],
      score: 10,
    },
    {
      question: `Which is a prime number?`,

      choices: ['13', '15', '21', '25'],
      type: 'MCQs',
      correctAnswers: ['13'],
      score: 10,
    },
    {
      question: `What comes next in the pattern: 2, 4, 8, 16, ?`,

      choices: ['32', '30', '24', '28'],
      type: 'MCQs',
      correctAnswers: ['32'],
      score: 10,
    },
    {
      question: `Find the LCM of 4 and 5`,

      choices: ['20', '9', '10', '15'],
      type: 'MCQs',
      correctAnswers: ['20'],
      score: 10,
    },
  ],
}
