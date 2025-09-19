import { QuizResult, ApiResponse, QuizResultsResponse } from '../types/api'

const API_BASE_URL = 'http://localhost:3001'

class QuizAPI {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  async createQuizResult(result: Omit<QuizResult, '_id' | 'createdAt' | 'updatedAt'>): Promise<QuizResult> {
    const response = await this.request<QuizResult>('/results', {
      method: 'POST',
      body: JSON.stringify(result),
    })
    return response.data
  }

  async getQuizResults(params?: {
    user_name?: string
    subject?: string
    topic?: string
    search?: string
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
    page?: number
    limit?: number
  }): Promise<QuizResultsResponse> {
    const searchParams = new URLSearchParams()
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString())
        }
      })
    }

    const queryString = searchParams.toString()
    const endpoint = queryString ? `/results?${queryString}` : '/results'
    
    const response = await this.request<QuizResultsResponse>(endpoint)
    return response.data
  }

  async getQuizResultById(id: string): Promise<QuizResult> {
    const response = await this.request<QuizResult>(`/results/${id}`)
    return response.data
  }

  async updateQuizResult(id: string, updates: Partial<QuizResult>): Promise<QuizResult> {
    const response = await this.request<QuizResult>(`/results/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })
    return response.data
  }

  async deleteQuizResult(id: string): Promise<void> {
    await this.request(`/results/${id}`, {
      method: 'DELETE',
    })
  }

  async healthCheck(): Promise<{ status: string }> {
    const response = await this.request<{ status: string }>('/')
    return response.data
  }
}

export const quizAPI = new QuizAPI()