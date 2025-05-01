// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'


export const set3: Topic = {
  topic: 'Set 3',
  level: 'Beginner',
  totalQuestions: 100,
  totalScore: 1000,
  totalTime: 6000,
  questions: [
    {
      question: 'What comes next in the series: 5, 10, 15, 20, ?',
      choices: ['25', '30', '35', '40'],
      type: 'MCQs',
      correctAnswers: ['25'],
      score: 10,
    },
    {
      question: 'If the perimeter of a square is 36 cm, what is the length of one side?',
      choices: ['8 cm', '9 cm', '7 cm', '6 cm'],
      type: 'MCQs',
      correctAnswers: ['9 cm'],
      score: 10,
    },
  ],
};
