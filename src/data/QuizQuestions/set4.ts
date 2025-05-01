// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'


export const set4: Topic = {
  topic: 'Set 4',
  level: 'Beginner',
  totalQuestions: 50,
  totalScore: 500,
  totalTime: 3000,
  questions: [
    {
      question: "Which scientist is known for his work on the law of gravity?",
      choices: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Nikola Tesla",
      ],
      type: "MCQs",
      correctAnswers: ["Isaac Newton"],
      score: 10,
    },
    {
      question:
        "If all roses are flowers and all flowers are plants, which of the following is true?",
      choices: [
        "All roses are plants.",
        "All flowers are roses.",
        "Some plants are roses.",
        "No roses are plants.",
      ],
      type: "MCQs",
      correctAnswers: ["All roses are plants."],
      score: 10,
    },
    {
      question:
        "If 'A' is taller than 'B', and 'B' is taller than 'C', who is the shortest?",
      choices: ["A", "B", "C", "None of the above"],
      type: "MCQs",
      correctAnswers: ["C"],
      score: 10,
    },
    {
      question: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
      choices: ["36", "42", "45", "48"],
      type: "MCQs",
      correctAnswers: ["42"],
      score: 10,
    },
    {
      question:
        "Which number should come next in the series: 1, 4, 9, 16, 25, ?",
      choices: ["36", "30", "45", "49"],
      type: "MCQs",
      correctAnswers: ["36"],
      score: 10,
    },
    {
      question:
        "If some A are B, and some B are C, which of the following is true?",
      choices: [
        "Some A are C.",
        "All A are C.",
        "No A are C.",
        "None of the above.",
      ],
      type: "MCQs",
      correctAnswers: ["None of the above."],
      score: 10,
    },
    {
      question:
        "Which of the following is a valid conclusion based on the statement: All dogs are animals, and some animals are cats?",
      choices: [
        "All dogs are cats.",
        "Some cats are dogs.",
        "All dogs are animals.",
        "Some dogs are cats.",
      ],
      type: "MCQs",
      correctAnswers: ["All dogs are animals."],
      score: 10,
    },
    {
      question: "Which is the next number in the series: 5, 10, 15, 20, 25, ?",
      choices: ["30", "35", "40", "45"],
      type: "MCQs",
      correctAnswers: ["30"],
      score: 10,
    },
    {
      question:
        "Which word does not belong to the group: Apple, Banana, Carrot, Grape?",
      choices: ["Apple", "Banana", "Carrot", "Grape"],
      type: "MCQs",
      correctAnswers: ["Carrot"],
      score: 10,
    },
    {
      question: "Which number is the odd one out: 21, 42, 56, 63, 85?",
      choices: ["21", "42", "56", "63", "85"],
      type: "MCQs",
      correctAnswers: ["85"],
      score: 10,
    },
    {
      question:
        "Which of the following is the next term in the sequence: 1, 1, 2, 3, 5, 8, ?",
      choices: ["12", "10", "13", "15"],
      type: "MCQs",
      correctAnswers: ["13"],
      score: 10,
    },
    {
      question: "What is the next number in the sequence: 8, 16, 32, 64, ?",
      choices: ["128", "256", "192", "512"],
      type: "MCQs",
      correctAnswers: ["128"],
      score: 10,
    },
    {
      question:
        "Which country has won the most number of Olympic gold medals in history?",
      choices: ["United States", "Germany", "China", "Russia"],
      type: "MCQs",
      correctAnswers: ["United States"],
      score: 10,
    },
    {
      question:
        "Which is the longest-running television show in the United States?",
      choices: ["The Simpsons", "Friends", "The Tonight Show", "Sesame Street"],
      type: "MCQs",
      correctAnswers: ["The Simpsons"],
      score: 10,
    },
    {
      question: "Which country is known as the 'Pearl of Africa'?",
      choices: ["Uganda", "Kenya", "Tanzania", "Ethiopia"],
      type: "MCQs",
      correctAnswers: ["Uganda"],
      score: 10,
    },
    {
      question: "What is the capital of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      type: "MCQs",
      correctAnswers: ["Canberra"],
      score: 10,
    },
    {
      question: "Which of these is the largest island in the world?",
      choices: ["Greenland", "Australia", "New Guinea", "Borneo"],
      type: "MCQs",
      correctAnswers: ["Greenland"],
      score: 10,
    },
    {
      question: "Which element has the atomic number 79?",
      choices: ["Gold", "Silver", "Iron", "Platinum"],
      type: "MCQs",
      correctAnswers: ["Gold"],
      score: 10,
    },
    {
      question:
        "Which war was fought between the North and South regions of the United States?",
      choices: [
        "World War I",
        "The Civil War",
        "The Spanish-American War",
        "The Revolutionary War",
      ],
      type: "MCQs",
      correctAnswers: ["The Civil War"],
      score: 10,
    },
    {
      question: "What is the smallest planet in the solar system?",
      choices: ["Mercury", "Mars", "Venus", "Pluto"],
      type: "MCQs",
      correctAnswers: ["Mercury"],
      score: 10,
    },
    {
      question: "In which year did the Titanic sink?",
      choices: ["1912", "1920", "1898", "1905"],
      type: "MCQs",
      correctAnswers: ["1912"],
      score: 10,
    },
    {
      question: "Which famous scientist developed the three laws of motion?",
      choices: [
        "Isaac Newton",
        "Albert Einstein",
        "Nikola Tesla",
        "Galileo Galilei",
      ],
      type: "MCQs",
      correctAnswers: ["Isaac Newton"],
      score: 10,
    },
    {
      question: "What is the chemical formula of water?",
      choices: ["H2O", "H2SO4", "CO2", "O2"],
      type: "MCQs",
      correctAnswers: ["H2O"],
      score: 10,
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mount Fuji"],
      type: "MCQs",
      correctAnswers: ["Mount Everest"],
      score: 10,
    },
    {
      question: "Which country invented the first successful airplane?",
      choices: ["United States", "France", "Germany", "Italy"],
      type: "MCQs",
      correctAnswers: ["United States"],
      score: 10,
    },
    {
      question: "Which bird is known for its ability to mimic human speech?",
      choices: ["Parrot", "Eagle", "Crow", "Peacock"],
      type: "MCQs",
      correctAnswers: ["Parrot"],
      score: 10,
    },
    {
      question: "Which country is the largest producer of chocolate?",
      choices: ["Switzerland", "Belgium", "France", "Germany"],
      type: "MCQs",
      correctAnswers: ["Switzerland"],
      score: 10,
    },
    {
      question: "Which is the longest river in South America?",
      choices: ["Amazon", "Orinoco", "Parana", "Mississippi"],
      type: "MCQs",
      correctAnswers: ["Amazon"],
      score: 10,
    },
    {
      question: "What is the capital city of Spain?",
      choices: ["Barcelona", "Seville", "Madrid", "Lisbon"],
      type: "MCQs",
      correctAnswers: ["Madrid"],
      score: 10,
    },
    {
      question: "In which year did World War II end?",
      choices: ["1940", "1942", "1945", "1948"],
      type: "MCQs",
      correctAnswers: ["1945"],
      score: 10,
    },
    {
      question: "Who is credited with inventing the light bulb?",
      choices: [
        "Nikola Tesla",
        "Albert Einstein",
        "Thomas Edison",
        "Alexander Graham Bell",
      ],
      type: "MCQs",
      correctAnswers: ["Thomas Edison"],
      score: 10,
    },
    {
      question:
        "Which organ in the human body is primarily responsible for pumping blood?",
      choices: ["Brain", "Liver", "Heart", "Lungs"],
      type: "MCQs",
      correctAnswers: ["Heart"],
      score: 10,
    },
    {
      question: "Which famous ship sank after hitting an iceberg in 1912?",
      choices: ["Titanic", "Lusitania", "Queen Mary", "RMS Olympic"],
      type: "MCQs",
      correctAnswers: ["Titanic"],
      score: 10,
    },
    {
      question:
        "Which gas makes up the largest proportion of the Earth's atmosphere?",
      choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      type: "MCQs",
      correctAnswers: ["Nitrogen"],
      score: 10,
    },
    {
      question: "What is the missing number in the series: 1, 4, 9, 16, ?, 36",
      choices: ["20", "25", "27", "30"],
      type: "MCQs",
      correctAnswers: ["25"],
      score: 10,
    },
    {
      question: "Which number should come next in the series: 1, 3, 9, 27, ?",
      choices: ["81", "54", "32", "45"],
      type: "MCQs",
      correctAnswers: ["81"],
      score: 10,
    },
    {
      question:
        "If all squares are rectangles, but not all rectangles are squares, which of the following is true?",
      choices: [
        "All rectangles are squares.",
        "Some squares are rectangles.",
        "No squares are rectangles.",
        "Some rectangles are not squares.",
      ],
      type: "MCQs",
      correctAnswers: ["Some rectangles are not squares."],
      score: 10,
    },
    {
      question: "Which of the following is the odd one out?",
      choices: ["17", "23", "29", "35"],
      type: "MCQs",
      correctAnswers: ["35"],
      score: 10,
    },
    {
      question: "If 5 pencils cost 15 rupees, how much will 12 pencils cost?",
      choices: ["24 rupees", "30 rupees", "36 rupees", "40 rupees"],
      type: "MCQs",
      correctAnswers: ["36 rupees"],
      score: 10,
    },
    {
      question: "What comes next in the series: 2, 5, 10, 17, ?",
      choices: ["26", "30", "24", "34"],
      type: "MCQs",
      correctAnswers: ["26"],
      score: 10,
    },
    {
      question:
        "If all roses are flowers and some flowers are red, which of the following is true?",
      choices: [
        "All roses are red.",
        "Some roses are red.",
        "All flowers are red.",
        "None of the above.",
      ],
      type: "MCQs",
      correctAnswers: ["Some roses are red."],
      score: 10,
    },
    {
      question: "Which number is the odd one out: 12, 24, 48, 96, 100?",
      choices: ["12", "24", "48", "96", "100"],
      type: "MCQs",
      correctAnswers: ["100"],
      score: 10,
    },
    {
      question:
        "Which of the following is a possible number for the series: 4, 16, 36, 64, ?",
      choices: ["81", "72", "90", "100"],
      type: "MCQs",
      correctAnswers: ["100"],
      score: 10,
    },
    {
      question: "What is the missing number in the series: 1, 4, 9, 16, 25, ?",
      choices: ["36", "49", "40", "60"],
      type: "MCQs",
      correctAnswers: ["36"],
      score: 10,
    },
    {
      question: "Which is the largest country by area?",
      choices: ["China", "Russia", "United States", "Canada"],
      type: "MCQs",
      correctAnswers: ["Russia"],
      score: 10,
    },
    {
      question: "What is the currency of Japan?",
      choices: ["Yuan", "Yen", "Won", "Ringgit"],
      type: "MCQs",
      correctAnswers: ["Yen"],
      score: 10,
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: [
        "William Shakespeare",
        "Charles Dickens",
        "George Orwell",
        "Jane Austen",
      ],
      type: "MCQs",
      correctAnswers: ["William Shakespeare"],
      score: 10,
    },
    {
      question: "What is the capital of Italy?",
      choices: ["Rome", "Paris", "Berlin", "Madrid"],
      type: "MCQs",
      correctAnswers: ["Rome"],
      score: 10,
    },
    {
      question: "Which planet is known as the 'Evening Star'?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      type: "MCQs",
      correctAnswers: ["Venus"],
      score: 10,
    },
    {
      question: "Which of the following is the tallest mountain in Africa?",
      choices: [
        "Mount Kilimanjaro",
        "Mount Everest",
        "Mount Fuji",
        "Mount Elbrus",
      ],
      type: "MCQs",
      correctAnswers: ["Mount Kilimanjaro"],
      score: 10,
    },
  ],
};
