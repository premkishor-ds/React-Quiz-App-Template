// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const reasoning: Topic = {
  topic: 'Reasoning',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: `Find the odd one: 2, 4, 8, 16, 34`,

      choices: ['34', '2', '4', '8'],
      type: 'MCQs',
      correctAnswers: ['34'],
      score: 10,
    },
    {
      question: `If A = 1, B = 2, then Z = ?`,

      choices: ['26', '25', '24', '23'],
      type: 'MCQs',
      correctAnswers: ['26'],
      score: 10,
    },
    {
      question: `Next number in series: 3, 6, 12, 24, ?`,

      choices: ['48', '30', '36', '40'],
      type: 'MCQs',
      correctAnswers: ['48'],
      score: 10,
    },
    {
      question: `Which is different: Circle, Square, Triangle, Tomato`,

      choices: ['Tomato', 'Circle', 'Square', 'Triangle'],
      type: 'MCQs',
      correctAnswers: ['Tomato'],
      score: 10,
    },
    {
      question: `Complete: Foot is to Shoe as Head is to ___`,

      choices: ['Cap', 'Hand', 'Scarf', 'Ear'],
      type: 'MCQs',
      correctAnswers: ['Cap'],
      score: 10,
    },
    {
      question: `Which does not belong: Apple, Mango, Banana, Carrot`,

      choices: ['Carrot', 'Apple', 'Mango', 'Banana'],
      type: 'MCQs',
      correctAnswers: ['Carrot'],
      score: 10,
    },
    {
      question: `Which number comes next: 1, 4, 9, 16, ?`,

      choices: ['25', '20', '22', '24'],
      type: 'MCQs',
      correctAnswers: ['25'],
      score: 10,
    },
    {
      question: `Rearrange to form word: 'LLEW'`,

      choices: ['WELL', 'LEWL', 'ELWL', 'LWEL'],
      type: 'MCQs',
      correctAnswers: ['WELL'],
      score: 10,
    },
    {
      question: `How many sides does a hexagon have?`,

      choices: ['6', '5', '4', '8'],
      type: 'MCQs',
      correctAnswers: ['6'],
      score: 10,
    },
    {
      question: `Which is heavier: 1 kg iron or 1 kg cotton?`,

      choices: ['Equal', 'Iron', 'Cotton', 'None'],
      type: 'MCQs',
      correctAnswers: ['Equal'],
      score: 10,
    },
  ],
}
