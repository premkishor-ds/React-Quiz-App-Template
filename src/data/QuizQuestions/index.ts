import { generalKnowledge } from './generalKnowledge'
import { english } from './english'
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
  English: english,
  Reasoning: reasoning,
  Math: math,
  'General Knowledge': generalKnowledge,
}
