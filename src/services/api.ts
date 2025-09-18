const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

export interface QuizResult {
  _id?: string
  user_name: string
  subject: string
  topic: string
  set: string
  score: number
  questions: Array<{
    id: number
    question: string
    type: 'MCQs' | 'MAQs' | 'boolean'
    choices: string[]
    correctAnswers: string[]
    score: number
    code?: string
    image?: string
  }>
  createdAt?: string
  updatedAt?: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

class QuizHistoryAPI {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    return response.json()
  }

  async createResult(result: Omit<QuizResult, '_id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<QuizResult>> {
    return this.request('/results', {
      method: 'POST',
      body: JSON.stringify(result),
    })
  }

  async getResults(params?: {
    subject?: string
    topic?: string
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
    page?: number
    limit?: number
  }): Promise<ApiResponse<QuizResult[]>> {
    const queryParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString())
        }
      })
    }
    
    const query = queryParams.toString()
    return this.request(`/results${query ? `?${query}` : ''}`)
  }

  async getResult(id: string): Promise<ApiResponse<QuizResult>> {
    return this.request(`/results/${id}`)
  }

  async updateResult(id: string, updates: Partial<QuizResult>): Promise<ApiResponse<QuizResult>> {
    return this.request(`/results/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })
  }

  async deleteResult(id: string): Promise<ApiResponse<null>> {
    return this.request(`/results/${id}`, {
      method: 'DELETE',
    })
  }
}

export const quizHistoryAPI = new QuizHistoryAPI()