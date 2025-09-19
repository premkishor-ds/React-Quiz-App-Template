export interface QuizResult {
  _id?: string
  user_name: string
  subject: string
  topic: string
  set: string
  score: number
  questions: QuizQuestion[]
  createdAt?: string
  updatedAt?: string
}

export interface QuizQuestion {
  id: number
  question: string
  type: 'MCQs' | 'MAQs' | 'boolean'
  choices: string[]
  correctAnswers: string[]
  score: number
  code?: string | null
  image?: string | null
  selectedAnswer?: string[]
  isMatch?: boolean
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

export interface QuizResultsResponse {
  results: QuizResult[]
  total: number
  page: number
  limit: number
}