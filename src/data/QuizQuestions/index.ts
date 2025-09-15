import { english } from './english'
import { english1 } from './english1'
import { english2 } from './english2'
import { english3 } from './english3'
import { english4 } from './english4'
import { generalKnowledge } from './generalKnowledge'
import { math } from './math'
import { reasoning } from './reasoning'
import { set1 } from './set1'
import { set2 } from './set2'
import { set3 } from './set3'
import { set4 } from './set4'
import { set5 } from './set5'
import { set6 } from './set6'
import { set7 } from './set7'
import { set8 } from './set8'
import { set9 } from './set9'
import { set10 } from './set10'
import { englishSet1 } from './englishSet1'
import { englishSet2 } from './englishSet2'
import { englishSet3 } from './englishSet3'
import { englishSet4 } from './englishSet4'
import { englishSet5 } from './englishSet5'
import { generalKnowledgeSet1 } from './generalKnowledgeSet1'
import { generalKnowledgeSet2 } from './generalKnowledgeSet2'
import { generalKnowledgeSet3 } from './generalKnowledgeSet3'
import { generalKnowledgeSet4 } from './generalKnowledgeSet4'
import { generalKnowledgeSet5 } from './generalKnowledgeSet5'
import { gk1 } from './gk1'
import { gk2 } from './gk2'
import { gk3 } from './gk3'
import { gk4 } from './gk4'
import { mathSet1 } from './mathSet1'
import { mathSet2 } from './mathSet2'
import { mathSet3 } from './mathSet3'
import { mathSet4 } from './mathSet4'
import { mathSet5 } from './mathSet5'
import {reasoning1} from './reasoning1'
import {reasoning2} from './reasoning2'
import {reasoning3} from './reasoning3'
import {reasoning4} from './reasoning4'
import { reasoningSet1 } from './reasoningSet1'
import { reasoningSet2 } from './reasoningSet2'
import { reasoningSet3 } from './reasoningSet3'
import { reasoningSet4 } from './reasoningSet4'
import { reasoningSet5 } from './reasoningSet5'
import {science1} from './science1'
import {science2} from './science2'
import {science3} from './science3'
import {science4} from './science4'
import { englishAdvanceSet1 } from './englishAdvanceSet1'
import { generalKnowledgeAdvanceSet1 } from './generalKnowledgeAdvanceSet1'
import { mathAdvanceSet1 } from './mathAdvanceSet1'
import { reasoningAdvanceSet1 } from './reasoningAdvanceSet1'

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
  'Set 1': set1,
  'Set 2': set2,
  'Set 3': set3,
  'Set 4': set4,
  'Set 5': set5,
  'Set 6': set6,
  'Set 7': set7,
  'Set 8': set8,
  'Set 9': set9,
  'Set 10': set10,
  'English Set 1': englishSet1,
  'English Set 2': englishSet2,
  'English Set 3': englishSet3,
  'English Set 4': englishSet4,
  'English Set 5': englishSet5,
  'General Knowledge Set 1': generalKnowledgeSet1,
  'General Knowledge Set 2': generalKnowledgeSet2,
  'General Knowledge Set 3': generalKnowledgeSet3,
  'General Knowledge Set 4': generalKnowledgeSet4,
  'General Knowledge Set 5': generalKnowledgeSet5,
  'Math Set 1': mathSet1,
  'Math Set 2': mathSet2,
  'Math Set 3': mathSet3,
  'Math Set 4': mathSet4,
  'Math Set 5': mathSet5,
  'Reasoning Set 1': reasoningSet1,
  'Reasoning Set 2': reasoningSet2,
  'Reasoning Set 3': reasoningSet3,
  'Reasoning Set 4': reasoningSet4,
  'Reasoning Set 5': reasoningSet5,
  'English Advance Set 1': englishAdvanceSet1,
  'General Knowledge Advance Set 1': generalKnowledgeAdvanceSet1,
  'Math Advance Set 1': mathAdvanceSet1,
  'Reasoning Advance Set 1': reasoningAdvanceSet1,
}
