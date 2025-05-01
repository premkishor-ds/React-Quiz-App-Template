// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const set1: Topic = {
  topic: 'Set1',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
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
    {
      question: 'What is 12% of 200?',
      choices: ['24', '28', '22', '26'],
      type: 'MCQs',
      correctAnswers: ['24'],
      score: 10,
    },
    {
      question:
        'The area of a rectangle is 48 cm² and its length is 8 cm. What is the width?',
      choices: ['4 cm', '6 cm', '5 cm', '7 cm'],
      type: 'MCQs',
      correctAnswers: ['6 cm'],
      score: 10,
    },
    {
      question: 'What is the value of (15 ÷ 3) × 4?',
      choices: ['15', '12', '18', '20'],
      type: 'MCQs',
      correctAnswers: ['20'],
      score: 10,
    },
    {
      question: "Choose the correct synonym for 'happy':",
      choices: ['sad', 'joyful', 'angry', 'bored'],
      type: 'MCQs',
      correctAnswers: ['joyful'],
      score: 10,
    },
    {
      question: 'Select the correct sentence:',
      choices: [
        "He don't like coffee.",
        "He doesn't like coffee.",
        "He didn't likes coffee.",
        "He don't likes coffee.",
      ],
      type: 'MCQs',
      correctAnswers: ["He doesn't like coffee."],
      score: 10,
    },
    {
      question: "What is the plural of 'child'?",
      choices: ['children', 'childs', 'childrens', 'childes'],
      type: 'MCQs',
      correctAnswers: ['children'],
      score: 10,
    },
    {
      question: "Which of the following is an antonym of 'hard'?",
      choices: ['soft', 'strong', 'tough', 'rough'],
      type: 'MCQs',
      correctAnswers: ['soft'],
      score: 10,
    },
    {
      question:
        "Choose the correct punctuation: 'She said she will go to the market ____'.",
      choices: ['.', ',', '!', '?'],
      type: 'MCQs',
      correctAnswers: ['.'],
      score: 10,
    },
  ],
}
