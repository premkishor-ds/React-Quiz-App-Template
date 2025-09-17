import { english } from './english'
import { generalKnowledge } from './generalKnowledge'
import { math } from './math'
import { reasoning } from './reasoning'
import { mixed } from './mixed'


// Mathematics Topics
import * as mathematicsTopics from './mathematics/index'

// English Topics
import * as englishTopics from './english/index'

// General Knowledge Topics
import * as gkTopics from './generalKnowledge/index'

// Reasoning Topics
import * as reasoningTopics from './reasoning/index'

// Sets Topics
import * as setsTopics from './sets/index'

// Science Topics
import * as scienceTopics from './science/index'

// Advance Topics
import * as advanceTopics from './advance/index'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  English: english,
  'General Knowledge': generalKnowledge,
  Math: math,
  Reasoning: reasoning,
  'Set 1': setsTopics.set1,
  'Set 2': setsTopics.set2,
  'Set 3': setsTopics.set3,
  'Set 4': setsTopics.set4,
  'Set 5': setsTopics.set5,
  'Set 6': setsTopics.set6,
  'Set 7': setsTopics.set7,
  'Set 8': setsTopics.set8,
  'Set 9': setsTopics.set9,
  'Set 10': setsTopics.set10,
  'English Set 1': setsTopics.englishSet1,
  'English Set 2': setsTopics.englishSet2,
  'English Set 3': setsTopics.englishSet3,
  'English Set 4': setsTopics.englishSet4,
  'English Set 5': setsTopics.englishSet5,
  'General Knowledge Set 1': setsTopics.generalKnowledgeSet1,
  'General Knowledge Set 2': setsTopics.generalKnowledgeSet2,
  'General Knowledge Set 3': setsTopics.generalKnowledgeSet3,
  'General Knowledge Set 4': setsTopics.generalKnowledgeSet4,
  'General Knowledge Set 5': setsTopics.generalKnowledgeSet5,
  'Math Set 1': setsTopics.mathSet1,
  'Math Set 2': setsTopics.mathSet2,
  'Math Set 3': setsTopics.mathSet3,
  'Math Set 4': setsTopics.mathSet4,
  'Math Set 5': setsTopics.mathSet5,
  'Math 1': setsTopics.math1,
  'Mixed': mixed,
  'Reasoning Set 1': setsTopics.reasoningSet1,
  'Reasoning Set 2': setsTopics.reasoningSet2,
  'Reasoning Set 3': setsTopics.reasoningSet3,
  'Reasoning Set 4': setsTopics.reasoningSet4,
  'Reasoning Set 5': setsTopics.reasoningSet5,
  'English Advance Set 1': advanceTopics.englishAdvanceSet1,
  'General Knowledge Advance Set 1': advanceTopics.generalKnowledgeAdvanceSet1,
  'Math Advance Set 1': advanceTopics.mathAdvanceSet1,
  'Reasoning Advance Set 1': advanceTopics.reasoningAdvanceSet1,
  'Advanced Reasoning - RMS': advanceTopics.reasoningAdvanced,
  '30 Reasoning Topics - RMS': advanceTopics.reasoning30Topics,
  'English 1': setsTopics.english1,
  'English 2': setsTopics.english2,
  'English 3': setsTopics.english3,
  'English 4': setsTopics.english4,
  'GK 1': setsTopics.gk1,
  'GK 2': setsTopics.gk2,
  'GK 3': setsTopics.gk3,
  'GK 4': setsTopics.gk4,
  'Reasoning 1': setsTopics.reasoning1,
  'Reasoning 2': setsTopics.reasoning2,
  'Reasoning 3': setsTopics.reasoning3,
  'Reasoning 4': setsTopics.reasoning4,
  'Science 1': scienceTopics.science1,
  'Science 2': scienceTopics.science2,
  'Science 3': scienceTopics.science3,
  'Science 4': scienceTopics.science4,
  'Number Series': reasoningTopics.numberSeries,
  'Letter Series': reasoningTopics.letterSeries,
  'Coding Decoding': reasoningTopics.codingDecoding,
  'Direction Sense': reasoningTopics.directionSense,
  'Blood Relations': reasoningTopics.bloodRelations,
  'Alpha-Numeric Series': reasoningTopics.alphaNumericSeries,
  'Seating Arrangement': reasoningTopics.seatingArrangement,
  'Classification': reasoningTopics.classification,
  'Analogies': reasoningTopics.analogies,
  'Calendars and Dates': reasoningTopics.calendarsAndDates,
  'Clocks': reasoningTopics.clocks,
  'Venn Diagrams': reasoningTopics.vennDiagrams,
  'Syllogisms': reasoningTopics.syllogisms,
  'Inequalities': reasoningTopics.inequalities,
  'Mirror Images': reasoningTopics.mirrorImages,
  'Embedded Figures': reasoningTopics.embeddedFigures,
  'Cube and Dice': reasoningTopics.cubeAndDice,
  'Mathematical Reasoning': reasoningTopics.mathematicalReasoning,
  'Work and Time': reasoningTopics.workAndTime,
  'Distance Speed Time': reasoningTopics.distanceSpeedTime,
  'Ratio and Proportion': reasoningTopics.ratioAndProportion,
  'Logical Sequence': reasoningTopics.logicalSequence,
  'Pattern Matrices': reasoningTopics.patternMatrices,
  'Binary Logic': reasoningTopics.binaryLogic,
  'Figural Series': reasoningTopics.figuralSeries,
  'Word Puzzles': reasoningTopics.wordPuzzles,
  'Puzzles Logic Grid': reasoningTopics.puzzlesLogicGrid,
  'Statement Assumption': reasoningTopics.statementAssumption,
  'Lateral Thinking': reasoningTopics.lateralThinking,
  
  // Mathematics Topics
  'Number Systems': mathematicsTopics.numberSystems,
  'Operations & Arithmetic': mathematicsTopics.operationsArithmetic,
  'Fractions & Decimals': mathematicsTopics.fractionsDecimals,
  'Ratio, Proportion & Percentage': mathematicsTopics.ratioProportionPercentage,
  'Algebra Basics': mathematicsTopics.algebraBasics,
  'Geometry': mathematicsTopics.geometry,
  'Mensuration': mathematicsTopics.mensuration,
  'Time, Speed & Distance': mathematicsTopics.timeSpeedDistance,
  'Work & Time': mathematicsTopics.workTime,
  'Data Interpretation': mathematicsTopics.dataInterpretation,
  'Profit & Loss / Simple Interest': mathematicsTopics.profitLossSimpleInterest,
  'Number Puzzles & Logical Math': mathematicsTopics.numberPuzzlesLogicalMath,
  
  // English Topics
  'Grammar': englishTopics.grammar,
  'Vocabulary': englishTopics.vocabulary,
  'Comprehension': englishTopics.comprehension,
  'Sentence Completion & Correction': englishTopics.sentenceCompletionCorrection,
  'Figures of Speech': englishTopics.figuresOfSpeech,
  'Spelling & Punctuation': englishTopics.spellingPunctuation,
  'Writing Skills': englishTopics.writingSkills,
  'Analytical English': englishTopics.analyticalEnglish,
  
  // General Knowledge Topics
  'Indian History': gkTopics.indianHistory,
  'Indian Geography': gkTopics.indianGeography,
  'Current Affairs': gkTopics.currentAffairs,
  'Important Days & Festivals': gkTopics.importantDaysFestivals,
  'Indian Constitution & Civics': gkTopics.indianConstitutionCivics,
  'Science & Technology GK': gkTopics.scienceTechnologyGK,
  'Miscellaneous GK': gkTopics.miscellaneousGK,
}
