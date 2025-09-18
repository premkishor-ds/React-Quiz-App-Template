import { Topic } from ".";

//Coding — Decoding(Numeric)
export const CodingDecoding4: Topic = {
  topic: 'Mathematics',
  level: 'Advanced',
  totalQuestions: 20, // since you listed 20 questions
  totalScore: 200,    // 20 * 10
  totalTime: 1200,    // e.g. 20 mins
  questions: [
    {
      "question": "In a code, A=1, B=2, … Z=26. The word 'DOG' is written as?",
      "choices": ["4-15-7", "3-14-6", "5-16-8", "4-14-7"],
      "type": "MCQs",
      "correctAnswers": ["4-15-7"],
      "score": 10
    },
    {
      "question": "If CAT = 3+1+20 = 24, what is DOG?",
      "choices": ["4+15+7=26", "5+16+8=29", "4+15+7=26", "3+14+6=23"],
      "type": "MCQs",
      "correctAnswers": ["4+15+7=26"],
      "score": 10
    },
    {
      "question": "In a code, each letter is replaced by its position squared. A=1, B=4, …. How is 'BAD' written?",
      "choices": ["4-1-16", "2-1-4", "4-1-9", "2-4-16"],
      "type": "MCQs",
      "correctAnswers": ["4-1-16"],
      "score": 10
    },
    {
      "question": "In a numeric code, each letter is assigned a prime number sequentially (A=2, B=3, C=5…). How is 'ACE' written?",
      "choices": ["2-5-11", "2-5-7", "3-5-11", "2-7-11"],
      "type": "MCQs",
      "correctAnswers": ["2-5-11"],
      "score": 10
    },
    {
      "question": "If A=1, B=2, … Z=26, the sum of letters in 'BOX' is?",
      "choices": ["2+15+24=41", "2+14+24=40", "3+15+24=42", "2+15+23=40"],
      "type": "MCQs",
      "correctAnswers": ["2+15+24=41"],
      "score": 10
    },
    {
      "question": "Each letter is represented by 2×position in alphabet. How is 'CAT' coded?",
      "choices": ["6-2-40", "6-4-40", "4-2-40", "6-2-42"],
      "type": "MCQs",
      "correctAnswers": ["6-2-40"],
      "score": 10
    },
    {
      "question": "If a word is coded as the sum of positions of letters, what is 'FUN'?",
      "choices": ["6+21+14=41", "6+20+14=40", "5+21+14=40", "6+21+13=40"],
      "type": "MCQs",
      "correctAnswers": ["6+21+14=41"],
      "score": 10
    },
    {
      "question": "A=1, B=2,… Z=26. Each letter is multiplied by 2. What is 'HI'?",
      "choices": ["16-18", "8-9", "17-19", "14-16"],
      "type": "MCQs",
      "correctAnswers": ["16-18"],
      "score": 10
    },
    {
      "question": "In a numeric code, each letter is coded as position+3. How is 'DOG' written?",
      "choices": ["7-18-10", "6-17-9", "7-15-10", "7-18-9"],
      "type": "MCQs",
      "correctAnswers": ["7-18-10"],
      "score": 10
    },
    {
      "question": "If A=1, B=2… Z=26, encode 'BEE' by sum of first and last letters minus middle letter.",
      "choices": ["B+E-E=2", "B+E-E=2", "B+E-E=1", "B+E-E=3"],
      "type": "MCQs",
      "correctAnswers": ["B+E-E=2"],
      "score": 10
    },
    {
      "question": "A=1, B=2, … Z=26. Multiply each letter's position by 3. Encode 'SUN'.",
      "choices": ["57-63-42", "57-60-42", "54-63-42", "54-60-42"],
      "type": "MCQs",
      "correctAnswers": ["57-63-42"],
      "score": 10
    },
    {
      "question": "If A=1, B=2, … Z=26, square each letter's position. Encode 'ICE'.",
      "choices": ["9-9-25", "9-3-25", "9-9-25", "9-9-16"],
      "type": "MCQs",
      "correctAnswers": ["9-9-25"],
      "score": 10
    },
    {
      "question": "Letters are encoded as 27-position. How is 'DOG'?",
      "choices": ["23-12-20", "24-12-20", "23-13-20", "24-13-20"],
      "type": "MCQs",
      "correctAnswers": ["23-12-20"],
      "score": 10
    },
    {
      "question": "Assign prime numbers sequentially to letters, A=2, B=3… Encode 'BAD'.",
      "choices": ["3-2-7", "3-2-5", "2-3-7", "2-3-5"],
      "type": "MCQs",
      "correctAnswers": ["2-3-7"],
      "score": 10
    },
    {
      "question": "If letters are coded as alphabet position modulo 5, how is 'CAT'?",
      "choices": ["3-1-0", "3-1-20", "3-1-2", "3-1-5"],
      "type": "MCQs",
      "correctAnswers": ["3-1-0"],
      "score": 10
    },
    {
      "question": "Each letter's code = (position×2)+1. Encode 'FUN'.",
      "choices": ["13-43-29", "13-43-28", "12-43-29", "13-42-29"],
      "type": "MCQs",
      "correctAnswers": ["13-43-29"],
      "score": 10
    },
    {
      "question": "If code = 30 minus letter position, encode 'ACE'.",
      "choices": ["29-28-24", "29-28-25", "29-28-23", "29-27-24"],
      "type": "MCQs",
      "correctAnswers": ["29-28-24"],
      "score": 10
    },
    {
      "question": "Letters A-Z coded as 1,2,…26. Each letter's code = position+position of next letter. 'CAT'?",
      "choices": ["5-21-20", "4-2-20", "5-21-21", "4-2-21"],
      "type": "MCQs",
      "correctAnswers": ["5-21-20"],
      "score": 10
    },
    {
      "question": "Each letter’s code = (position of letter)^2 - 1. Encode 'BED'.",
      "choices": ["3-4-15", "2-5-15", "2-4-15", "3-5-15"],
      "type": "MCQs",
      "correctAnswers": ["3-4-15"],
      "score": 10
    }
  ]
}
