import { useState, useEffect } from 'react'
import { quizHistoryAPI, QuizResult } from '../services/api'

export const useQuizHistory = () => {
  const [history, setHistory] = useState<QuizResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchHistory = async (params?: {
    subject?: string
    topic?: string
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
    page?: number
    limit?: number
  }) => {
    setLoading(true)
    setError(null)
    try {
      const response = await quizHistoryAPI.getResults(params)
      setHistory(response.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch history')
    } finally {
      setLoading(false)
    }
  }

  const saveResult = async (result: Omit<QuizResult, '_id' | 'createdAt' | 'updatedAt'>) => {
    setLoading(true)
    setError(null)
    try {
      const response = await quizHistoryAPI.createResult(result)
      setHistory(prev => [response.data, ...prev])
      return response.data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save result')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const deleteResult = async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      await quizHistoryAPI.deleteResult(id)
      setHistory(prev => prev.filter(item => item._id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete result')
      throw err
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHistory({ sortBy: 'createdAt', sortOrder: 'desc' })
  }, [])

  return {
    history,
    loading,
    error,
    fetchHistory,
    saveResult,
    deleteResult,
  }
}