import { ReactNode, useEffect, useState } from 'react'
import { quiz } from '../data/QuizQuestions'
import { QuizContextTypes, Result, ScreenTypes } from '../types'
import { QuizContext, initialState } from './QuizContext'

type QuizProviderProps = {
  children: ReactNode
}

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [timer, setTimer] = useState<number>(initialState.timer)
  const [endTime, setEndTime] = useState<number>(initialState.endTime)
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('quiz-user') || initialState.userName
  })
  const [quizTopic, setQuizTopic] = useState<string>(initialState.quizTopic)
  const [result, setResult] = useState<Result[]>(initialState.result)
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(
    initialState.currentScreen
  )

  const [questions, setQuestions] = useState(quiz[initialState.quizTopic].questions)

  const {
    questions: quizQuestions,
    totalQuestions,
    totalTime,
    totalScore,
  } = quiz[quizTopic]

  const selectQuizTopic = (topic: string) => {
    setQuizTopic(topic)
  }

  const handleSetUserName = (name: string) => {
    setUserName(name)
    localStorage.setItem('quiz-user', name)
  }

  useEffect(() => {
    setTimer(totalTime)
    setQuestions(quizQuestions)
  }, [quizTopic])

  const quizDetails = {
    totalQuestions,
    totalScore,
    totalTime,
    selectedQuizTopic: quizTopic,
  }

  const quizContextValue: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    userName,
    setUserName: handleSetUserName,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
    timer,
    setTimer,
    endTime,
    setEndTime,
  }

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>
}

export default QuizProvider
