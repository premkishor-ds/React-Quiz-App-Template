import { Topic } from '..'

export const reasoning1: Topic = {
  topic: 'Pattern Recognition & Series Completion, Coding-Decoding, Direction Sense',
  level: 'Medium to Hard',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
  // ------------------- 1. Pattern Recognition & Series Completion -------------------
  {
    question: "Find the next number in the series: 2, 4, 8, 16, ?",
    choices: ["18", "24", "32", "34"],
    type: "MCQs",
    correctAnswers: ["32"],
    score: 10
  },
  {
    question: "Complete the series: 5, 10, 20, 40, ?",
    choices: ["50", "60", "80", "100"],
    type: "MCQs",
    correctAnswers: ["80"],
    score: 10
  },
  {
    question: "Find the missing letter: A, C, F, J, ?",
    choices: ["M", "O", "K", "N"],
    type: "MCQs",
    correctAnswers: ["O"],
    score: 10
  },
  {
    question: "Complete the series: 1, 4, 9, 16, 25, ?",
    choices: ["30", "36", "35", "40"],
    type: "MCQs",
    correctAnswers: ["36"],
    score: 10
  },
  {
    question: "Find the missing number: 3, 6, 12, 24, ?",
    choices: ["30", "36", "48", "60"],
    type: "MCQs",
    correctAnswers: ["48"],
    score: 10
  },
  {
    question: "Complete the series: Z, X, V, T, ?",
    choices: ["S", "R", "Q", "P"],
    type: "MCQs",
    correctAnswers: ["R"],
    score: 10
  },
  {
    question: "Find the next in series: 2, 5, 10, 17, ?",
    choices: ["24", "26", "28", "30"],
    type: "MCQs",
    correctAnswers: ["26"],
    score: 10
  },
  {
    question: "Complete the series: 1, 1, 2, 3, 5, 8, ?",
    choices: ["11", "12", "13", "14"],
    type: "MCQs",
    correctAnswers: ["13"],
    score: 10
  },
  {
    question: "Find the missing number: 7, 14, 28, 56, ?",
    choices: ["100", "112", "120", "128"],
    type: "MCQs",
    correctAnswers: ["112"],
    score: 10
  },
  {
    question: "Complete the series: 2, 6, 12, 20, 30, ?",
    choices: ["36", "40", "42", "44"],
    type: "MCQs",
    correctAnswers: ["42"],
    score: 10
  },

  // ------------------- 2. Coding-Decoding -------------------
  {
    question: "If CAT is coded as DBU, how is DOG coded?",
    choices: ["EPH", "EOG", "EPG", "EPI"],
    type: "MCQs",
    correctAnswers: ["EPH"],
    score: 10
  },
  {
    question: "If PEN is coded as QFO, how is BOOK coded?",
    choices: ["CPPL", "CPQL", "CPPM", "DPPL"],
    type: "MCQs",
    correctAnswers: ["CPPL"],
    score: 10
  },
  {
    question: "If APPLE is coded as BQQMF, how is ORANGE coded?",
    choices: ["PSBOHF", "PSBPOG", "PSBPHF", "PSBOGF"],
    type: "MCQs",
    correctAnswers: ["PSBOHF"],
    score: 10
  },
  {
    question: "In a certain code, TREE is written as USFF. How is LEAF written?",
    choices: ["MFBG", "MGBF", "MFBH", "MFAG"],
    type: "MCQs",
    correctAnswers: ["MFBG"],
    score: 10
  },
  {
    question: "If 1=A, 2=B, 3=C, then 19= ?",
    choices: ["S", "R", "T", "Q"],
    type: "MCQs",
    correctAnswers: ["S"],
    score: 10
  },
  {
    question: "If DOG=7, CAT=24, then RAT=? (D=4, O=15, G=7, sum letters)",
    choices: ["33", "39", "43", "31"],
    type: "MCQs",
    correctAnswers: ["43"],
    score: 10
  },
  {
    question: "If 1=A, 2=B..., what is 26?",
    choices: ["X", "Y", "Z", "W"],
    type: "MCQs",
    correctAnswers: ["Z"],
    score: 10
  },
  {
    question: "If RED is coded as 518, then BLUE is?",
    choices: ["2156", "2135", "2136", "2145"],
    type: "MCQs",
    correctAnswers: ["2156"],
    score: 10
  },
  {
    question: "If DAY is coded as EBZ, how is NIGHT coded?",
    choices: ["OJHIU", "OJHIU", "OJHIU", "OJHIU"],
    type: "MCQs",
    correctAnswers: ["OJHIU"],
    score: 10
  },
  {
    question: "If SUN=20, MOON=52 (sum of letters A=1,...), then STAR=?",
    choices: ["64", "52", "54", "60"],
    type: "MCQs",
    correctAnswers: ["64"],
    score: 10
  },

  // ------------------- 3. Direction Sense -------------------
  {
    question: "A is facing north. He turns right, then right again. Which direction is he facing now?",
    choices: ["North", "East", "South", "West"],
    type: "MCQs",
    correctAnswers: ["South"],
    score: 10
  },
  {
    question: "B is facing east. He turns left, then left again. Which direction is he facing?",
    choices: ["North", "South", "West", "East"],
    type: "MCQs",
    correctAnswers: ["West"],
    score: 10
  },
  {
    question: "C is facing south. He turns 180 degrees. Which direction is he facing?",
    choices: ["North", "South", "East", "West"],
    type: "MCQs",
    correctAnswers: ["North"],
    score: 10
  },
  {
    question: "D faces west. Turns right, walks 10 m, turns right again. Now facing?",
    choices: ["North", "South", "East", "West"],
    type: "MCQs",
    correctAnswers: ["East"],
    score: 10
  },
  {
    question: "E faces north. Turns left, walks 5 m, turns left again. Direction now?",
    choices: ["South", "West", "East", "North"],
    type: "MCQs",
    correctAnswers: ["South"],
    score: 10
  },
  {
    question: "F is facing east. Turns right, then right, then left. Facing?",
    choices: ["North", "South", "East", "West"],
    type: "MCQs",
    correctAnswers: ["South"],
    score: 10
  },
  {
    question: "G faces south. Turns left, then left, then right. Direction?",
    choices: ["North", "South", "East", "West"],
    type: "MCQs",
    correctAnswers: ["East"],
    score: 10
  },
  {
    question: "H faces west. Turns 90° clockwise. Facing?",
    choices: ["North", "South", "East", "West"],
    type: "MCQs",
    correctAnswers: ["North"],
    score: 10
  },
  {
    question: "I faces north. Turns 270° clockwise. Facing?",
    choices: ["East", "West", "South", "North"],
    type: "MCQs",
    correctAnswers: ["West"],
    score: 10
  },
  {
    question: "J faces south. Turns left, walks 10 m, turns right. Now facing?",
    choices: ["East", "West", "North", "South"],
    type: "MCQs",
    correctAnswers: ["East"],
    score: 10
  }
]
}

export default reasoning1