import { Dispatch, SetStateAction } from 'react'
import { Question } from '../data/QuizQuestions'

export enum ScreenTypes {
  SplashScreen,
  UserSetupScreen,
  QuizTopicsScreen,
  QuizDetailsScreen,
  QuestionScreen,
  ResultScreen,
  QuizHistoryScreen,
}

export interface Result extends Question {
  selectedAnswer: string[]
  isMatch: boolean
}

export type QuizContextTypes = {
  currentScreen: ScreenTypes
  setCurrentScreen: Dispatch<SetStateAction<ScreenTypes>>
  userName: string
  setUserName: (name: string) => void
  quizTopic: string
  selectQuizTopic: (type: string) => void
  questions: Question[]
  setQuestions: Dispatch<SetStateAction<Question[]>>
  result: Result[]
  setResult: Dispatch<SetStateAction<Result[]>>
  timer: number
  setTimer: Dispatch<SetStateAction<number>>
  endTime: number
  setEndTime: (type: number) => void
  quizDetails: {
    totalQuestions: number
    totalScore: number
    totalTime: number
    selectedQuizTopic: string
  }
}
