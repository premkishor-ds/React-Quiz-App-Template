// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const english: Topic = {
  topic: 'English',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: `Choose the correct spelling:`,

      choices: ['Occasion', 'Ocassion', 'Occasssion', 'Occacion'],
      type: 'MCQs',
      correctAnswers: ['Occasion'],
      score: 10,
    },
    {
      question: `Identify the verb: 'He runs every morning.'`,

      choices: ['runs', 'every', 'He', 'morning'],
      type: 'MCQs',
      correctAnswers: ['runs'],
      score: 10,
    },
    {
      question: `Choose the correct article: 'I saw ___ elephant.'`,

      choices: ['an', 'a', 'the', 'no article'],
      type: 'MCQs',
      correctAnswers: ['an'],
      score: 10,
    },
    {
      question: `Pick the noun: 'The sun shines brightly.'`,

      choices: ['sun', 'shines', 'brightly', 'The'],
      type: 'MCQs',
      correctAnswers: ['sun'],
      score: 10,
    },
    {
      question: `Choose the synonym of 'Happy'`,

      choices: ['Joyful', 'Sad', 'Angry', 'Tired'],
      type: 'MCQs',
      correctAnswers: ['Joyful'],
      score: 10,
    },
    {
      question: `Antonym of 'Cold'`,

      choices: ['Hot', 'Cool', 'Warm', 'Soft'],
      type: 'MCQs',
      correctAnswers: ['Hot'],
      score: 10,
    },
    {
      question: `Fill in the blank: She ___ singing.`,

      choices: ['is', 'are', 'am', 'were'],
      type: 'MCQs',
      correctAnswers: ['is'],
      score: 10,
    },
    {
      question: `Pick the adjective: 'The blue sky was clear.'`,

      choices: ['blue', 'sky', 'was', 'clear'],
      type: 'MCQs',
      correctAnswers: ['blue'],
      score: 10,
    },
    {
      question: `What is the plural of 'Mouse'?`,

      choices: ['Mice', 'Mouses', 'Mouse', 'Mousees'],
      type: 'MCQs',
      correctAnswers: ['Mice'],
      score: 10,
    },
    {
      question: `Which word is a preposition?`,

      choices: ['under', 'walk', 'quickly', 'boy'],
      type: 'MCQs',
      correctAnswers: ['under'],
      score: 10,
    },
  ],
};
