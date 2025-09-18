export const subjectTopics = {
  English: [
    'English',
    'Grammar',
    'Vocabulary', 
    'Comprehension',
    'Sentence Completion & Correction',
    'Figures of Speech',
    'Spelling & Punctuation',
    'Writing Skills',
    'Analytical English'
  ],
  Math: [
    'Math',
    'Number Systems',
    'Operations & Arithmetic',
    'Fractions & Decimals',
    'Ratio, Proportion & Percentage',
    'Algebra Basics',
    'Geometry',
    'Mensuration',
    'Time, Speed & Distance',
    'Work & Time',
    'Data Interpretation',
    'Profit & Loss / Simple Interest',
    'Number Puzzles & Logical Math'
  ],
  Reasoning: [
    'Reasoning',
    'Number Series',
    'Letter Series',
    'Coding Decoding',
    'Direction Sense',
    'Blood Relations',
    'Alpha-Numeric Series',
    'Seating Arrangement',
    'Classification',
    'Analogies',
    'Calendars and Dates',
    'Clocks',
    'Venn Diagrams',
    'Syllogisms',
    'Inequalities',
    'Mirror Images',
    'Embedded Figures',
    'Cube and Dice',
    'Mathematical Reasoning',
    'Work and Time',
    'Distance Speed Time',
    'Ratio and Proportion',
    'Logical Sequence',
    'Pattern Matrices',
    'Binary Logic',
    'Figural Series',
    'Word Puzzles',
    'Puzzles Logic Grid',
    'Statement Assumption',
    'Lateral Thinking'
  ],
  'General Knowledge': [
    'General Knowledge',
    'Indian History',
    'Indian Geography',
    'Current Affairs',
    'Important Days & Festivals',
    'Indian Constitution & Civics',
    'Science & Technology GK',
    'Miscellaneous GK'
  ],
  Sets: [
    'Set 1', 'Set 2', 'Set 3', 'Set 4', 'Set 5',
    'Set 6', 'Set 7', 'Set 8', 'Set 9', 'Set 10',
    'English Set 1', 'English Set 2', 'English Set 3', 'English Set 4', 'English Set 5',
    'General Knowledge Set 1', 'General Knowledge Set 2', 'General Knowledge Set 3', 'General Knowledge Set 4', 'General Knowledge Set 5',
    'Math Set 1', 'Math Set 2', 'Math Set 3', 'Math Set 4', 'Math Set 5',
    'Reasoning Set 1', 'Reasoning Set 2', 'Reasoning Set 3', 'Reasoning Set 4', 'Reasoning Set 5',
    'English 1', 'English 2', 'English 3', 'English 4',
    'GK 1', 'GK 2', 'GK 3', 'GK 4',
    'Reasoning 1', 'Reasoning 2', 'Reasoning 3', 'Reasoning 4'
  ],
  Science: [
    'Science 1', 'Science 2', 'Science 3', 'Science 4'
  ]
}

export const subjects = Object.keys(subjectTopics)
export const getTopicsForSubject = (subject: string) => subjectTopics[subject as keyof typeof subjectTopics] || []