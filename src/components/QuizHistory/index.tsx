import { useEffect, useState } from 'react'
import { QuizResult } from '../../types/api'
import { quizAPI } from '../../services/api'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import { AppLogo, Refresh } from '../../config/icons'
import Button from '../ui/Button'
import PageCenter from '../ui/PageCenter'
import { convertSeconds } from '../../utils/helpers'

const QuizHistory = () => {
  const [results, setResults] = useState<QuizResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { userName, setCurrentScreen } = useQuiz()

  useEffect(() => {
    fetchUserResults()
  }, [userName])

  const fetchUserResults = async () => {
    if (!userName) return

    try {
      setLoading(true)
      const response = await quizAPI.getQuizResults({
        user_name: userName,
        sortBy: 'createdAt',
        sortOrder: 'desc'
      })
      setResults(response.results || [])
    } catch (err) {
      setError('Failed to load quiz history')
      console.error('Error fetching results:', err)
    } finally {
      setLoading(false)
    }
  }

  const goBack = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown'
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getScorePercentage = (score: number, totalScore: number) => {
    return Math.round((score / totalScore) * 100)
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (loading) {
    return (
      <PageCenter light justifyCenter>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-color mx-auto mb-4"></div>
          <p className="text-secondary-text">Loading your quiz history...</p>
        </div>
      </PageCenter>
    )
  }

  return (
    <PageCenter light>
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="text-app-logo mb-8 text-center">
          <AppLogo width={200} className="mx-auto" />
        </div>

        <div className="bg-card-bg rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-primary-text">Quiz History</h1>
              <p className="text-secondary-text mt-1">
                Welcome back, <span className="font-medium text-theme-color">{userName}</span>
              </p>
            </div>
            <Button
              text="Back to Quizzes"
              onClick={goBack}
              outline
            />
          </div>

          {error && (
            <div className="bg-danger-light border border-danger text-danger px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {results.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-medium text-primary-text mb-2">No Quiz History Yet</h3>
              <p className="text-secondary-text mb-6">
                You haven't taken any quizzes yet. Start your first quiz to see your results here!
              </p>
              <Button
                text="Take Your First Quiz"
                onClick={goBack}
                bold
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-primary-text">
                  Total Quizzes: {results.length}
                </h3>
                <Button
                  text="Refresh"
                  onClick={fetchUserResults}
                  icon={<Refresh />}
                  iconPosition="left"
                  outline
                />
              </div>

              <div className="grid gap-4">
                {results.map((result) => {
                  const percentage = getScorePercentage(result.score, result.questions.reduce((sum, q) => sum + q.score, 0))
                  const totalQuestions = result.questions.length
                  const correctAnswers = result.questions.filter(q => q.isMatch).length

                  return (
                    <div
                      key={result._id}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-primary-text">
                            {result.subject} - {result.topic}
                          </h4>
                          <p className="text-sm text-secondary-text">
                            Set: {result.set}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${getScoreColor(percentage)}`}>
                            {percentage}%
                          </div>
                          <div className="text-sm text-secondary-text">
                            {formatDate(result.createdAt)}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-secondary-text">Score:</span>
                          <div className="font-medium text-primary-text">
                            {result.score} / {result.questions.reduce((sum, q) => sum + q.score, 0)}
                          </div>
                        </div>
                        <div>
                          <span className="text-secondary-text">Questions:</span>
                          <div className="font-medium text-primary-text">
                            {correctAnswers} / {totalQuestions}
                          </div>
                        </div>
                        <div>
                          <span className="text-secondary-text">Accuracy:</span>
                          <div className="font-medium text-primary-text">
                            {Math.round((correctAnswers / totalQuestions) * 100)}%
                          </div>
                        </div>
                        <div>
                          <span className="text-secondary-text">Status:</span>
                          <div className={`font-medium ${percentage >= 60 ? 'text-success' : 'text-danger'}`}>
                            {percentage >= 60 ? 'Passed' : 'Failed'}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-border">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-secondary-text">
                            Questions attempted: {totalQuestions}
                          </div>
                          <button
                            onClick={() => {
                              // Could implement detailed view here
                              console.log('View details for:', result._id)
                            }}
                            className="text-theme-color hover:underline text-sm font-medium"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageCenter>
  )
}

export default QuizHistory