import { Topic } from '.'

export const english3: Topic = {

  topic: 'Reading Comprehension, Sentence Correction & Sentence Completion',
  level: 'Medium to Hard',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
  // ------------------- 7. Reading Comprehension -------------------
  {
    question: "Passage: The Sun rises in the east and sets in the west. It gives us light and warmth. Without the Sun, life would not be possible on Earth.\n\nQ: In which direction does the Sun rise?",
    choices: ["North", "South", "East", "West"],
    type: "MCQs",
    correctAnswers: ["East"],
    score: 10
  },
  {
    question: "Passage: The Sun rises in the east and sets in the west. It gives us light and warmth. Without the Sun, life would not be possible on Earth.\n\nQ: What does the Sun provide us?",
    choices: ["Cold", "Darkness", "Light and warmth", "Food"],
    type: "MCQs",
    correctAnswers: ["Light and warmth"],
    score: 10
  },
  {
    question: "Passage: The Sun rises in the east and sets in the west. It gives us light and warmth. Without the Sun, life would not be possible on Earth.\n\nQ: Why is the Sun important?",
    choices: ["For playing", "For swimming", "For life on Earth", "For flying"],
    type: "MCQs",
    correctAnswers: ["For life on Earth"],
    score: 10
  },
  {
    question: "Passage: Mahatma Gandhi is called the Father of the Nation. He fought for India’s independence using non-violence.\n\nQ: Who is called the Father of the Nation?",
    choices: ["Jawaharlal Nehru", "Bhagat Singh", "Mahatma Gandhi", "Sardar Patel"],
    type: "MCQs",
    correctAnswers: ["Mahatma Gandhi"],
    score: 10
  },
  {
    question: "Passage: Mahatma Gandhi is called the Father of the Nation. He fought for India’s independence using non-violence.\n\nQ: What method did Gandhi use?",
    choices: ["War", "Violence", "Non-violence", "Weapons"],
    type: "MCQs",
    correctAnswers: ["Non-violence"],
    score: 10
  },
  {
    question: "Passage: Mahatma Gandhi is called the Father of the Nation. He fought for India’s independence using non-violence.\n\nQ: What was Gandhi fighting for?",
    choices: ["Freedom", "Sports", "Money", "Power"],
    type: "MCQs",
    correctAnswers: ["Freedom"],
    score: 10
  },
  {
    question: "Passage: Water is very important for life. All living things need water to survive. We must save water and not waste it.\n\nQ: What is important for life?",
    choices: ["Food", "Water", "Games", "Air"],
    type: "MCQs",
    correctAnswers: ["Water"],
    score: 10
  },
  {
    question: "Passage: Water is very important for life. All living things need water to survive. We must save water and not waste it.\n\nQ: What should we not do with water?",
    choices: ["Save it", "Drink it", "Waste it", "Use it"],
    type: "MCQs",
    correctAnswers: ["Waste it"],
    score: 10
  },
  {
    question: "Passage: Water is very important for life. All living things need water to survive. We must save water and not waste it.\n\nQ: Who needs water to survive?",
    choices: ["Only humans", "Only animals", "Only plants", "All living things"],
    type: "MCQs",
    correctAnswers: ["All living things"],
    score: 10
  },
  {
    question: "Passage: Birds can fly in the sky. They build nests in trees. Some birds can swim as well.\n\nQ: Where do birds build nests?",
    choices: ["Ground", "Water", "Trees", "Houses"],
    type: "MCQs",
    correctAnswers: ["Trees"],
    score: 10
  },

  // ------------------- 8. Sentence Correction -------------------
  {
    question: "Choose the correct sentence.",
    choices: ["She go to school every day.", "She goes to school every day.", "She going to school every day.", "She gone to school every day."],
    type: "MCQs",
    correctAnswers: ["She goes to school every day."],
    score: 10
  },
  {
    question: "Find the error: He do his homework regularly.",
    choices: ["He", "do", "his", "homework"],
    type: "MCQs",
    correctAnswers: ["do"],
    score: 10
  },
  {
    question: "Choose the correct sentence.",
    choices: ["I has a new pen.", "I have a new pen.", "I having a new pen.", "I haves a new pen."],
    type: "MCQs",
    correctAnswers: ["I have a new pen."],
    score: 10
  },
  {
    question: "Find the error: They plays football in the park.",
    choices: ["They", "plays", "football", "park"],
    type: "MCQs",
    correctAnswers: ["plays"],
    score: 10
  },
  {
    question: "Choose the correct sentence.",
    choices: ["We was happy yesterday.", "We were happy yesterday.", "We are happy yesterday.", "We being happy yesterday."],
    type: "MCQs",
    correctAnswers: ["We were happy yesterday."],
    score: 10
  },
  {
    question: "Find the error: She is study for her exam.",
    choices: ["She", "is", "study", "exam"],
    type: "MCQs",
    correctAnswers: ["study"],
    score: 10
  },
  {
    question: "Choose the correct sentence.",
    choices: ["They has finished their work.", "They have finished their work.", "They haves finished their work.", "They having finished their work."],
    type: "MCQs",
    correctAnswers: ["They have finished their work."],
    score: 10
  },
  {
    question: "Find the error: I am go to market now.",
    choices: ["I", "am", "go", "market"],
    type: "MCQs",
    correctAnswers: ["go"],
    score: 10
  },
  {
    question: "Choose the correct sentence.",
    choices: ["Ravi and Mohan is friends.", "Ravi and Mohan are friends.", "Ravi and Mohan be friends.", "Ravi and Mohan being friends."],
    type: "MCQs",
    correctAnswers: ["Ravi and Mohan are friends."],
    score: 10
  },
  {
    question: "Find the error: She walk to school every morning.",
    choices: ["She", "walk", "to", "school"],
    type: "MCQs",
    correctAnswers: ["walk"],
    score: 10
  },

  // ------------------- 9. Sentence Completion -------------------
  {
    question: "He ____ playing cricket.",
    choices: ["is", "are", "am", "be"],
    type: "MCQs",
    correctAnswers: ["is"],
    score: 10
  },
  {
    question: "We ____ going to the park.",
    choices: ["is", "are", "am", "be"],
    type: "MCQs",
    correctAnswers: ["are"],
    score: 10
  },
  {
    question: "I ____ very happy today.",
    choices: ["is", "are", "am", "be"],
    type: "MCQs",
    correctAnswers: ["am"],
    score: 10
  },
  {
    question: "She ____ a beautiful song.",
    choices: ["sings", "sing", "sang", "singing"],
    type: "MCQs",
    correctAnswers: ["sings"],
    score: 10
  },
  {
    question: "The boys ____ playing football.",
    choices: ["is", "are", "am", "was"],
    type: "MCQs",
    correctAnswers: ["are"],
    score: 10
  },
  {
    question: "The teacher ____ teaching in the class.",
    choices: ["is", "are", "am", "be"],
    type: "MCQs",
    correctAnswers: ["is"],
    score: 10
  },
  {
    question: "My father ____ very kind.",
    choices: ["is", "are", "am", "was"],
    type: "MCQs",
    correctAnswers: ["is"],
    score: 10
  },
  {
    question: "They ____ gone to the market.",
    choices: ["has", "have", "had", "having"],
    type: "MCQs",
    correctAnswers: ["have"],
    score: 10
  },
  {
    question: "I ____ reading a story book.",
    choices: ["is", "am", "are", "be"],
    type: "MCQs",
    correctAnswers: ["am"],
    score: 10
  },
  {
    question: "She ____ a doctor.",
    choices: ["is", "are", "am", "was"],
    type: "MCQs",
    correctAnswers: ["is"],
    score: 10
  }
]
}

export default english3