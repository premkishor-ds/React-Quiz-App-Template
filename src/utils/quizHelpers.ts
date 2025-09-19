import { Question } from '../data/QuizQuestions'
import { QuizResult } from '../types/api'

export const calculateQuizScore = (questions: Question[], userAnswers: string[][]): number => {
  return questions.reduce((total, question, index) => {
    const userAnswer = userAnswers[index] || []
    const isCorrect = 
      userAnswer.length === question.correctAnswers.length &&
      userAnswer.every(answer => question.correctAnswers.includes(answer))
    
    return total + (isCorrect ? question.score : 0)
  }, 0)
}

export const calculateAccuracy = (questions: Question[], userAnswers: string[][]): number => {
  const correctCount = questions.reduce((count, question, index) => {
    const userAnswer = userAnswers[index] || []
    const isCorrect = 
      userAnswer.length === question.correctAnswers.length &&
      userAnswer.every(answer => question.correctAnswers.includes(answer))
    
    return count + (isCorrect ? 1 : 0)
  }, 0)

  return Math.round((correctCount / questions.length) * 100)
}

export const formatQuizResultForAPI = (
  userName: string,
  subject: string,
  topic: string,
  set: string,
  questions: Question[],
  userAnswers: string[][],
  timeTaken: number
): Omit<QuizResult, '_id' | 'createdAt' | 'updatedAt'> => {
  const score = calculateQuizScore(questions, userAnswers)
  
  return {
    user_name: userName,
    subject,
    topic,
    set,
    score,
    questions: questions.map((question, index) => ({
      id: index + 1,
      question: question.question,
      type: question.type,
      choices: question.choices,
      correctAnswers: question.correctAnswers,
      score: question.score,
      code: question.code || null,
      image: question.image || null,
      selectedAnswer: userAnswers[index] || [],
      isMatch: userAnswers[index] && 
        userAnswers[index].length === question.correctAnswers.length &&
        userAnswers[index].every(answer => question.correctAnswers.includes(answer))
    }))
  }
}

export const getQuizGrade = (percentage: number): { grade: string; color: string } => {
  if (percentage >= 90) return { grade: 'A+', color: 'text-green-600' }
  if (percentage >= 80) return { grade: 'A', color: 'text-green-500' }
  if (percentage >= 70) return { grade: 'B', color: 'text-yellow-500' }
  if (percentage >= 60) return { grade: 'C', color: 'text-orange-500' }
  return { grade: 'F', color: 'text-red-500' }
}

export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const getRandomQuestions = (questions: Question[], count: number): Question[] => {
  const shuffled = shuffleQuestions(questions)
  return shuffled.slice(0, Math.min(count, questions.length))
}