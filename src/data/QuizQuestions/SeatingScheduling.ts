import { Topic } from ".";

// Seating + Scheduling(Timetable Logic) 
export const SeatingScheduling: Topic = {
  topic: 'Mathematics',
  level: 'Advanced',
  totalQuestions: 20, // since you listed 20 questions
  totalScore: 200,    // 20 * 10
  totalTime: 1200,    // e.g. 20 mins
  questions: [
    {
      "question": "Five friends A, B, C, D, and E are sitting in a row. B is to the left of C but to the right of D. E is at one end. Who is sitting in the middle?",
      "choices": ["A", "B", "C", "D"],
      "type": "MCQs",
      "correctAnswers": ["B"],
      "score": 10
    },
    {
      "question": "A, B, C, D, E, and F are seated around a circular table. C is opposite D. E is to the immediate right of B. Who sits opposite F?",
      "choices": ["A", "B", "C", "D"],
      "type": "MCQs",
      "correctAnswers": ["B"],
      "score": 10
    },
    {
      "question": "A meeting is scheduled for 5 people over 3 days: Monday, Tuesday, and Wednesday. Each person meets once per day. If A cannot meet on Monday and B cannot meet on Wednesday, who can meet on all three days?",
      "choices": ["C", "D", "E", "A"],
      "type": "MCQs",
      "correctAnswers": ["C"],
      "score": 10
    },
    {
      "question": "In a row of 7 chairs, X is second from left, Y is third from right, and Z is in the middle. Who is fourth from the left?",
      "choices": ["X", "Y", "Z", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["Z"],
      "score": 10
    },
    {
      "question": "A class has 6 subjects and 5 periods each day. If Math must be first on Monday and English cannot be last, which period can History occupy?",
      "choices": ["1st", "2nd", "3rd", "5th"],
      "type": "MCQs",
      "correctAnswers": ["2nd"],
      "score": 10
    },
    {
      "question": "Six friends are seated in two rows of three. A faces B, C faces D, and E faces F. Who is directly opposite D?",
      "choices": ["A", "B", "C", "F"],
      "type": "MCQs",
      "correctAnswers": ["C"],
      "score": 10
    },
    {
      "question": "Five students P, Q, R, S, T take turns giving presentations. Q goes after P but before R. S goes first. Who goes last?",
      "choices": ["T", "R", "P", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["T"],
      "score": 10
    },
    {
      "question": "Three trains start at different times from the same station. Train A starts 30 min before B, and C starts 20 min after B. Which train starts last?",
      "choices": ["A", "B", "C", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["C"],
      "score": 10
    },
    {
      "question": "Four friends sit in a straight line. P is to the left of Q, R is to the right of Q, S is at one end. Who is at the other end?",
      "choices": ["P", "Q", "R", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["R"],
      "score": 10
    },
    {
      "question": "Seven students sit for a photo. A and B cannot sit together. C must be in the middle. If D is at the leftmost, who sits at the rightmost?",
      "choices": ["E", "F", "G", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["Cannot determine"],
      "score": 10
    },
    {
      "question": "Five employees A, B, C, D, E work shifts over 5 days. D works on Wednesday. B cannot work on Monday. Who works on Friday?",
      "choices": ["A", "B", "C", "E"],
      "type": "MCQs",
      "correctAnswers": ["E"],
      "score": 10
    },
    {
      "question": "In a row of 6 chairs, M is second from the left, N is third from the right, O is in the middle. Who sits at the extreme right?",
      "choices": ["M", "N", "O", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["N"],
      "score": 10
    },
    {
      "question": "Three people A, B, C must visit three offices X, Y, Z. A cannot visit X, B cannot visit Y. Who can visit Z?",
      "choices": ["A", "B", "C", "Any"],
      "type": "MCQs",
      "correctAnswers": ["C"],
      "score": 10
    },
    {
      "question": "Six students sit around a hexagonal table. A is opposite D, B is right of A, C is left of D. Who is opposite B?",
      "choices": ["E", "F", "C", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["E"],
      "score": 10
    },
    {
      "question": "Five workers P, Q, R, S, T are scheduled in a line. Q is between P and R. S is at one end. Who is between S and T?",
      "choices": ["P", "Q", "R", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["Cannot determine"],
      "score": 10
    },
    {
      "question": "Four students sit around a square table. A faces C, B sits to the left of D. Who sits to the right of A?",
      "choices": ["B", "C", "D", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["B"],
      "score": 10
    },
    {
      "question": "Seven friends sit in a circle. F must be between B and C. D is opposite E. Who is to the left of F?",
      "choices": ["B", "C", "D", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["B"],
      "score": 10
    },
    {
      "question": "Three friends P, Q, R attend classes at 9 AM, 10 AM, 11 AM. P is not first, Q is before R. Who attends at 10 AM?",
      "choices": ["P", "Q", "R", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["Q"],
      "score": 10
    },
    {
      "question": "Five students sit in a row. A is not at any end. B is to the right of A, C is left of B. Who sits at the leftmost?",
      "choices": ["A", "B", "C", "D"],
      "type": "MCQs",
      "correctAnswers": ["C"],
      "score": 10
    },
    {
      "question": "A conference has four sessions: Math, English, Science, History. Science must be before History, Math after English. Which session is second?",
      "choices": ["Math", "English", "Science", "Cannot determine"],
      "type": "MCQs",
      "correctAnswers": ["Science"],
      "score": 10
    }
  ]
}