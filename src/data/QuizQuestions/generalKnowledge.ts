// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '..'

export const generalKnowledge: Topic = {
  topic: 'GeneralKnowledge',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: `Who is the Prime Minister of India (2024)?`,

      choices: ['Narendra Modi', 'Rahul Gandhi', 'Amit Shah', 'Manmohan Singh'],
      type: 'MCQs',
      correctAnswers: ['Narendra Modi'],
      score: 10,
    },
    {
      question: `Which is the largest planet?`,

      choices: ['Jupiter', 'Mars', 'Earth', 'Saturn'],
      type: 'MCQs',
      correctAnswers: ['Jupiter'],
      score: 10,
    },
    {
      question: `Which animal is known as the ship of the desert?`,

      choices: ['Camel', 'Horse', 'Elephant', 'Donkey'],
      type: 'MCQs',
      correctAnswers: ['Camel'],
      score: 10,
    },
    {
      question: `Capital of Maharashtra?`,

      choices: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      type: 'MCQs',
      correctAnswers: ['Mumbai'],
      score: 10,
    },
    {
      question: `Which bird can fly backward?`,

      choices: ['Hummingbird', 'Sparrow', 'Crow', 'Parrot'],
      type: 'MCQs',
      correctAnswers: ['Hummingbird'],
      score: 10,
    },
    {
      question: `National flower of India?`,

      choices: ['Lotus', 'Rose', 'Lily', 'Sunflower'],
      type: 'MCQs',
      correctAnswers: ['Lotus'],
      score: 10,
    },
    {
      question: `Largest continent?`,

      choices: ['Asia', 'Africa', 'Europe', 'Australia'],
      type: 'MCQs',
      correctAnswers: ['Asia'],
      score: 10,
    },
    {
      question: `How many states in India?`,

      choices: ['28', '29', '27', '26'],
      type: 'MCQs',
      correctAnswers: ['28'],
      score: 10,
    },
    {
      question: `Who invented the light bulb?`,

      choices: ['Thomas Edison', 'Newton', 'Einstein', 'Tesla'],
      type: 'MCQs',
      correctAnswers: ['Thomas Edison'],
      score: 10,
    },
    {
      question: `Currency of Japan?`,

      choices: ['Yen', 'Won', 'Dollar', 'Euro'],
      type: 'MCQs',
      correctAnswers: ['Yen'],
      score: 10,
    },
  ],
}
